import styles from "./Hero.module.css";

const Hero = () => {
	return (
		<div className={styles.container}>
			<section className={styles.hero}>
				<div className={styles.hero__left}>
					<h1 className={styles.hero__title}>Spiderman</h1>
					<h3 className={styles.hero__genre}>
						Genre: Thriller, Drama, Romance
					</h3>
					<p className={styles.hero__description}>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime aut
						incidunt iste. Fugiat reprehenderit atque voluptate hic consequatur.
						Cumque, praesentium?
					</p>
					<button className={styles.hero__button}>Watch</button>
				</div>
				<div className={styles.hero__right}>
					<img
						className={styles.hero__image}
						alt=""
						src="https://picsum.photos/600/400.webp"
					/>
				</div>
			</section>
		</div>
	);
};

export default Hero;
