import { createEmployer, findEmployerEmail } from '../model/employerAuthModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import xss from 'xss';
import validator from 'validator';

dotenv.config();
const jwtSecret = process.env.JWT_SECRET;
import { getEmployerById, updateEmployerById, deleteEmployerById } from '../model/employerAuthModel.js';
import { getEmployers, addEmployersByAdmin, updateEmployerByAdmin, deleteEmployerByAdmin, countEmployers } from '../model/employerAuthModel.js';     //Admin

// Fetch Employer Profile
export const getEmployerProfile = async (req, res) => {
  try {
    const employerId = req.user.id; // Assuming user ID is extracted from JWT
    const employer = await getEmployerById(employerId);

    if (!employer) {
      return res.status(404).json({ error: "Employer profile not found" });
    }

    res.status(200).json({ profile: employer });
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
};

// Update Employer Profile
export const updateEmployerProfile = async (req, res) => {
  try {
    const employerId = req.user.id;
    const photoPath = req.file ? `/uploads/${req.file.filename}` : null;
    const updatedData = {
      name: xss(req.body.name),
      email: xss(req.body.email),
      phoneNumber: xss(req.body.phoneNumber),
      companyType: xss(req.body.companyType),
      panNumber: xss(req.body.panNumber),
      companyDesc: xss(req.body.companyDesc),
      photoPath: photoPath,
    };

    const updatedEmployer = await updateEmployerById(employerId, updatedData);

    if (!updatedEmployer) {
      return res.status(404).json({ error: "Employer not found" });
    }

    res.status(200).json({ message: "Profile updated successfully", profile: updatedEmployer });
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
};

// Delete Employer Profile
export const deleteEmployerProfile = async (req, res) => {
  try {
    const employerId = req.user.id;
    const deletedEmployer = await deleteEmployerById(employerId);

    if (!deletedEmployer) {
      return res.status(404).json({ error: "Employer not found" });
    }

    res.status(200).json({ message: "Profile deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
};

// Employer Registration
export const employerRegister = async (req, res) => {
  const { companyName, email, password, contact, address, panNumber, companyType, role = "employer", companyDesc } = req.body;

  // Validation
  const emailCheck = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!email || !emailCheck.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  if (!validator.isLength(password, { min: 8 }) || 
      !/[A-Z]/.test(password) || 
      !/\d/.test(password) || 
      !/[@$!%*?&#]/.test(password)) {
    return res.status(400).json({ error: 'Password must be at least 8 characters long, include one uppercase letter, one number, and one special character.' });
  }

  if (!contact || contact.length !== 10 || !validator.isNumeric(contact)) {
    return res.status(400).json({ error: 'Contact number must be exactly 10 digits!' });
  }

  try {
    console.log("Checking if employer already exists...");
    const existingEmployer = await findEmployerEmail(email);

    if (existingEmployer) {
      console.log("Employer exists", existingEmployer);
      return res.status(400).json({ error: "Employer already exists" });
    }

    console.log("Hashing password...");
    const hashedPassword = await bcrypt.hash(password, 10);

    // Handle file upload
    const photoPath = req.file ? `/uploads/${req.file.filename}` : null; // Store file path, not buffer

    console.log("Creating new employer...");
    const newEmployer = await createEmployer(
      xss(companyName),
      xss(email),
      hashedPassword,
      xss(contact),
      xss(address),
      xss(panNumber),
      xss(companyType),
      role,
      xss(companyDesc),
      photoPath // Pass file path instead of buffer
    );

    if (!newEmployer) {
      console.log("Failed to create new employer");
      return res.status(500).json({ error: "Failed to create new employer" });
    }

    console.log("Generating JWT...");
    const token = jwt.sign(
      { id: newEmployer.employer.id, email: newEmployer.employer.email, role: newEmployer.employer.role },
      jwtSecret,
      { expiresIn: "24h" }
    );

    console.log("Sending response...");
    res.status(201).json({ message: "Employer created successfully", token });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ error: "Server error", details: error.message });
  }
};

// Employer Login
export const employerLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    console.log('Finding employer by email...');
    const employer = await findEmployerEmail(email);

    if (!employer) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    console.log('Comparing passwords...');
    const isMatch = await bcrypt.compare(password, employer.password);

    if (!isMatch) {
      console.log('Password does not match');
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    console.log('Password matched. Generating JWT...');
    const token = jwt.sign(
      { id: employer.id, email: employer.email, role: employer.role },
      jwtSecret,
      { expiresIn: '24h' }
    );

    res.status(200).json({
      message: 'Login successful',
      employer: { id: employer.id, companyName: employer.companyName, email: employer.email, role: employer.role },
      token,
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

// Fetch Employer Info (Admin)
export const fetchEmployerInfo = async (req, res) => {
  try {
    const employers = await getEmployers();
    if (!employers) {
      return res.status(404).json({ message: 'Employers Info not found' });
    }

    res.json({ message: 'Employers Info fetched', employers });
  } catch (error) {
    console.error('Error in fetchEmployerInfo:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Add Employer by Admin
export const addEmployer = async (req, res) => {
  const { companyName, email, password, contactNumber, address, panNumber, companyType } = req.body;

  // Validation
  if (!companyName || !email || !password || !contactNumber || !address || !panNumber || !companyType) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const emailCheck = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailCheck.test(email)) {
    return res.status(400).json({ error: 'Invalid email format.' });
  }

  if (!validator.isLength(password, { min: 8 }) || 
      !/[A-Z]/.test(password) || 
      !/\d/.test(password) || 
      !/[@$!%*?&#]/.test(password)) {
    return res.status(400).json({ error: 'Password must be at least 8 characters long and contain an uppercase letter, a number, and a special character.' });
  }

  if (contactNumber.length !== 10 || !/^\d+$/.test(contactNumber)) {
    return res.status(400).json({ error: 'Contact number must be exactly 10 digits and contain only numbers.' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newEmployer = await addEmployersByAdmin(companyName, email, hashedPassword, contactNumber, address, panNumber, companyType);
    res.status(201).json({ message: 'Employer added successfully', employer: newEmployer });
  } catch (error) {
    console.error('Error adding employer:', error);
    res.status(500).json({ message: 'Error adding employer', error: error.message });
  }
};

// Update Employer by Admin
export const updateEmployer = async (req, res) => {
  const { id } = req.params;
  let updateData = { ...req.body };

  // Validation
  if (updateData.email) {
    const emailCheck = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailCheck.test(updateData.email)) {
      return res.status(400).json({ error: 'Invalid email format.' });
    }
  }

  if (updateData.contact) {
    if (updateData.contact.length !== 10 || !/^\d+$/.test(updateData.contact)) {
      return res.status(400).json({ error: 'Contact number must be exactly 10 digits and contain only numbers.' });
    }
  }

  try {
    // If the request includes a password, hash it before updating
    if (updateData.password) {
      updateData.password = await bcrypt.hash(updateData.password, 10);
    }

    const updatingEmployer = await updateEmployerByAdmin(id, updateData);
    if (!updatingEmployer) {
      return res.status(404).json({ error: 'Employer not found' });
    }

    res.json(updatingEmployer);
  } catch (error) {
    console.error('Error updating employer:', error);
    res.status(500).json({ error: 'Error updating employer' });
  }
};

// Delete Employer by Admin
export const deleteEmployer = async (req, res) => {
  const employerId = req.params.id; // Get the employer ID from the request parameters
  try {
    const deletedEmployer = await deleteEmployerByAdmin(employerId);
    if (!deletedEmployer) {
      return res.status(404).json({ error: "Employer not found" });
    }
    res.status(200).json({ message: "Employer deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
};


// Total number of employee for admin dashboard
export const fetchTotalEmployers = async (req, res) => {
  try {
    const count = await countEmployers();
    res.json({ totalEmployers: count });
  } catch (error) {
    console.error('Error fetching total employers:', error);
    res.status(500).json({ error: 'Error fetching total employers' });
  }
};