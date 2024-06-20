import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { MutationResolvers } from "../../types.js";

export const createComment: MutationResolvers['createComment'] =
    async (_, {comment}, {dataSources}, __) => {
    try {
        const createdComment = await dataSources.db.comment.create({
            data: {
                postId: "test",
                userId: "ea79eafe-f24a-4465-9438-bf89df231168",
                comment

            }
        })
        return {
            code: 201,
            message: 'Created post',
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