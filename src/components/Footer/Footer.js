import styles from "./Footer.module.css";

const Footer = () => {
	return (
		<div className={styles.container}>
			<footer className={styles.footer}>
				<h1 className={styles.footer__title}>Movie App</h1>
				<p className={styles.footer__author}>Created by Bangef</p>
			</footer>
		</div>
	);
};

export default Footer;
