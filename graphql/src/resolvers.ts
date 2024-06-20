import { createComment } from "./mutations/comments/createComment.js";
import { createPost } from "./mutations/posts/createPost.js";
import { createUser } from "./mutations/users/createUser.js";
import { signIn } from "./mutations/users/signIn.js";
import { getComment, getCommentByPostId } from "./queries/comments/getComment.js";
import { getPost, getPostById } from "./queries/posts/getPost.js";

import { getUser } from "./queries/users/getUser.js";
import { Resolvers } from "./types.js";

export const resolvers: Resolvers = {
    Query: {
        getComment,
        getPost,
        getUser,
        getPostById,
        getCommentByPostId
    },
    
    Mutation: {
      createUser,
      signIn,
      createPost,
      createComment
    },
};