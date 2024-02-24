import { Icon } from '../../../../components';
import { TableRow } from '../table-row/table-row';
import { useServerRequest } from '../../../../hooks';
import { useState } from 'react';
import styled from 'styled-components';

const UserRowContainer = ({
	className,
	id,
	login,
	registeredAt,
	roleId: userRoleId,
	roles,
	onUserRemove,
}) => {
	const [initialRoleId, setInitialRoleId] = useState(userRoleId);
	const [selectedRoleId, setSelectedRoleId] = useState(userRoleId);
	const requestServer = useServerRequest();

	const onRoleChange = ({ target }) => {
		setSelectedRoleId(Number(target.value));
	};

	const onRoleSave = (userId, newUserRoleId) => {
		requestServer('updateUserRole', userId, newUserRoleId).then(() => {
			setInitialRoleId(newUserRoleId);
		});
	};

	const isSaveButtonDisable = selectedRoleId === initialRoleId;

	return (
		<div className={className}>
			<TableRow border={true}>
				<div className="login-column">{login}</div>
				<div className="registeredAt-column">{registeredAt}</div>
				<div className="role-column">
					<select value={selectedRoleId} onChange={onRoleChange}>
						{roles.map(({ id: roleId, name: roleName }) => (
							<option key={roleId} value={roleId}>
								{roleName}
							</option>
						))}
						;
					</select>
					<Icon
						id="fa-floppy-o"
						margin="0 0 0 10px"
						disable={isSaveButtonDisable}
						title="Удалить пользователя"
						onClick={() => onRoleSave(id, selectedRoleId)}
					/>
				</div>
			</TableRow>
			<Icon
				id="fa-trash-o"
				margin="0 0 0 10px"
				title="Удалить пользователя"
				onClick={onUserRemove}
			/>
		</div>
	);
};

export const UserRow = styled(UserRowContainer)`
	display: flex;
	margin-top: 10px;

	& select {
		font-size: 18px;
		padding: 0 5pxpx;
	}
`;
