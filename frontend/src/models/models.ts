export type User = {
    id: string;
    username: string;
    comment: [Comment];
    post: [Post];
}

export type Post = {
    id: string;
    title: string;
    comment: [Comment];
    content: string;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
}

export type Comment = {
    id: string;
    userId: string;
    comment: string;
    postId: string;
    createdAt: Date;
    updatedAt: Date;
}