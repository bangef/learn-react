import Movie from "../Movie/Movie";
import styles from "./Movies.module.css";
const { customAlphabet } = require("nanoid");
const nanoid = customAlphabet("0123456789", 9);

const Movies = (props) => {
	//Destructing props
	const { movies, setMovies } = props;
	// Membuat function handleClick
	// Untuk menambahkan data dengan me-setMovie dan bantuan push ke data movies
	const handleClick = () => {
		const newData = {
			id: "tt" + nanoid(),
			title: "Spider-Man 3",
			year: "2022",
			type: "Movie",
			poster: "https://picsum.photos/300/400",
		};
		// Menambahkan newData ke state movies
		// Spread operator: copy dan merge array
		setMovies([...movies, newData]);
	};
	return (
		<div className={styles.container}>
			<section className={styles.movies}>
				<h2 className={styles.movies__title}>Latest Movies</h2>
				<div className={styles.movie__container}>
					{movies.map((component) => (
						<Movie key={component.id} movie={component} />
					))}
				</div>
				<button onClick={handleClick}>Tambah Film</button>
			</section>
		</div>
	);
};

export default Movies;
