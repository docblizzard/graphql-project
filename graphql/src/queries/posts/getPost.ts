import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { QueryResolvers } from "../../types";


export const getPost: QueryResolvers['getPost'] = 
    async (_, ___, {dataSources, user}, __) => {
        
        if (!user) {
            return {
              code: 401,
              message: 'Unauthorized',
              success: false,
              comment: null,
            };
        }

        try {
            const fetchedPosts = await dataSources.db.post.findMany();
            return {
                code: 201,
                message: 'Fetched posts',
                success: true,
                post: fetchedPosts
            }
        } 
        catch(e) {
            if (e instanceof PrismaClientKnownRequestError) {
                return {
                  code: 401,
                  message: e.message,
                  success: false,
                  post: null,
                }
            }
            return {
                code: 400,
                message: (e as Error).message,
                success: false,
                post: null,
            }
        }
    };

export const getPostById: QueryResolvers['getPostById'] =
    async (_, {userId}, {dataSources, user}, __) => {
        
        if (!user) {
            return {
              code: 401,
              message: 'Unauthorized',
              success: false,
              comment: null,
            };
        }

        try {
            const fetchedPosts = await dataSources.db.post.findMany({
                where: {
                    userId: userId
                }}
            );
            console.log(fetchedPosts)
            return {
                code: 201,
                message: 'Fetched posts',
                success: true,
                post: fetchedPosts
            }
        } 
        catch(e) {
            if (e instanceof PrismaClientKnownRequestError) {
                return {
                  code: 401,
                  message: e.message,
                  success: false,
                  post: null,
                }
            }
            return {
                code: 400,
                message: (e as Error).message,
                success: false,
                post: null,
            }
        }
    }   