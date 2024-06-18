import { Resolvers, Speciality } from "./types.js"

const doctorsData = [
    {
      id: '1',
      name: 'Samia Mekame',
      speciality: Speciality.Ophtalmologist,
    },
    {
      id: '2',
      name: 'Catherine Bedoy',
      speciality: Speciality.Psychologist,
    },
    {
      id: '3',
      name: 'John Doe',
      speciality: Speciality.Ophtalmologist,
    },
];
  
export const resolvers: Resolvers = {
    Query: {
        doctors: (parent, args, context, info) => {
            console.log(args)
            return doctorsData
        },

        getTracks: (_, __, {dataSources}, ___) => {
          return dataSources.trackAPI.getTracks()
        },
    },
    Track: {
        author: (parent, _, {dataSources}) => {
          return dataSources.trackAPI.getAuthor(parent.authorId)  
        }
    },
};