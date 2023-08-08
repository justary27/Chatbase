import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import classnames from 'classnames';

import styles from './Footer.module.scss';

export type FooterProps = {
	className?: string;
};

const Footer = ({ className }: FooterProps) => {
	const footerClasses = classnames(styles.footer, { [className ?? '']: className });

	return (
		<footer className={footerClasses}>
			<div className={styles.privacyTerms}>
				<div className={styles.logoSocials}>
					<Link href={'/'} className={styles.logo}>
						<Image
							src={'/chatbase.svg'}
							height={35}
							width={35}
							alt="Chatbase logo"
						/>
						Chatbase
					</Link>
					<div>
						<Link href={'https://twitter.com/yasser_elsaid_'}>
							<Image src={'/next.svg'} alt="xc" width={40} height={40} />
						</Link>
						<Link href={'https://www.linkedin.com/in/yasserelsaid/'}>
							<Image src={'/vercel.svg'} alt="xc" width={40} height={40} />
						</Link>
					</div>
				</div>
				<Link href={'/privacy'}>Privacy Policy</Link>
				<Link href={'/terms'}>Terms of Service</Link>
			</div>
			<hr />
			<Link className={styles.contact} href={'mailto:support@chatbase.co'}>
				Contact: support@chatbase.co
			</Link>
		</footer>
	);
};

export default Footer;
