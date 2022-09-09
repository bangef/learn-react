import data from "../../utils/constant/data";
import { useState } from "react";
import Hero from "../Hero/Hero";
import MovieForm from "../MovieForm/MovieForm";
import Movies from "../Movies/Movies";

const Main = () => {
	// Deklarasi dan inisiasi state
	const [movies, setMovies] = useState(data);
	return (
		<main>
			<Hero />
			<Movies movies={movies} setMovies={setMovies} />
			<MovieForm movies={movies} setMovies={setMovies} />
		</main>
	);
};

export default Main;
