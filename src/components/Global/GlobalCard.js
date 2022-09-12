import styles from "./GlobalCard.module.css";

function GlobalCard(props) {
	const { number, title, colorHex } = props;
	return (
		<>
			<div className={styles.card}>
				<h2 className={styles.card__title}>{title}</h2>
				<span className={styles.card__number} style={{ color: colorHex }}>
					{number}
				</span>
			</div>
		</>
	);
}
export default GlobalCard;
