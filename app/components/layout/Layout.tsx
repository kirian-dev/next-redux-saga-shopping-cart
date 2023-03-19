import { FC } from 'react';
import styled from 'styled-components';

import { Header } from './header';

// Props for the Layout component.
type LayoutProps = {
	children: React.ReactNode;
};

// Define the styled components
const Container = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	position: relative;
`;

const Main = styled.main`
	flex: 1;
	max-width: 1560px;
	padding: 0 16px;
	margin: 72px auto 24px;
`;

export const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<Container>
			<Header />
			<Main>{children}</Main>
		</Container>
	);
};
