import React, { useState } from "react";
import ImputTask from "./Imput.jsx";
import Task from "./taskdelete.jsx";

//create your first component
const Home = () => {
	const [taskList, setTaskList] = useState([]);

	const newTask = (task) => {
		setTaskList([task, ...taskList]);
	};

	const toDelete = (id) => {
		const filterList = taskList.filter((e, index) => index !== id);
		setTaskList(filterList);
	};

	useEffect(() => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/iNelan", {
			method: "POST", // or 'PUT'
			body: JSON.stringify([]), // data can be string or {object}!
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => res.json())
			.catch((error) => console.error("Error:", error))
			.then((response) => console.log("Success:", response));
	}, []);

	return (
		<div>
			<ImputTask newTask={newTask} />

			<div className="list">
				{taskList.map((e, index) => (
					<Task task={e} toDelete={toDelete} id={index} />
				))}
			</div>
		</div>
	);
};

export default Home;
