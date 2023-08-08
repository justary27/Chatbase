import React from 'react';
import classnames from 'classnames';

import styles from './ChatBotMessage.module.scss';
import ChatMessage from '@/models/ChatMessageModel';
import MessageType from '@/enums/MessageType';

export type ChatBotMessageProps = {
	message: ChatMessage;
	className?: string;
};

const ChatBotMessage = (chatBotMessageProps: ChatBotMessageProps) => {
	const { message, className } = chatBotMessageProps;

	const chatMessageClassMapper = (msgType: MessageType) => {
		switch (msgType) {
			case MessageType.botResponse:
				return styles.fromBot;
			case MessageType.botDataCollection:
				return styles.fromBot;
			default:
				return styles.fromUser;
		}
	};

	const chatBotMessageClasses = classnames(
		styles.chatBotMessage,
		chatMessageClassMapper(message.msgType),
		{
			[className ?? '']: className,
		}
	);

	return <div className={chatBotMessageClasses}>{message.msgContent}</div>;
};

export default ChatBotMessage;
