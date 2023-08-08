import { combineReducers, configureStore } from '@reduxjs/toolkit';
import chatReducer from './slice/ChatMessagesSlice';

export const rootReducer = combineReducers({
	chat: chatReducer,
});
