import MessageType from '@/enums/MessageType';

type ChatMessage = {
	msgId: string;
	msgContent: string;
	msgType: MessageType;
};

export default ChatMessage;
