db = require('./models/coronaappDb')
module.exports = {

  Query: {
    users:   (_, args) => {
      const allUsers =  db.getAllUsers()
      //console.log('here: ', allUsers)
      return allUsers
      return [
       {
          id: 1,
          name: 'Stev',
          lastName: 'Beck',
          sex: 'H',
          age: 36
        },
        {
          id: 2,
          name: 'MArlon',
          lastName: 'Becker',
          sex: 'H',
          age: 37
        }
      ]
    }
  },

  Mutation: {
    createUser: (_, args) => {
      return 'creating user'
    }
  }
}
