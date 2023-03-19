import { FC } from 'react';
import styled, { keyframes } from 'styled-components';

// Define the styled components
// keyframe animation that rotates the element 360 degrees
const rotateAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Loader = styled.div`
	display: inline-block;
	width: 5rem;
	height: 5rem;
	margin-top: 3rem;
	border: 0.25rem solid #ccc;
	border-top-color: #6a11cb;
	border-radius: 50%;
	animation: ${rotateAnimation} 0.6s linear infinite;
`;

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
`;

//interface for the props that the component will accept
interface LoaderProps {
	message?: string;
}

// Define a functional component for the MainLoader.
export const MainLoader: FC<LoaderProps> = ({ message }) => {
	return (
		<Wrapper>
			<Loader />
			{message && <p>{message}</p>}
		</Wrapper>
	);
};
