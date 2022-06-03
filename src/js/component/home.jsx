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
