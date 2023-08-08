import React from 'react';
import styles from './DemoVideo.module.scss';
import classnames from 'classnames';

export type DemoVideoProps = {
	videoTitle?: string;
	videoDescription?: string;
	videoUrl: string;
	className?: string;
};

const DemoVideo = (demoVideoProps: DemoVideoProps) => {
	const {
		videoTitle = 'Video Demo',
		videoDescription = 'Creating a chatbot for Product Hunt by crawling the website and training the AI on its content. I can then embed the chatbot on the website!',
		videoUrl,
		className,
	} = demoVideoProps;

	const demoVideoClasses = classnames(styles.demoVideo, {
		[className ?? '']: className,
	});

	return (
		<div className={demoVideoClasses}>
			<h2>{videoTitle}</h2>
			<p>{videoDescription}</p>
			<video src={videoUrl} controls autoPlay loop muted>
				Your browser does not support the video tag.
			</video>
		</div>
	);
};

export default DemoVideo;
