const db = require('./controllers/user')
module.exports = {

  Query: {
    users: async (_, args) => {
      const allUsers = await db.getAllUsers()
      return allUsers
    }
  },

  Mutation: {
    createUser: (_, args) => {
      return 'creating user'
    }
  }
}
