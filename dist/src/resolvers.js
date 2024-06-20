import { createPost } from "./mutations/posts/createPost.js";
import { createUser } from "./mutations/users/createUser.js";
import { signIn } from "./mutations/users/signIn.js";
export const resolvers = {
    Query: {
        getTracks: (_, __, { dataSources }, ___) => {
            return dataSources.trackAPI.getTracks();
        },
        getFilms: (_, __, { dataSources }) => dataSources.ghibliApi.getFilms(),
        getPeople: (_, __, { dataSources }) => dataSources.ghibliApi.getPeople()
    },
    Mutation: {
        async incrementTrackViews(_, { id }, context, info) {
            try {
                const track = await context.dataSources.trackAPI.incrementTrackViews(id);
                const message = `Successfully incremented number of views for track ${id}`;
                return {
                    code: 200,
                    message,
                    success: Boolean(track),
                    track,
                };
            }
            catch (err) {
                return {
                    code: 304,
                    message: err?.message ?? 'Resource not modified, an internal error occured',
                    success: false,
                    track: null,
                };
            }
        },
        incrementLikes: async (_, { id }, { dataSources }) => {
            try {
                const track = await dataSources.trackAPI.incrementLikes(id);
                return {
                    code: 200,
                    track,
                    success: true,
                    message: 'Number of likes has been incremented'
                };
            }
            catch (e) {
                return {
                    code: 304,
                    message: 'Resource not modified',
                    success: false,
                    track: null,
                };
            }
        },
        createUser,
        signIn,
        createPost
    },
    Track: {
        author: (parent, _, { dataSources }) => {
            return dataSources.trackAPI.getAuthor(parent.authorId);
        }
    },
    Film: {
        people: ({ people }, args, context, info) => {
            return context.dataSources.ghibliApi.getPeopleByUrls(people);
        }
    },
    People: {
        eyeColor: ({ eye_color }) => eye_color,
        films: ({ films }, _, { dataSources }) => {
            return dataSources.ghibliApi.getFilmsByUrls(films);
        }
    },
    Doctor: {
        addresses: (parent, args, context, info) => {
            return [{
                    zipCode: `${parent.id}000`
                }];
        }
    }
};
