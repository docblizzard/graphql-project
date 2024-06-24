import { gql } from 'graphql-tag';
import { apolloClient } from '@/services/apolloClient';

class commentService {

    async getCommentsByPostId(postId: string) {
        const fetchComments = gql`
            query GetCommentByPostId($postId: String!) {
              getCommentByPostId(postId: $postId) {
                code
                message
                comment {
                  comment
                  createdAt
                  id
                  postId
                  userId
                }
              }
            }`;
        try {
            const { data } = await apolloClient.query({ query: fetchComments,
                variables: {postId}
             });
            return data.getCommentByPostId.comment
        }
        catch (error) {
            console.error('Error fetching comments:', error);
            throw error;
        }
    }

    async createComment({comment, postId}: {comment:String, postId: String}) {
        const createComment = gql`
            mutation CreateComment($comment: String!, $postId: String!) {
              createComment(comment: $comment, postId: $postId) {
                code
                message
                comment {
                  id
                  comment
                  createdAt
                  postId
                  userId
                }
              }
            }`;
        try {
            const { data } = await apolloClient.mutate({mutation: createComment,
                variables: { comment, postId }
            });
            return data.createComment
        }
        catch (error) {
            console.error('Error creating post:', error)
            throw error
          }
    }
}

export default new commentService();