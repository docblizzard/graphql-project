import { comparePasswords, createJWT } from "../../modules/auth.js";
import { MutationResolvers } from "../../types.js";

export const signIn: MutationResolvers['signIn'] = async (_, {password, username}, {dataSources}) => {
  try {
    const user = await dataSources.db.user.findUniqueOrThrow({where: {username}});
    const isValidPassword = await comparePasswords(password, user.password)

    if(!isValidPassword) {
      console.log("wrong")
        return {
          code: 401,
          message: 'Username or password is incorrect',
          success: false,
          token: null
        }
    }
    const token = createJWT(user);
    return {
      code: 200,
      message: 'User has been signed',
      success: true,
      token
    }
  } catch(e) {
    console.log("check") 
    console.log(`${(e as Error)?.message}`)
    return {
      code: 403,
      message: 'Something wrong happened',
      success: false,
      token: null
    }
  }
}