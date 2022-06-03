import React, { useState } from "react";

const ImputTask = (props) => {
	const [Task, setTask] = useState("");
	const [validation, setValidation] = useState(true);

	const imputText = (event) => {
		setTask(event.target.value);
		console.log(Task);
	};

	const submit = (event) => {
		event.preventDefault();
		if (Task.trim() !== "") {
			props.newTask(Task);
			setTask("");
			setValidation(true);
		} else {
			setValidation(false);
		}
	};

	return (
		<div>
			<form className="form" onSubmit={submit}>
				<span>Add Task you LAZY</span>
				<input value={Task} onChange={imputText} />
				<button>ADD</button>
			</form>
			{!validation && (
				<div className="validation">DO SOMETHING OMG YOU LAZY :D</div>
			)}
		</div>
	);
};

export default ImputTask;
