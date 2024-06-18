import gql from "graphql-tag";
export const typeDefs = gql `
  type Doctor {
    name: String
    speciality: Speciality
  }
 
  type Query {
    doctors: [Doctor]
  }
 
  enum Speciality {
    PSYCHOLOGIST
    OPHTALMOLOGIST
  }

  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
  }
  
  type Author {
    id: ID!
    name: String!
    photo: String
  }

  type Query {
    getTracks: [Track!]!
  }
`;
export const doctorsData = [
    {
        name: 'Samia Mekame',
        speciality: 'OPHTALMOLOGIST',
    },
    {
        name: 'Catherine Bedoy',
        speciality: 'PSYCHOLOGIST',
    },
];
