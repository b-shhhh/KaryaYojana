import pkg from 'pg';
const {Pool} = pkg;
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
    user: 'postgres', 
    host: 'localhost',
    database: 'karyaYojana', 
    password: '1415', 
    port: 5432, 
})


//Code to CREATE Table in database
export const createTable = async () => {
  try {
    const query = `CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      username VARCHAR(255) UNIQUE NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      password TEXT NOT NULL,
      contact_number VARCHAR(15) NOT NULL,  
      gender VARCHAR(10) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;
    await pool.query(query);
    console.log("Table Created");
  } catch (err) {
    console.error("Error creating table", err);
  }
};


//For Employer Signup
  export const createTableEmployer = async () => {
    try {
      const query = `CREATE TABLE IF NOT EXISTS employers (
        id SERIAL PRIMARY KEY,
        company_name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password TEXT NOT NULL,
        contact VARCHAR(15) NOT NULL,
        address VARCHAR(255) NOT NULL,
        pan_number VARCHAR(15) NOT NULL,
        company_type VARCHAR(50) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
      `;
      await pool.query(query);
      console.log("Employer Table Created");
    } catch (err) {
      console.error("Error creating employer table", err);
    }
  };

  //For Applicant Profile/ Resume Builder
  export const createTableResume = async () => {
    try {
      const query = `CREATE TABLE IF NOT EXISTS resumes (
    id SERIAL PRIMARY KEY,                   
     user_id INT REFERENCES users(id) ON DELETE CASCADE,
    full_name VARCHAR(255) NOT NULL,           
    email VARCHAR(255) NOT NULL,               
    contact VARCHAR(20) NOT NULL,              
    address TEXT NOT NULL,                     
    education VARCHAR(100) NOT NULL,          
    experience TEXT,                           
    skills TEXT,                              
    certifications TEXT,                      
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

      `;
      await pool.query(query);
      console.log("Applicant Profile/Resume Builder Table Created");
    } catch (err) {
      console.error("Error creating employer table", err);
    }
  };


export {pool};