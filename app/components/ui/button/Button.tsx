import { ButtonHTMLAttributes, FC } from 'react';
import styled from 'styled-components';

// interface for the button component.
// This extends the ButtonHTMLAttributes interface from React to allow passing additional attributes to the button.
export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

// Define the styled components
const StyledButton = styled.button`
	background-color: #6a11cb;
	color: white;
	padding: 10px 20px;
	border: none;
	border-radius: 5px;
	cursor: pointer;
`;

// functional component for the button.
// This accepts props of type IButton and returns a StyledButton component with the passed props.
const Button: FC<IButton> = ({ children, ...rest }) => {
	return <StyledButton {...rest}>{children}</StyledButton>;
};

// Export the Button component as the default export.
export default Button;
