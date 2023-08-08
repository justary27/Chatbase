import MessageType from '@/enums/MessageType';
import ChatMessage from '@/models/ChatMessageModel';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialMsg: ChatMessage = {
	msgId: '1',
	msgContent: '👋 Hi! I am ChatbaseAI, ask me anything about Chatbase!',
	msgType: MessageType.botResponse,
};

const initialQuickMsgs: Array<ChatMessage> = [
	{
		msgId: '2',
		msgContent: 'What is Chatbase?',
		msgType: MessageType.user,
	},
	{
		msgId: '3',
		msgContent: 'How do I add data to my chatbot?',
		msgType: MessageType.user,
	},
];

type ChatState = {
	messages: Array<ChatMessage>;
	quickMessages: Array<ChatMessage>;
	isLoading: boolean;
	error?: string;
};

const initialState: ChatState = {
	messages: [initialMsg],
	quickMessages: initialQuickMsgs,
	isLoading: false,
};

export const chatState = createSlice({
	name: 'chatState',
	initialState,
	reducers: {
		resetEntireChat: () => initialState,
		addMsg: (state, action: PayloadAction<ChatMessage>) => {
			state.messages = [...state.messages, action.payload];
			if (action.payload.msgType == MessageType.user) state.isLoading = true;
			else state.isLoading = false;
		},
		clearBotMsg: (state, msgId: PayloadAction<string>) => {
			state.messages = state.messages.filter(
				(msg) =>
					msg.msgType == MessageType.botDataCollection && msg.msgId != msgId.payload
			);
		},
	},
});

export const { resetEntireChat, addMsg, clearBotMsg } = chatState.actions;

export default chatState.reducer;
