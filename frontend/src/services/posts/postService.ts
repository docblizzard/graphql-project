import gql from 'graphql-tag';
import { apolloClient } from '@/services/apolloClient';

class postService {

    async getPosts(){
        const fetchPosts = gql`
        query GetPost {
            getPost {
              message
              code
              post {
                title
                content
                createdAt
                updatedAt
                userId
                id
              }
            }   
        }`;
        try {
            const { data } = await apolloClient.query({ query: fetchPosts });
            return data.getPost
        }
        catch (error) {
            console.error('Error fetching posts:', error);
            throw error;
        }
    }

    async createPost({content}: {content:String}){
        const createPost = gql`
            mutation CreatePost($title: String!, $content: String!) {
            createPost(title: $title, content: $content) {
              post {
                content
                title
                userId
                createdAt
                id
              }
              message
              code
            }
        }`;
        try {
            const { data } = await apolloClient.mutate({mutation: createPost,
                variables: { title: "Post", content }
            });
            return data.createPost
        }
        catch (error) {
            console.error('Error creating post:', error)
            throw error
          }
    }
}

export default new postService();