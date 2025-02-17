import { createJob } from "../model/employerJobPostingModel.js";
import {isTransactionValid} from "../model/employerJobPostingModel.js";

export const postJob = async (req, res) => {
    const employerId = req.user.id;      
    const { title, deadline, salary, position, description, qualifications, transaction }= req.body;
    
    try {
        const isValid = await isTransactionValid(transaction);
        console.log("Request Body:", req.body);
        if (!isValid) {
            return res.status(400).json({ message: "Transaction ID has already been used 10 times." });
        }
        const newJob = await createJob(title, deadline, salary, position, description, qualifications, employerId, transaction );
        res.status(201).json({ message: "Job posting created.", job: newJob });
    }catch (error) {
        console.error("Error creating job posting:", error);
        res.status(500).json({ message: "Internal server error." });
    }
    };
