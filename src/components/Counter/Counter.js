import { useState } from "react";

function Counter() {
	// Membuat variabel state
	// mengembalikan 2 data :
	// nilai saat ini : 0
	// fungsi untuk mengubah state
	// karna mengembalikan array maka dapat di destructing
	const [hasil, setHasil] = useState(0);

	const tambah = () => {
		// Jalankan fungsi setHasil
		// Untuk mengubah state
		setHasil(hasil + 1);
	};
	return (
		<div>
			<p>Hasil : {hasil}</p>
			<label
				style={{
					fontSize: ".5rem",
					color: "red",
					display: "block",
				}}
			>
				*Klik untuk menambahkan satu nilai hasil
			</label>
			<button onClick={tambah}>Klik</button>
		</div>
	);
}

export default Counter;
