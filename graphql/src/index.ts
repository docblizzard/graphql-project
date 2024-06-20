import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import {gql} from 'graphql-tag'
import { typeDefs } from './schema.js';
import { resolvers } from './resolvers.js';
import { getUser } from './modules/auth.js';
import db from '../prisma/db.js';


const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
   
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
    context: async ({req}) => {
      const authorization = (req.headers.authorization)
      const user = authorization ? getUser(authorization) : null;
      if (user){
      }
      const cache = server.cache
      return {
        dataSources: {
          db,
        },
        user,
      }
    }
  });
   
  console.log(`🚀  Server ready at: ${url}`);