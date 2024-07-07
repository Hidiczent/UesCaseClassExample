const User = require('../models/User');

class UserController {
  
  static async getAllUsers(req, res) {
    try {
      const users = await User.getAllUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async getUserById(req, res) {
    const { id } = req.params;
    try {
      const user = await User.getUserById(id);
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async createUser(req, res) {
    const { username, email, password } = req.body;
    try {
      const user = await User.createUser({ username, email, password });
      if(user){
        res.json(user,{message:" create User Successfully"})
      }
      res.status(201).json(user,username,email,password);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async updateUser(req, res) {
    const { id } = req.params;
    const { username, email, password } = req.body;
    try {
      const user = await User.updateUser(id, { username, email, password });
      if (user) {
        res.json(user,{message:"User Update Successfully"});
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async deleteUser(req, res) {
    const { id } = req.params;
    try {
      const success = await User.deleteUser(id);
      if (success) {
        res.json({ message: 'User deleted successfully' });
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = UserController;
