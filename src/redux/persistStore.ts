import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';

import { rootReducer } from './rootReducer';

const persistConfig = {
	key: 'root',
	storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const createStore = () => {
	const store = configureStore({
		reducer: persistedReducer,
		devTools: process.env.NODE_ENV !== 'production',
	});

	const persistor = persistStore(store);

	return { store, persistor };
};

export default createStore;
