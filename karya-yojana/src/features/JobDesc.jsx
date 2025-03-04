import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import emailjs from "@emailjs/browser";
import DOMPurify from "dompurify";
import he from "he"; // Import 'he' to decode HTML entities
import "../css/jobdesc.css"; // Import CSS for styling

const JobDesc = () => {
  const { jobId } = useParams(); // Get job ID from URL
  const [jobDetails, setJobDetails] = useState(null);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `http://localhost:3000/api/jobposting/jobdesc/${jobId}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );

        console.log("Raw API Response:", response.data[0]); // Debugging log
        setJobDetails(response.data[0]);
      } catch (error) {
        console.error("Error fetching job details:", error);
      }
    };

    fetchJobDetails();
  }, [jobId]);

  if (!jobDetails) {
    return <div>Loading...</div>;
  }

  // Decode HTML and sanitize it before rendering
  const sanitizedDescription = DOMPurify.sanitize(he.decode(jobDetails.description));
  const sanitizedQualifications = DOMPurify.sanitize(he.decode(jobDetails.qualifications));

  const handleApplyClick = async () => {
    const token = localStorage.getItem("token");

    try {
      // Step 1: Apply for the job (store in database)
      const applyResponse = await axios.post(
        "http://localhost:3000/api/jobapplication/applications/apply",
        { jobId: jobId },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setMessage(applyResponse.data.message);

      // Step 2: Fetch the user's resume details
      const resumeResponse = await axios.get("http://localhost:3000/api/resumes", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (resumeResponse.data.resumes.length === 0) {
        setMessage("No resume found. Please upload your resume first.");
        return;
      }

      const resume = resumeResponse.data.resumes[0]; // Assuming one resume per user

      // Step 3: Send email with resume details using EmailJS
      const emailPayload = {
        to_email: jobDetails.employer_email, // Ensure jobDetails includes employer_email
        job_title: jobDetails.title,
        from_name: resume.full_name,
        from_email: resume.email,
        contact: resume.contact,
        education: resume.education,
        experience: resume.experience,
        skills: resume.skills,
        certifications: resume.certifications,
      };

      await axios.post("https://api.emailjs.com/api/v1.0/email/send", {
        service_id: "service_i4moyir",
        template_id: "template_ikjkuey",
        user_id: "V5WDcXxxw6V_Pg0qV",
        template_params: emailPayload,
      });

      setMessage("Application submitted successfully, and email sent!");
      navigate("/applications");
    } catch (error) {
      console.error("Error applying for job:", error);
      setMessage(error.response?.data?.message || "An error occurred while applying for the job.");
    }
  };

  return (
    <div className="job-desc-container">
      <div className="job-header">
        <img
          src={`http://localhost:3000${jobDetails.employer_profile_picture}`}
          alt={jobDetails.employer_name}
          className="company-logo"
        />
        <div className="job-header-details">
          <h2>{jobDetails.employer_name}</h2>
          <h4>{jobDetails.title}</h4>
        </div>
        <div className="job-section-head">
          <h3>Job Type</h3>
          <p>{jobDetails.position}</p>
        </div>
        <div className="job-section-head">
          <h3>Deadline</h3>
          <p>{new Date(jobDetails.deadline).toLocaleDateString() || "N/A"}</p>
        </div>
        <div className="job-section-head">
          <h3>Salary</h3>
          <p>Rs.{jobDetails.salary}/month</p>
        </div>
      </div>

      <div className="job-details">
        <div className="job-section">
          <h3>Job Description</h3>
          <div dangerouslySetInnerHTML={{ __html: sanitizedDescription }} />
        </div>

        <div className="job-section">
          <h3>Job Qualifications</h3>
          {jobDetails.qualifications ? (
            <div dangerouslySetInnerHTML={{ __html: sanitizedQualifications }} />
          ) : (
            <p>No job qualifications available.</p>
          )}
        </div>
      </div>

      {message && <div className="message">{message}</div>}

      <div className="apply-button-container">
        <button className="apply-button" onClick={handleApplyClick}>
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobDesc;
