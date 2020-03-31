module.exports = `

  
type Query {
  users: String!
}

type User {
     name: String!
     lastName: String!
     sex: String!
     age: Int!
   }

type Mutation {
  createUser (name: String): User
}
   
`
