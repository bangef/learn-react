function Alert(props) {
	return (
		<>
			<p style={{ color: "red", fontSize: "0.8rem" }}>{props.children}</p>
		</>
	);
}

export default Alert;
