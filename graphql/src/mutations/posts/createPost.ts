import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { MutationResolvers } from "../../types.js";

export const createPost: MutationResolvers['createPost'] =
    async (_, {title, content}, {dataSources, user}, __) => {
        
    if (!user) {
        return {
          code: 401,
          message: 'Unauthorized',
          success: false,
          post: null,
        };
      }

    try {
        const createdPost = await dataSources.db.post.create({
            data: {
                userId: user.id,
                title,
                content,
            }
        })
        return {
            code: 201,
            message: 'Created post',
            success: true,
            post: createdPost
        }
    } catch(e) {
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