import styles from "./Footer.module.css";

function Footer() {
	return (
		<>
			<footer>
				<div className={styles.footer__container}>
					<div className={styles.footer__left}>
						<h2 className={styles.footer__left__title}>Covid ID</h2>
						<span className={styles.footer__left__author}>
							Develop by bangef
						</span>
					</div>
					<div className={styles.footer__right}>
						<ul className={styles.footer__right__list}>
							<li className={styles.footer__right__items}>Global</li>
							<li className={styles.footer__right__items}>Indonesia</li>
							<li className={styles.footer__right__items}>Provinsi</li>
							<li className={styles.footer__right__items}>About</li>
						</ul>
					</div>
				</div>
			</footer>
		</>
	);
}

export default Footer;
