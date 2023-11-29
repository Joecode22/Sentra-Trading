const User = require('../../models/User');
const bcrypt = require('bcrypt');

const userResolvers = {
  Query: {
    async user(_, { id }) {
      return User.findById(id);
      // Add error handling
    },
    // Other queries
  },
  Mutation: {
    async createUser(_, { username, email, password }) {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({ username, email, password: hashedPassword });
      await newUser.save();
      // Return user data, handle errors
    },
    // Other mutations
  },
};

module.exports = userResolvers;
