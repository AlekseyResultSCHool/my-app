import styled from 'styled-components';

const IconContainer = ({ className, id, title, ...props }) => (
    <div className={className} {...props}>
        <i className={`fa ${id}`} aria-hidden="true" title = {`${title}`}></i>
    </div>
);

export const Icon = styled(IconContainer)`
    font-size: ${({ size = '24px' }) => size};
    margin: ${({ margin = '0'}) => margin}; 
    color: ${({ disable }) => disable ? '#ccc' : '#000'}; 
    
    &:hover {
		cursor: pointer;
	}
    
`;  
