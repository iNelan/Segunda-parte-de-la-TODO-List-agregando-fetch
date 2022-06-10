import React, { useState, useEffect } from "react";

//create your first component
const Home = () => {
	const [task, setTask] = useState({ label: null, done: false });
	const [taskList, setTaskList] = useState([]);

	// Usuario iNelan creado

	useEffect(() => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/iNelan", {
			method: "PUT",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(taskList),
		})
			.then((response) => response.json())
			.then((data) => console.log(data));
	}, [taskList]);

	// Informacion GET obtenida

	useEffect(() => {
		{
			fetch("https://assets.breatheco.de/apis/fake/todos/user/iNelan")
				.then((response) => response.json())
				.then((data) => setTaskList(data));
		}
	}, []);

	const deleteTask = (index) => {
		let filter = taskList.filter((value, i) => index !== i);
		setTaskList(filter);
	};

	return (
		<div className=" m-auto justify-content-center text-center body">
			<input
				onChange={(e) =>
					setTask({ label: e.target.value, done: false })
				}
				type="text"
			/>
			<button
				onClick={() => {
					setTaskList([...taskList, task]);
				}}>
				ADD
			</button>
			<ul className="d-block m-auto justify-content-center text-center list">
				{taskList.map((task, index) => {
					return (
						<li key={index}>
							{task.label}
							<span
								onClick={() => {
									deleteTask(index);
								}}>
								{" "}
								<button className="delete">Delete</button>
							</span>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Home;
