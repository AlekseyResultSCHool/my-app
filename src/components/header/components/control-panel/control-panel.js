import { Link, useNavigate } from 'react-router-dom';
import { Icon } from '../../../../components';
import styled from 'styled-components';

const RightAligned = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const StyledLink = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: centr;

	font-size: 18px;
	width: 100px;
	height: 32px;
	cursor: pointer;
	color: #000;
	text-decoration: none;
	border: 1px solid #000;
	background-color: #eee;
`;

const StyledBatton = styled.div`
	&:hover {
		cursor: pointer; 
	}
`;

const ControlPanelContainer = ({ className }) => {
	const navigate = useNavigate();

	return (
		<div className={className}>
			<RightAligned>
				<StyledLink to="/login">Войти</StyledLink>
			</RightAligned>
			<RightAligned>
				<StyledBatton href="" onClick={() => navigate(-1)}>
					<Icon id="fa-backward" margin="10px 0 0 0" title="Назад" />
				</StyledBatton>
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
