import { useState } from "react";
import Alert from "../Alert/Alert";
import styles from "./FormCovid.module.css";

function FormCovid(props) {
	const { dataCovid, setDataCovid } = props;
	const [provinsi, setProv] = useState("");
	const [status, setStatus] = useState("");
	const [jumlah, setJumlah] = useState("");
	const [isProvinsi, setIsProvinsi] = useState(false);
	const [isStatus, setIsStatus] = useState(false);
	const [isJumlah, setIsJumlah] = useState(false);

	const handleProvinsi = (e) => {
		setProv(e.target.value);
	};

	const handleStatus = (e) => {
		setStatus(e.target.value);
	};

	const handleJumlah = (e) => {
		setJumlah(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (provinsi === "") {
			setIsProvinsi(true);
		} else if (status === "") {
			setIsStatus(true);
			provinsi !== "" && setIsProvinsi(false);
		} else if (jumlah === "") {
			setIsJumlah(true);
			provinsi !== "" && setIsProvinsi(false);
			status !== "" && setIsStatus(false);
		} else {
			setIsProvinsi(false);
			setIsStatus(false);
			setIsJumlah(false);
			setProv("");
			setStatus("");
			setJumlah("");
			const findByKota = dataCovid.provinces.find((e) => e.kota === provinsi);
			switch (status) {
				case "sembuh":
					findByKota.sembuh += parseInt(jumlah);
					break;
				case "dirawat":
					findByKota.dirawat += parseInt(jumlah);
					break;
				case "meninggal":
					findByKota.meninggal += parseInt(jumlah);
					break;
				default:
					break;
			}

			findByKota.kasus =
				findByKota.sembuh + findByKota.dirawat + findByKota.meninggal;
			setDataCovid({
				provinces: dataCovid.provinces.map((e) => {
					if (e.kota === findByKota.kota) {
						return (e = findByKota);
					}
					return e;
				}),
			});
		}
	};

	return (
		<>
			<section className={styles.formcovid}>
				<div className={styles.formcovid__container}>
					<div className={styles.formcovid__left}>
						<img
							src={require("../../utils/img/img_formcovid_1.png")}
							alt=""
							className={styles.formcovid__image}
						/>
					</div>
					<div className={styles.formcovid__right}>
						<form
							action=""
							method="GET"
							className={styles.formcovid__form}
							onSubmit={handleSubmit}
						>
							<h2 className={styles.formcovid__title}>Form Covid</h2>
							<div className={styles.formcovid__group}>
								<label className={styles.formcovid__label}>Provinsi</label>
								<input
									className={styles.formcovid__input}
									type="text"
									value={provinsi}
									onChange={handleProvinsi}
								/>
								{isProvinsi === true && (
									<Alert>*Provinsi tidak boleh kosong!</Alert>
								)}
							</div>
							<div className={styles.formcovid__group}>
								<label className={styles.formcovid__label}>Status</label>
								<input
									className={styles.formcovid__input}
									type="text"
									value={status}
									onChange={handleStatus}
								/>
								{isStatus === true && (
									<Alert>*Status tidak boleh kosong!</Alert>
								)}
							</div>
							<div className={styles.formcovid__group}>
								<label className={styles.formcovid__label}>Jumlah</label>
								<input
									className={styles.formcovid__input}
									type="number"
									value={jumlah}
									onChange={handleJumlah}
								/>
								{isJumlah === true && (
									<Alert>*Jumlah tidak boleh kosong!</Alert>
								)}
							</div>
							<button className={styles.formcovid__button} type="submit">
								Submit
							</button>
						</form>
					</div>
				</div>
			</section>
		</>
	);
}

export default FormCovid;
