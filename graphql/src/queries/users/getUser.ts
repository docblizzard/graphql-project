import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { QueryResolvers } from "../../types";


export const getUser: QueryResolvers['getUser'] = 
    async (_, ___, {dataSources, user}, __) => {
        
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