import { deleteUser } from '../api';
import { ROLE } from '../constants'; 
import { sessions } from '../sessions';

export const removeUser = async (userSession, userId, newUserRoleId) => {
    const accessRoles = [ROLE.ADMIN];

	if (!sessions.access(userSession, accessRoles)) {
		return {
			error: 'Доступ запрещен',
			res: null,
		};
	}

	deleteUser(userId, newUserRoleId);

	return {
		error: null,
		res: true,
	};
};