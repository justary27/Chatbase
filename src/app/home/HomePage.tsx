import Faq from '@/app/components/page/HomePage/Faq/Faq';
import styles from './HomePage.module.scss';
import Opinion from '@/app/components/page/HomePage/Opinion/Opinion';
import DemoVideo from '../components/page/HomePage/DemoVideo/DemoVideo';
import LiveDemo from '../components/page/HomePage/LiveDemo/LiveDemo';
import Link from 'next/link';

const HomePage = () => {
	return (
		<div className={styles.homePage}>
			<div className={styles.homeTitle}>
				<h1>
					Custom ChatGPT for
					<span> your data</span>
				</h1>
				<p>
					Just connect your data sources and get a ChatGPT-like chatbot for your
					data. Then add it as a widget to your website or chat with it through the
					API.
				</p>
				<Link href={'/create-new-chatbot'}>
					<button>Build Your Chatbot</button>
				</Link>
			</div>
			<DemoVideo
				videoUrl="https://backend.chatbase.co/storage/v1/object/public/chatbase/producthunt-demo.mp4"
				className={styles.homeVideo}
			/>
			{/* <LiveDemo className={styles.homeDemo} /> */}
			<Faq />
			<Opinion />
		</div>
	);
};

export default HomePage;
