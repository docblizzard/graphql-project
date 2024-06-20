import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { MutationResolvers } from "../../types.js";

export const createComment: MutationResolvers['createComment'] =
    async (_, { comment }, {dataSources, user}, __) => {

    if (!user) {
        return {
          code: 401,
          message: 'Unauthorized',
          success: false,
          comment: null,
        };
      }

    try {
        const createdComment = await dataSources.db.comment.create({
            data: {
                comment,
                userId: user.id,
                postId: "3b0f95ca-c5a4-4e58-adc6-c6a25285d60f"
            }
        })
        return {
            code: 201,
            message: 'Created comments',
            success: true,
            comment: createdComment
        }
    } catch(e) {
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
};