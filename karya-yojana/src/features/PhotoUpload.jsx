import React, { useState } from "react";
import "../css/photo.css";


const PhotoUpload = () => {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    address: "",
    gender: "",
    education: "",
    bio: "",
    experience: "",
    certifications: "",
    skills: "",
    reference: "",
  });
  

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.size <= 5 * 1024 * 1024) { // 5MB limit
      setFile(selectedFile);
      setPreviewUrl(URL.createObjectURL(selectedFile));
    } else {
      alert("File size must be less than 5MB.");
    }
  };
  

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data:", formData);
    console.log("Selected File:", file);
    alert("Form submitted successfully!");
  };
  const handleButtonClick = () => {
    document.getElementById("upload").click();
  };

  return (
    <div className="photo-upload">
      <form onSubmit={handleSubmit}>
        <div className="form-layout">
          {/* Profile Picture Section */}
          <div className="profile-sec">
          <div className="upload-button-container">
          <button type="button" onClick={handleButtonClick}>Select A Profile Picture</button>
          </div>
          <div className="profile-picture">
           
            <input type="file" accept="image/*" hidden onChange={handleFileChange} id="upload" />
            {previewUrl && (
              <img
                src={previewUrl}
                alt="Selected file preview"
              />
            )}
          </div>
          </div>
          <div className="form-fields">
            <div className="form-group">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
             <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
            <textarea
            id="Bio"
                name="bio"
                placeholder="Describe Yourself"
                value={formData.bio}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="contact"
                placeholder="Contact"
                value={formData.contact}
                onChange={handleInputChange}
                required
              />
              <input
              type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <select
                name="education"
                value={formData.education}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Your Education</option>
                <option value="see">SEE</option>
                <option value="plus2">+2/Equivalent Degree</option>
                <option value="undergrad">Under Graduate</option>
                <option value="postgrad">Post Graduate</option>
                <option value="phd">PhD</option>
              </select>
            </div>
            <div className="form-group">
            <textarea
                id="Exp"
                name="experience"
                placeholder="List all of your past experience here.&#10;Eg:&#10;- Company Name&#10;- Position&#10;- Duration&#10;- Description"
                value={formData.experience}
                onChange={handleInputChange}
                ></textarea>
            </div>
            <div className="form-group">
            <textarea
                id="certifications"
                name="certifications"
                placeholder="List all of your Certifications"
                value={formData.certifications}
                onChange={handleInputChange}
                ></textarea>
            </div>
            <div className="form-group">
            <textarea
                id="skills"
                name="skills"
                placeholder="List all of your Skills"
                value={formData.skills}
                onChange={handleInputChange}
                required
                ></textarea>
            </div>
            <div className="form-group">
            <textarea
                id="reference"
                name="reference"
                placeholder="Add References. &#10;Eg:&#10;- Name&#10;- Position&#10;- E-mail&#10;- Phone Number"
                value={formData.reference}
                onChange={handleInputChange}
                ></textarea>
            </div>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PhotoUpload;
