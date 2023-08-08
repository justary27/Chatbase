'use client';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import createStore from './persistStore';

const { store, persistor } = createStore();

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>{children}</PersistGate>
		</Provider>
	);
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
