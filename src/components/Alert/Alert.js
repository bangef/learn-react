function Alert(props) {
	return (
		<>
			<span style={{ color: "red", fontSize: ".8rem", display: "block" }}>
				{props.children}
			</span>
		</>
	);
}

export default Alert;
