import { getAllUsers, searchUsers, filterUsers } from '../models/UserModel.js';

// Get all users
export const getUsers = async (req, res, next) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (error) {
    next(error);
  }
};

// Search users (general search across multiple fields)
export const searchUsersHandler = async (req, res, next) => {
  try {
    const { q } = req.query;
    const users = await searchUsers(q);
    res.json(users);
  } catch (error) {
    next(error);
  }
};

// Filter users by specific field
export const filterUsersHandler = async (req, res, next) => {
  try {
    const { key, value } = req.query;
    
    if (!key || !value) {
      return res.status(400).json({ error: 'Field and value parameters are required' });
    }
    
    // Validate field parameter
    const validFields = ['firstName', 'lastName', 'email', 'phone', 'age'];
    if (!validFields.includes(key)) {
      return res.status(400).json({ error: 'Invalid field parameter' });
    }
    
    const users = await filterUsers(key, value);
    res.json(users);
  } catch (error) {
    next(error);
  }
};
