import React, { useState } from "react";

const ImputTask = () => {
	const [Task, setTask] = useState("");

	return (
		<div>
			<div className="input-group mb-3">
				<input
					type="text"
					className="form-control"
					placeholder="What needs to be done?"
					aria-label="Recipient's username"
					aria-describedby="button-addon2"
					onChange={(e) => {
						setTask(e.target.value);
						console.log(Task);
					}}
				/>
			</div>
		</div>
	);
};

export default ImputTask;
