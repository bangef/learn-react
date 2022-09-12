import { nanoid } from "nanoid";
import data from "../../utils/constants/indonesia";
import arrColorHex from "../../utils/constants/color-hex";
import formatter from "../../utils/constants/helpers";
import styles from "./Global.module.css";
import GlobalCard from "./GlobalCard";
// import GlobalCard from "./GlobalCard";

function Global() {
	arrColorHex.forEach((e, i) => {
		data.indonesia[i].key = nanoid();
		data.indonesia[i].colorHex = e;
	});
	data.indonesia.forEach((e) => {
		e.frmtTotal = formatter.format(e.total);
	});
	return (
		<>
			<section className={styles.global}>
				<div className={styles.global__container}>
					<h2 className={styles.global__title}>Global</h2>
					<span className={styles.global__description}>
						Data Covid Berdasarkan Global
					</span>
					<div className={styles.global__wrapper__cards}>
						{data.indonesia.map((e) => (
							<GlobalCard
								title={e.status}
								number={e.frmtTotal}
								colorHex={e.colorHex}
								key={e.key}
							/>
						))}
					</div>
				</div>
			</section>
		</>
	);
}

export default Global;
