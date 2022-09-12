import styles from "./Navbar.module.css";

const Navbar = () => {
	return (
		<>
			<nav>
				<div className={styles.container}>
					<div className={styles.nav__left}>
						<h2 className={styles.nav__left__logo}>Covid ID</h2>
					</div>
					<div className={styles.nav__right}>
						<ul className={styles.nav__right__list}>
							<li className={styles.nav__right__items}>Global</li>
							<li className={styles.nav__right__items}>Indonesia</li>
							<li className={styles.nav__right__items}>Provinsi</li>
							<li className={styles.nav__right__items}>About</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
