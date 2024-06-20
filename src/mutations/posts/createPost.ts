import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { MutationResolvers } from "../../types.js";

export const createPost: MutationResolvers['createPost'] =
    async (_, {title, content}, {dataSources}, __) => {
    try {
        const createdPost = await dataSources.db.post.create({
            data: {
                userId: "ea79eafe-f24a-4465-9438-bf89df231168",
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