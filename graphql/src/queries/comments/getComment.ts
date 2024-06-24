import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { QueryResolvers } from "../../types";


export const getComment: QueryResolvers['getComment'] = 
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
            const fetchedComments = await dataSources.db.comment.findMany();
            return {
                code: 201,
                message: 'Fetched comments',
                success: true,
                comment: fetchedComments
            }
        } 
        catch(e) {
            if (e instanceof PrismaClientKnownRequestError) {
                return {
                  code: 401,
                  message: e.message,
                  success: false,
                  comment: null,
                }
            }
            return {
                code: 400,
                message: (e as Error).message,
                success: false,
                comment: null,
            }
        }
    }

    export const getCommentByPostId: QueryResolvers['getCommentByPostId'] = 
    async (_, {postId}, {dataSources, user}, __) => {

        if (!user) {
            return {
              code: 401,
              message: 'Unauthorized',
              success: false,
              comment: null,
            };
        }
        try {
            const fetchedComments = await dataSources.db.comment.findMany({
                where: {
                    postId: postId
                }}
            );
            return {
                code: 201,
                message: 'Fetched Comments',
                success: true,
                comment: fetchedComments
            }
        } 
        catch(e) {
            if (e instanceof PrismaClientKnownRequestError) {
                return {
                  code: 401,
                  message: e.message,
                  success: false,
                  comment: null,
                }
            }
            return {
                code: 400,
                message: (e as Error).message,
                success: false,
                comment: null,
            }
        }
    }