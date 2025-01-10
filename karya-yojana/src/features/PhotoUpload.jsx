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
  });

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreviewUrl(URL.createObjectURL(selectedFile)); // Generate a preview URL
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

  return (
    <div className="photo-upload">
      <form onSubmit={handleSubmit}>
        <div className="form-layout">
          {/* Profile Picture Section */}
          <div className="profile-picture">
            <label htmlFor="upload">Profile Picture</label>
            <input type="file" accept="image/*" onChange={handleFileChange} id="upload" />
            {previewUrl && (
              <img
                src={previewUrl}
                alt="Selected file preview"
                style={{ width: "150px", height: "auto", marginTop: "10px" }}
              />
            )}
          </div>

          {/* Form Fields Section */}
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
                required
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
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PhotoUpload;
