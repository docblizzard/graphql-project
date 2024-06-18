import { doctorsData } from "./schema.js";
export const resolvers = {
    Query: {
        doctors: (parent, args, context, info) => {
            console.log(args);
            return doctorsData;
        },
        getTracks: (_, __, { dataSources }, ___) => {
            return dataSources.trackAPI.getTracks();
        },
    },
    Track: {
        author: (parent, _, { dataSources }) => {
            return dataSources.trackAPI.getAuthorBy(parent.authorId);
        }
    },
};
