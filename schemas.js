module.exports = `

type Query {
  users: [User!]
}

type User {
  id: Int!
  name: String!
  lastName: String!
  sex: String!
  age: Int!
  }

type Mutation {
  createUser (name: String): User
}
   
`
