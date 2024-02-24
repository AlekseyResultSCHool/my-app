import { Content, H2 } from '../../components';
import { ROLE } from '../../constants';
import { useServerRequest } from '../../hooks';
import { TableRow, UserRow } from './components';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const UsersContainer = ({ className }) => {
	const [users, setUsers] = useState([]);
	const [roles, setRoles] = useState([]);
	const [shouldUpdateUserList, setShouldUpdateUserList] = useState(false);
	const [errorMessage, setErrorMessage] = useState(null);
	const requestServer = useServerRequest();

	useEffect(() => {
		Promise.all([requestServer('fetchUsers'), requestServer('fetchRoles')]).then(
			([usersRes, rolesRes]) => {
				if (usersRes.error || rolesRes.error) {
					setErrorMessage(usersRes.error || rolesRes.error);
					return;
				}
				setUsers(usersRes.res);
				setRoles(rolesRes.res);
			},
		);
	}, [requestServer, shouldUpdateUserList]);

	const onUserRemove = (userId) => {
		requestServer('removeUser', userId).then(() => {
			setShouldUpdateUserList(!shouldUpdateUserList);
		});
	};

	return (
		<div className={className}>
			<Content error={errorMessage}>
				<H2>Пользователи</H2>
				<div>
					<TableRow>
						<div className="login-column">Логин</div>
						<div className="registeredAt-column">Дата регистрации</div>
						<div className="role-column">Роль</div>
					</TableRow>
					{users.map(({ id, login, roleId, registeredAt }) => (
						<UserRow
							key={id}
							id={id}
							login={login}
							registeredAt={registeredAt}
							roleId={roleId}
							roles={roles.filter(
								({ id: roleId }) => roleId !== '3',
							)}
							onUserRemove={() => onUserRemove(id)}
						/>
					))}
				</div>
			</Content>
		</div>
	);
};

export const Users = styled(UsersContainer)`
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 570px;
	margin: 0 auto;
	font-size: 18px;
`;
