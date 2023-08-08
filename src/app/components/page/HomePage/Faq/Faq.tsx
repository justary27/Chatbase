import Link from 'next/link';
import styles from './Faq.module.scss';

const Faq = () => {
	return (
		<div className={styles.faq}>
			<h2>Frequently Asked Questions</h2>
			<p>
				If you can&apos;t find your question, email
				<Link className={styles.contact} href={'mailto:support@chatbase.co'}>
					support@chatbase.co
				</Link>
			</p>
			<div></div>
		</div>
	);
};

export default Faq;
