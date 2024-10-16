import { useState } from "react";

import SearchTask from "./SearchTask"
import TaskActions from "./TaskActions"
import TaskList from "./TaskList"

const TaskBoard = () => {
  const defaultTask = {
    "id" : crypto.randomUUID(),
    'title' : "Learn React",
    "description" : " I want to learn react",
    "tags" : ["web", "react", "js"],
    "priority" : "High",
    "isFavourite" : false
  }
    const [tasks, setTasks] = useState([defaultTask]);

  return (
    <>
    <section className="mb-20" id="tasks">
		<div className="container">
      {/* search start */}
		<div className="p-2 flex justify-end">
			<SearchTask></SearchTask>
		</div>
    {/* search box ends */}
			<div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
				<TaskActions></TaskActions>
				<TaskList key={tasks.id} tasks={tasks}></TaskList>
			</div>
		</div>
	</section>
    </>
  )
}

export default TaskBoard