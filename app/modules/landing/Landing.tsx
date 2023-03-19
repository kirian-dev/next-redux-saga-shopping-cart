import { FC } from 'react';
import styled from 'styled-components';

import { ProductsList } from './components/ProductsList';

// Define the styled components
const LandingSection = styled.section`
	display: flex;
	flex-direction: column;
`;

const MainHeading = styled.h1`
	font-size: 36px;
	text-align: center;
	padding: 16px 0;
`;

// Define the Landing component
export const Landing: FC = () => {
	//render ProductsList
	return (
		<LandingSection>
			<MainHeading>List of products</MainHeading>
			<ProductsList />
		</LandingSection>
	);
};
