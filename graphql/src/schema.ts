import gql from "graphql-tag";


export const typeDefs = gql`

  scalar DateTime

  type User {
    id: ID!
    username: String!
    comment: [Comment]
    post: [Post]
  }

  type Post {
    id: ID!
    title: String!
    comment: [Comment]
    content: String!
    userId: String!
    createdAt: DateTime!
    updatedAt: DateTime!

  }

  type Comment {
    id: ID!
    userId: String!
    comment: String!
    postId: String!
    createdAt: DateTime!
    updatedAt: DateTime!

  }

  type Query {
    getPost: getPostResponse!
    getComment: getCommentResponse!
    getCommentByPostId(postId: String!): getCommentResponse!
    getUsers: getUsersResponse!
    getUserByToken(token: String!): getUserResponse!
    getUserById(userId: String!): getUserResponse!
    getPostById(userId: String!): getPostResponse!
  }
  
  type Mutation {
    createUser(username: String!, password: String!): CreateUserResponse!
    signIn(username: String!, password: String!): SignInResponse!
    createPost(title: String!, content: String! ): CreatePostResponse!
    createComment(comment: String!, postId: String!): CreateCommentResponse!
  }

  type CreateUserResponse {
    code: Int!
    message: String!
    success: Boolean!
    user: User
  }
  
  type SignInResponse {
    code: Int!
    message: String!
    success: Boolean!
    token: String
  }

  type CreatePostResponse {
    code: Int!
    post: Post
    message: String!
    success: Boolean!
  }

  type CreateCommentResponse {
    code: Int!
    comment: Comment
    message: String!
    success: Boolean!
  }

  type getCommentResponse {
    code: Int!
    comment: [Comment]
    message: String!
    success: Boolean!
  }

  type getPostResponse {
    code: Int!
    post: [Post]
    message: String!
    success: Boolean!
  }
  
  type getUserResponse {
    code: Int!
    user: User
    message: String!
    success: Boolean!
  }

  type getUsersResponse {
    code: Int!
    user: [User]
    message: String!
    success: Boolean!
  }
`;