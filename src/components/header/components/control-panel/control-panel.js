import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Icon, Button } from '../../../../components';
import { ROLE } from '../../../../constants';
import styled from 'styled-components';
import {
	selectUserRole,
	selectUserLogin,
	selectUserSession,
} from '../../../../selectors';
import { logout } from '../../../../actions';

const RightAligned = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const StyledBackIcon = styled.div`
	&:hover {
		cursor: pointer;
	}
`;

const UserName = styled.div`
	font-size: 18px;
	font-weight: bold;
`;

const ControlPanelContainer = ({ className }) => {
	const navigate = useNavigate();
	const roleId = useSelector(selectUserRole);
	const login = useSelector(selectUserLogin);
	const session = useSelector(selectUserSession);
	const dispatch = useDispatch();

	return (
		<div className={className}>
			<RightAligned>
				{roleId === ROLE.GUEST ? (
					<Button>
						<Link to="/login">Войти</Link>
					</Button>
				) : (
					<>
						<UserName>{login}</UserName>
						<Icon
							id="fa-sign-out"
							margin="0 0 0 10px"
							title="Выход"
							onClick={() => dispatch(logout(session))}
						/>
					</>
				)}
			</RightAligned>
			<RightAligned>
				<StyledBackIcon href="" onClick={() => navigate(-1)}>
					<Icon id="fa-backward" margin="10px 0 0 0" title="Назад" />
				</StyledBackIcon>
				<Link to="/post">
					<Icon
						id="fa-file-text-o"
						margin="10px 0 0 16px"
						title="Новая статья"
					/>
				</Link>
				<Link to="/users">
					<Icon id="fa-users" margin="10px 0 0 16px" title="Пользователи" />
				</Link>
			</RightAligned>
		</div>
	);
};

export const ControlPanel = styled(ControlPanelContainer)``;
