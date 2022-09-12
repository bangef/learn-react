import styles from "./Hero.module.css";

function Hero() {
	return (
		<>
			<section className={styles.hero}>
				<div className={styles.hero__container}>
					<div className={styles.hero__left}>
						<h2 className={styles.hero__title}>Covid ID</h2>
						<span className={styles.hero__sub__title}>
							Monitoring Perkembangan Covid
						</span>

						<p className={styles.hero__description}>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
							similique doloribus libero dolorum tempore architecto! Aperiam
							provident laborum ipsam perspiciatis excepturi labore a!
						</p>
						<button className={styles.hero__button}>Vaccine</button>
					</div>
					<div className={styles.hero__right}>
						<img
							src={require("../../utils/img/img_hero_1.png")}
							alt="hero"
							className={styles.hero__image}
						/>
					</div>
				</div>
			</section>
		</>
	);
}

export default Hero;
