import { gql } from 'apollo-server';

const typeDefs = gql`
  type Person {
    name: String
    height: String
    mass: String
    gender: String
    homeworld: String
  }

  type PeoplePage {
    results: [Person]
    next: String
    previous: String
  }

  type Query {
    allPeople(page: Int!): PeoplePage
    searchPeople(name: String!): [Person]
    person(name: String!): Person
  }
`;

export default typeDefs;
