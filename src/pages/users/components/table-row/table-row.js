import styled from 'styled-components';

const TableRowcontainer = ({ className, children }) => {
	return <div className={className}>{children}</div>;
};

export const TableRow = styled(TableRowcontainer)`
	display: flex;
	align-items: center;
	border: ${({ border }) => (border ? '1px solid #000;' : 'none')};

	& > div {
		display: flex;
		padding: 0 10px;
	}

	& .login-column {
		width: 172px;
	}
	& .registeredAt-column {
		width: 213px;
	}
	& .role-column {
		display: flex;
		width: auto;
	}
`;
