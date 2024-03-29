import { addUser } from '../api';
import { sessions } from '../sessions';

export const register = async (regLogin, regPassword) => {
    const existedUser = await addUser(regLogin);

    if (!existedUser) {
        return {
            error: 'Такой логин уже занят',
            res: null,
        };
    }

    const user = await addUser(regLogin, regPassword);
    console.log(user);
    return {
        error: null,
        res: {
            id: user.id,
            login: user.login,
            roleId: user.role_id,
            session: sessions.create(user),
        },
    };
};
