import Head from 'next/head';
import { FC, ReactNode } from 'react';

import NextProgressBar from 'nextjs-progressbar';
import { accentColor } from '@/configs/constants';

/**
The code defines a functional component named HeadProvider that takes a single property named children of type ReactNode. 
The component is a wrapper component that surrounds the Head component and provides a NextProgressBar for indicating the loading progress of the web page.

The Head component is used to modify the metadata of the web page such as the title, character encoding, viewport, theme color, and description. 
These metadata changes improve the web page's SEO, user experience, and accessibility.
 */

export const HeadProvider: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<>
			<NextProgressBar
				color={accentColor}
				startPosition={0.3}
				stopDelayMs={200}
				height={3}
			/>
			<Head>
				<title>KIT Store</title>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />

				<meta name="theme-color" content={'#181B1E'} />
				<meta name="msapplication-navbutton-color" content={'#181B1E'} />
				<meta
					name="apple-mobile-web-app-status-bar-style"
					content={'#181B1E'}
				/>
				<meta
					name="description"
					content="This is a brief summary of the content of the web page."
				/>
			</Head>
			{children}
		</>
	);
};
