import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { QueryResolvers } from "../../types";
import { getUser } from "../../modules/auth.js";


export const getUsers: QueryResolvers['getUsers'] = 
    async (_, ___, {dataSources, user}, __) => {
        
        if (!user) {
            return {
              code: 401,
              message: 'Unauthorized',
              success: false,
              comment: null,
            };
          }
        try {
            const fetchedUser = await dataSources.db.user.findMany();
            return {
                code: 201,
                message: 'Fetched users',
                success: true,
                user: fetchedUser
            }
        } 
        catch(e) {
            if (e instanceof PrismaClientKnownRequestError) {
                return {
                  code: 401,
                  message: e.message,
                  success: false,
                  user: null,
                }
            }
            return {
                code: 400,
                message: (e as Error).message,
                success: false,
                user: null,
            }
        }
    }

export const getUserByToken: QueryResolvers['getUserByToken'] = 
async (_, {token}, {dataSources, user}, __) => {

    if (!user) {
        return {
            code: 401,
            message: 'Unauthorized',
            success: false,
            comment: null,
        };
    }
    const userByToken = getUser(token)

    try {
        const fetchedUser = await dataSources.db.user.findUnique({
            where: { id: userByToken?.id }
        });
        return {
            code: 201,
            message: 'Fetched users',
            success: true,
            user: fetchedUser
        }
    } 
    catch(e) {
        return {
            code: 503,
            message: (e as Error).message,
            success: false,
            user: null,
        }
    }
}

export const getUserById: QueryResolvers['getUserById'] = 
async (_, {userId}, {dataSources, user}, __) => {

    if (!user) {
        return {
          code: 401,
          message: 'Unauthorized',
          success: false,
          comment: null,
        };
    }
    try {
        const fetchedUser = await dataSources.db.user.findUnique({
            where: { id: userId }
        });
        return {
            code: 201,
            message: 'Fetched users',
            success: true,
            user: fetchedUser
        }
    } 
    catch(e) {
        return {
            code: 503,
            message: (e as Error).message,
            success: false,
            user: null,
        }
    }
}