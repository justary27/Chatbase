import React from 'react';
import classnames from 'classnames';

import ChatBot, {
	ChatBotProps,
} from '@/app/components/subcomponents/ChatBot/ChatBot';

import styles from './LiveDemo.module.scss';

export type LiveDemoProps = {
	demoTitle?: string;
	demoDescription?: string;
	className?: string;
};

const LiveDemo = (liveDemoProps: LiveDemoProps) => {
	const {
		demoTitle = 'Live Demo',
		demoDescription = 'This chatbot was trained on a document explaining Chatbase',
		className,
	} = liveDemoProps;

	const liveDemoClasses = classnames(styles.liveDemo, {
		[className ?? '']: className,
	});

	const chatBotProps: ChatBotProps = {
		botName: 'Chatbase',
		iconUrl: '/chatbase.svg',
		isDemo: true,
		className: `${styles.chatBotDemo}`,
	};

	return (
		<div className={liveDemoClasses}>
			<h2>{demoTitle}</h2>
			<p>{demoDescription}</p>
			<ChatBot {...chatBotProps} />
		</div>
	);
};

export default LiveDemo;
