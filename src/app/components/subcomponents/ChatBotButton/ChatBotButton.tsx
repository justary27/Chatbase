'use client';

import Image from 'next/image';
import classnames from 'classnames';
import React, { useState } from 'react';
import 'material-icons/iconfont/round.css';

import ChatBot, { ChatBotProps } from '../ChatBot/ChatBot';

import styles from './ChatBotButton.module.scss';

export type ChatBotButtonProps = {
	chatBotProps: ChatBotProps;
	className?: string;
};

const ChatBotButton = (chatBotButtonProps: ChatBotButtonProps) => {
	const { chatBotProps, className } = chatBotButtonProps;

	const [isActive, setIsActive] = useState(true);

	const newChatBotClasses = classnames(chatBotProps.className ?? '', styles.bot, {
		[`${styles.isNotActive}`]: isActive,
	});

	const chatBotButtonClasses = classnames(styles.chatBotButton, {
		[className ?? '']: className,
	});

	return (
		<div className={chatBotButtonClasses}>
			<ChatBot
				{...chatBotProps}
				onClickClose={() => {
					setIsActive(!isActive);
				}}
				className={newChatBotClasses}
			/>
			<button onClick={() => setIsActive(!isActive)} className={styles.botButton}>
				{isActive ? (
					<Image src={chatBotProps.iconUrl} alt="Chatbase logo" layout="fill" />
				) : (
					<span className="material-icons-round">arrow_downward</span>
				)}
			</button>
		</div>
	);
};

export default ChatBotButton;
