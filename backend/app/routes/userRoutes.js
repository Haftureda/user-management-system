import express from 'express';
import { getUsers, searchUsersHandler, filterUsersHandler } from '../controllers/userController.js';

const router = express.Router();

// GET /api/users - Get all users
router.get('/', getUsers);

// GET /api/users/search - Search users across multiple fields
router.get('/search', searchUsersHandler);

// GET /api/users/filter - Filter users by specific field
router.get('/filter', filterUsersHandler);

export default router;
