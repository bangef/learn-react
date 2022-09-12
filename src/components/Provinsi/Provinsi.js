import styles from "./Provinsi.module.css";

function Provinsi(props) {
	const { dataCovid } = props;
	let i = 0;
	let key = 0;
	return (
		<>
			<section className={styles.provinsi}>
				<div className={styles.provinsi__container}>
					<div className={styles.provinsi__title}>Provinsi</div>
					<div className={styles.provinsi__description}>
						Data Covid Berdasarkan Provinsi
					</div>
					<div className={styles.provinsi__wrapper__table}>
						<table className={styles.provinsi__table}>
							<thead>
								<tr>
									<th>No</th>
									<th>Provinsi</th>
									<th>Kasus</th>
									<th>Sembuh</th>
									<th>Dirawat</th>
									<th>Meninggal</th>
								</tr>
							</thead>
							<tbody>
								{dataCovid.provinces.map((e) => {
									return (
										<tr key={`row-${++key}`}>
											<td>{++i}</td>
											<td>{e.kota}</td>
											<td>{e.kasus}</td>
											<td>{e.sembuh}</td>
											<td>{e.dirawat}</td>
											<td>{e.meninggal}</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
				</div>
			</section>
		</>
	);
}

export default Provinsi;
