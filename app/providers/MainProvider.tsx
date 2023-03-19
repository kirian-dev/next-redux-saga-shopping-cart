import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import ReduxToastr from 'react-redux-toastr';

import { store } from '@/core/redux';
import { HeadProvider } from './HeadProvider';
import { persistor } from '@/core/redux';
import { Layout } from '@/components/layout/Layout';

import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

/**
The MainProvider component is a wrapper component that provides several functionalities for the children components that are passed to it.
The component wraps the HeadProvider component, which sets the metadata for the web page and provides a loading progress indicator.

The component also uses the Provider component from 'react-redux' to provide the store to the children components, which allows them to use Redux for state management.

The component uses PersistGate from 'redux-persist/integration/react' to ensure that the persisted state is rehydrated before rendering the children components.

The component also uses ReduxToastr to display toastr messages in the web application. 
The properties of the ReduxToastr component are set to display toastr messages for 4 seconds, prevent duplicates, position it in the top-left corner, 
and use a fade in and fade out effect. The component also includes a progress bar, and the toastr message will be closed when it is clicked.

Finally, the component renders the ReduxToastr component, Layout component, and the children components passed to it. 
The Layout component is a custom component that provides a layout structure for the web application's content.

Overall, the MainProvider component is a wrapper component that provides several functionalities such as metadata setting, loading progress indicator, 
Redux store, Redux state persistence, toastr message display, and layout structure to the children components passed to it.
 */

interface MainProviderProps {
	children: ReactNode;
}

const MainProvider: FC<MainProviderProps> = ({ children }) => {
	return (
		<HeadProvider>
			<Provider store={store}>
				<PersistGate persistor={persistor}>
					<ReduxToastr
						timeOut={4000}
						newestOnTop={false}
						preventDuplicates
						position="top-left"
						transitionIn="fadeIn"
						transitionOut="fadeOut"
						progressBar
						closeOnToastrClick
					/>
					<Layout>{children}</Layout>
				</PersistGate>
			</Provider>
		</HeadProvider>
	);
};

export default MainProvider;
