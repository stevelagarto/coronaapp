
module.exports = {

  Query: {
    users: (_, args) => {
      return 'query fo users'
    }
  },

  Mutation: {
    createUser: (_, args) => {
      return 'creating user'
    }
  }
}
