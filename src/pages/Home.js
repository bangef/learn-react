import { useState } from "react";
import Footer from "../components/Footer/Footer";
import FormCovid from "../components/FormCovid/FormCovid";
import Global from "../components/Global/Global";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Provinsi from "../components/Provinsi/Provinsi";
import data from "../utils/constants/provinces";

function Main() {
	const [dataCovid, setDataCovid] = useState(data);

	return (
		<main>
			<Hero />
			<Global />
			<Provinsi dataCovid={dataCovid} setDataCovid={setDataCovid} />
			<FormCovid dataCovid={dataCovid} setDataCovid={setDataCovid} />
		</main>
	);
}

function Home() {
	return (
		<>
			<Navbar />
			<Main />
			<Footer />
		</>
	);
}

export default Home;
