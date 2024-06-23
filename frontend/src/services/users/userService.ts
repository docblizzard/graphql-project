import gql from 'graphql-tag';
import { apolloClient } from '@/services/apolloClient';

class userService {

    async getUserbyToken(token: string){
        const fetchUser = gql`
          query GetUserByToken($token: String!) {
            getUserByToken(token: $token) {
              code
              success
              message
              user {
                id
                username
              }
            }
          }
        `;
        try {
            const { data } = await apolloClient.query({ query: fetchUser,
              variables: { token }
             });
            return data.getUserByToken.user; 
        }
        catch (error) {
            console.error('Error fetching user:', error);
            throw error;
        }
    }

    async getUserbyId(userId: string){
        const fetchUser = gql`
          query getUserById($userId: String!) {
            getUserById(userId: $userId) {
              code
              success
              message
              user {
                id
                username
              }
            }
          }`;
        try {
            const { data } = await apolloClient.query({ query: fetchUser,
              variables: { userId }
             });
            return data.getUserById.user; 
        }
        catch (error) {
            console.error('Error fetching user:', error);
            throw error;
        }
    }
    
    async createUser({username, password}: {username: string, password: string}){
        const createUser = gql`
            mutation CreateUser($username: String!, $password: String!) {
              createUser(username: $username, password: $password) {
                user {
                  username
                  id
                }
                success
                message
                code
              }
            }`;

        try {
            const { data } = await apolloClient.mutate({ mutation: createUser,
                variables: { username, password }
             });
            return data.createUser; 
        }
        catch (error) {
            console.error('Error creating user:', error);
            throw error;
          }
    }
}

export default new userService();