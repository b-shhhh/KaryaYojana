import express from 'express';
import {register, login} from '../controller/authenticationController.js';

const router = express.Router();

// POST route to register a new user
router.post('/register', register);
router.post('/login', login);


export default router;
