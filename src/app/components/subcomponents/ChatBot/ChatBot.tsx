'use client';

import Image from 'next/image';
import classnames from 'classnames';
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import 'material-icons/iconfont/round.css';

import { addMsg, resetEntireChat } from '@/redux/slice/ChatMessagesSlice';

import MessageType from '@/enums/MessageType';
import ChatMessage from '@/models/ChatMessageModel';
import ChatBotMessage from '../ChatBotMessage/ChatBotMessage';

import styles from './ChatBot.module.scss';

export type ChatBotProps = {
	botName: string;
	iconUrl: string;
	isDemo?: boolean;
	onClickClose?: () => void;
	className?: string;
};

async function sendResponse(msg: ChatMessage) {
	setTimeout(() => {}, 5000);

	return {
		...msg,
		msgType: MessageType.botResponse,
	};
}

const ChatBot = (chatBotProps: ChatBotProps) => {
	const { botName, iconUrl, isDemo = false, onClickClose, className } = chatBotProps;

	const dispatch = useAppDispatch();
	const chat = useAppSelector((state) => state.chat);

	const [newMessage, setNewMessage] = useState('');

	const chatBotClasses = classnames(styles.chatBot, {
		[className ?? '']: className,
	});

	const sendMessage = async () => {
		if (newMessage.trim() == '' || chat.isLoading) return;

		const newMsg = {
			msgId: '2',
			msgContent: newMessage,
			msgType: MessageType.user,
		};

		dispatch(addMsg(newMsg));
		setNewMessage('');

		const responseMsg = await sendResponse(newMsg);

		dispatch(addMsg(responseMsg));
	};

	const resetChat = () => {
		dispatch(resetEntireChat());
	};

	const sendQuickMsg = async (quickMsg: ChatMessage) => {
		dispatch(addMsg(quickMsg));

		const responseMsg = await sendResponse(quickMsg);

		dispatch(addMsg(responseMsg));
	};

	return (
		<div className={chatBotClasses}>
			<div className={styles.botHeader}>
				<div className={styles.botTitle}>
					<Image src={iconUrl} height={30} width={30} alt="Chatbase logo" />
					<h3>{botName}</h3>
				</div>
				<div className={styles.botButtons}>
					<button className={styles.buttonStyle} onClick={resetChat}>
						<span className="material-icons-round">refresh</span>
					</button>
					{!isDemo && (
						<button className={styles.buttonStyle} onClick={onClickClose}>
							<span className="material-icons-round">close</span>
						</button>
					)}
				</div>
			</div>
			<hr />
			<div className={styles.botContent}>
				<div className={styles.botMessageArea}>
					{chat.messages.map((message: ChatMessage, index: number) => (
						<ChatBotMessage key={index} message={message} />
					))}
				</div>
				<div className={styles.botPrompt}>
					<div className={styles.botQuickMsgs}>
						{chat.quickMessages?.map((message: ChatMessage, index: number) => (
							<button key={index} onClick={() => sendQuickMsg(message)}>
								{message.msgContent}
							</button>
						))}
					</div>
					<div className={styles.botMessage}>
						<input
							placeholder="Ask a question..."
							type="text"
							value={newMessage}
							onChange={(e) => setNewMessage(e.target.value)}
							className={styles.botMessagePrompt}
						/>
						<button onClick={sendMessage} className={styles.botMessageButton}>
							<span className="material-icons-round">send</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChatBot;
