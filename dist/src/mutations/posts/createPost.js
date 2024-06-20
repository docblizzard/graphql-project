"use strict";
// import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
// import { MutationResolvers } from "../../types.js";
// export const createPost: MutationResolvers['createPost'] = async (_, {content, title}, {dataSources}, __) => {
//     try {
//         const createdPost = await dataSources.db.post.create({
//             data: {
//                 userId: "caca",
//                 title,
//                 content,
//             }
//         })
//         return {
//             code: 201,
//             message: 'Created post',
//             success: true,
//             post: createdPost
//         }
//     } catch(e) {
//         if (e instanceof PrismaClientKnownRequestError) {
//             return {
//               code: 401,
//               message: e.message,
//               success: false,
//               post: null,
//             }
//         }
//         return {
//             code: 400,
//             message: (e as Error).message,
//             success: false,
//             post: null,
//         }
//     }
// };
