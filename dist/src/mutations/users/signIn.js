import { comparePasswords, createJWT } from "../../modules/auth.js";
export const signIn = async (_, { password, username }, { dataSources }) => {
    try {
        const user = await dataSources.db.user.findUniqueOrThrow({ where: { username } });
        const isValidPassword = await comparePasswords(password, user.password);
        if (!isValidPassword) {
            throw new Error('Invalid password provided');
        }
        const token = createJWT(user);
        return {
            code: 200,
            message: 'User has been signed',
            success: true,
            token
        };
    }
    catch (e) {
        console.log(`${e?.message}`);
        return {
            code: 403,
            message: 'Something wrong happened',
            success: false,
            token: null
        };
    }
};
