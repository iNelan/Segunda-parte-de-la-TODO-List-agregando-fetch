import React, { useState } from "react";

const Task = (props) => {
	const deleteTask = () => {
		props.toDelete(props.id);
	};

	return (
		<div>
			<div className="task">
				<span>{props.task}</span>
				<span onClick={deleteTask}>
					<button className="delete">DELETE</button>
				</span>
			</div>
		</div>
	);
};

export default Task;
