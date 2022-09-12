// import { customAlphabet, nanoid } from "nanoid";
import { useState } from "react";
import Alert from "../Alert/Alert";
import styles from "./MovieForm.module.css";
const { customAlphabet } = require("nanoid");
const nanoid = customAlphabet("0123456789", 9);

const MovieForm = (props) => {
	//Destructing props
	const { movies, setMovies } = props;
	// Deklarasi, Destructing, Intansi variabel state
	const [title, setTitle] = useState("");
	const [date, setDate] = useState("");
	const [image, setImage] = useState("");
	const [type, setType] = useState("");

	// Deklarasikan state conditonal event
	const [isTitleErr, setIsTitleErr] = useState(false);
	const [isDateErr, setIsDateErr] = useState(false);
	const [isImageErr, setIsImageErr] = useState(false);
	const [isTypeErr, setIsTypeErr] = useState(false);

	// Function handle Event
	const handleTitle = (e) => {
		setTitle(e.target.value);
	};

	const handleDate = (e) => {
		setDate(e.target.value);
	};

	const handleImage = (e) => {
		setImage(e.target.value);
	};

	const handleType = (e) => {
		setType(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();

		if (title === "") {
			setIsTitleErr(true);
			date === "" ? setIsDateErr(true) : setIsDateErr(false);
			image === "" ? setIsImageErr(true) : setIsImageErr(false);
			type === "" ? setIsTypeErr(true) : setIsTypeErr(false);
		} else if (date === "") {
			setIsDateErr(true);
			title === "" ? setIsTitleErr(true) : setIsTitleErr(false);
			image === "" ? setIsImageErr(true) : setIsImageErr(false);
			type === "" ? setIsTypeErr(true) : setIsTypeErr(false);
		} else if (image === "") {
			setIsImageErr(true);
			date === "" ? setIsDateErr(true) : setIsDateErr(false);
			title === "" ? setIsTitleErr(true) : setIsTitleErr(false);
			type === "" ? setIsTypeErr(true) : setIsTypeErr(false);
		} else if (type === "") {
			setIsTypeErr(true);
			date === "" ? setIsDateErr(true) : setIsDateErr(false);
			title === "" ? setIsTitleErr(true) : setIsTitleErr(false);
			image === "" ? setIsImageErr(true) : setIsImageErr(false);
		} else {
			setIsImageErr(false);
			setIsTitleErr(false);
			setIsDateErr(false);
			setIsTypeErr(false);

			const movie = {
				id: "tt" + nanoid(),
				title: title,
				year: date,
				type: type,
				poster: image,
			};
			setMovies([...movies, movie]);
		}
	};

	return (
		<div className={styles.container}>
			<div className={styles.movieform}>
				<div className={styles.movieform__left}>
					<img
						src="https://picsum.photos/600/400"
						alt=""
						className={styles.movieform__left__image}
					/>
				</div>
				<div className={styles.movieform__right}>
					<h2 className={styles.movieform__right__title}>Add Movie</h2>
					<form
						action=""
						className={styles.movieform__right__form}
						onSubmit={handleSubmit}
					>
						<div className={styles.movieforminput__container}>
							<label className={styles.movieforminput__label}>Title</label>
							<input
								type="text"
								className={styles.movieforminput__input}
								value={title}
								onChange={handleTitle}
							/>
							{/* 
							Jika title error maka tampilkan isTitleErr,
							Jika tidak error maka jangan tampilkan error,
							Apabila hanya ingin membuat 1 buah kondisi dapat menggunakan operator and
							*/}
							{isTitleErr && <Alert>*Title Wajib Diisi!</Alert>}
						</div>
						<div className={styles.movieforminput__container}>
							<label className={styles.movieforminput__label}>Tahun</label>
							<input
								type="tel"
								maxLength="4"
								className={styles.movieforminput__input}
								value={date}
								onChange={handleDate}
							/>
							{/* 
							Jika date error, maka tampilkan isDateErr,
							Jika date tidak error, maka jangan tampilkan error 
						*/}
							{isDateErr && <Alert>*Tahun Wajib Diisi!</Alert>}
						</div>
						<div className={styles.movieforminput__container}>
							<label className={styles.movieforminput__label}>
								Link Gambar
							</label>
							<input
								type="link"
								className={styles.movieforminput__input}
								value={image}
								onChange={handleImage}
							/>
							{/* 
							Jika image error, maka tampilkan isImageErr,
							Jika image tidak error, maka jangan tampilkan error 
						*/}
							{isImageErr && <Alert>*Link Gambar Wajib Diisi!</Alert>}
						</div>
						<div className={styles.movieforminput__container}>
							<label className={styles.movieforminput__label}>Pilih Tipe</label>
							<select
								value={type}
								onChange={handleType}
								className={styles.movieforminput__input}
							>
								<option disabled value="">
									Pilih Tipe :
								</option>
								<option value="Horor">Horor</option>
								<option value="Trailer">Trailer</option>
								<option value="Comedy">Comedy</option>
							</select>
							{isTypeErr && <Alert>*Tipe Wajib Dipilih!</Alert>}
						</div>
						<button className={styles.movieform__btn} type="submit">
							Submit
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default MovieForm;
