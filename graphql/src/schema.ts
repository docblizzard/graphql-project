import gql from "graphql-tag";


export const typeDefs = gql`

  scalar DateTime

  type Doctor {
    id: ID!
    name: String
    speciality: Speciality
    addresses: [Address]
  }

  type Address {
    zipCode: String
  }

  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    numberOfViews: Int!
    numberOfLikes: Int!
  }

  type Author {
    id: ID!
    name: String!
    photo: String
  }

  type Film { 
    id: ID!
    title: String
    people: [People]!
  }

  type Query {
    doctors(specialities: [Speciality!]): [Doctor]
    doctor(id: ID!): Doctor
    divide(number1: Int!, number2: Int!): Float!
    multiply(number1: Int!, number2: Int!): Float!
    closestColor(color: String!): String!
    getTracks: [Track!]!
    getFilms: [Film]!
    getPeople: [People]!
    getPost: getPostResponse!
    getComment: getCommentResponse!
    getCommentByPostId(postId: String!): getCommentResponse!
    getUser: getUserResponse!
    getPostById(userId: String!): getPostResponse!
  }
  
  type Mutation {
    incrementTrackViews(id: ID!): IncrementTrackViewsResponse!
    incrementLikes(id: ID!): IncrementLikesResponse!
    createUser(username: String!, password: String!): CreateUserResponse!
    signIn(username: String!, password: String!): SignInResponse!
    createPost(title: String!, content: String! ): CreatePostResponse!
    createComment(comment: String!): CreateCommentResponse!
  }
  
  type IncrementLikesResponse {
    code: Int!
    message: String!
    success: Boolean!
    track: Track
  }
  
  type IncrementTrackViewsResponse {
    code: Int!
    message: String!
    success: Boolean!
    track: Track
  }
  enum Speciality {
    PSYCHOLOGIST
    OPHTALMOLOGIST
  }
  
  type People {
    id: ID!
    name: String
    eyeColor: String
    films: [Film]!
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
    user: [User]
    message: String!
    success: Boolean!
  }
`;