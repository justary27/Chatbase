import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import classnames from 'classnames';
import 'material-icons/iconfont/round.css';

import styles from './NavBar.module.scss';

export type NavBarProps = {
	className?: string;
};

const NavBar = ({ className }: NavBarProps) => {
	const navBarClasses = (navStyle: string) =>
		classnames(navStyle, {
			[className ?? '']: className,
		});

	return (
		<>
			<nav className={navBarClasses(`${styles.largeNavBar}`)}>
				<Link href={'/'} className={styles.logoButton}>
					<Image src={'/chatbase.svg'} height={35} width={35} alt="Chatbase logo" />
					Chatbase
				</Link>
				<div>
					<Link href={'/#demo'}>Demo</Link>
					<Link href={'/'}>Affiliate</Link>
					<Link href={'/pricing'}>Pricing</Link>
					<Link href={'/docs'}>API</Link>
					<Link href={'/guide'}>Guide</Link>
					<Link href={'/my-chatbots'}>My Chatbots</Link>
				</div>
				<Link href={'/login'}>Log in</Link>
			</nav>
			<nav className={navBarClasses(`${styles.smallNavBar}`)}>
				<Link href={'/'} className={styles.logoButton}>
					<Image src={'/chatbase.svg'} height={35} width={35} alt="Chatbase logo" />
					Chatbase
				</Link>
				<button>
					<span className="material-icons-round">menu</span>
				</button>
			</nav>
		</>
	);
};

export default NavBar;
