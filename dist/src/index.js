import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema.js';
import { resolvers } from './resolvers.js';
import { TrackAPI } from './datasources/TrackAPI.js';
import { GhibliAPI } from './datasources/GhibliAPI.js';
import { getUser } from './modules/auth.js';
import db from '../prisma/db.js';
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
    context: async ({ req }) => {
        const authorization = (req.headers.authorization)?.split('Bearer ')?.[1];
        const user = authorization ? getUser(authorization) : null;
        const cache = server.cache;
        return {
            dataSources: {
                db,
                trackAPI: new TrackAPI({ cache }),
                ghibliApi: new GhibliAPI({ cache })
            },
            user,
        };
    }
});
console.log(`🚀  Server ready at: ${url}`);
