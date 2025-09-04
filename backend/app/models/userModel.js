import axios from 'axios';

const apiUrl = 'https://dummyjson.com/users';

export const getAllUsers = async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch users from external API');
  }
};

export const searchUsers = async (query) => {
  try {
    const response = await axios.get(apiUrl);
    const users = response.data.users;
    
    if (query) {
      const filteredUsers = users.filter(user => 
        user.firstName.toLowerCase().includes(query.toLowerCase()) ||
        user.lastName.toLowerCase().includes(query.toLowerCase()) ||
        user.email.toLowerCase().includes(query.toLowerCase())
      );
      return { users: filteredUsers };
    }
    
    return { users };
  } catch (error) {
    throw new Error('Failed to search users');
  }
};

export const filterUsers = async (key, value) => {
  try {
    const response = await axios.get(`${apiUrl}/filter?key=${key}&value=${value}`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to filter users by ${key}`);
  }
};
