// import { useState } from "react";

// import SearchTask from "./SearchTask"
// import TaskActions from "./TaskActions"
// import TaskList from "./TaskList"
// import AddTaskModal from "./AddTaskModal";


// const TaskBoard = () => {
//   const defaultTask = {
//     id : crypto.randomUUID(),
//     title : "Learn React",
//     description : " I want to learn react",
//     tags : ["web", "react", "js"],
//     priority : "High",
//     isFavourite : true,
//   };
//     const [tasks, setTasks] = useState([defaultTask]);
//     const [showAddModal, setShowAddModal] =useState(false);
//     const [taskToUpdate, setTaskToUpdate] = useState(null);

//     function handleAddTask(newTask, isAdd){
//       // console.log('task adding', newTask);
//       if(isAdd){
//         setTasks([...tasks, newTask]);
//       }
//       else{
//         setTasks(
//           tasks.map((task)=>{
//             if(task.id === newTask.id){
//               return newTask;
//             }
//             return task;
//           })
//         );
//       }
//       setShowAddModal(false);
//     }

//     function handleEditTask(task){
//       setTaskToUpdate(task);
//       setShowAddModal(true);
//     }

//   return (
//     <>
//     <section className="mb-20" id="tasks">
//       {showAddModal &&
//          <AddTaskModal onSave={handleAddTask}
//                       taskToUpdate={taskToUpdate}>
//          </AddTaskModal>
//       }

// 		<div className="container">
//       {/* search start */}
// 		<div className="p-2 flex justify-end">
// 			<SearchTask></SearchTask>
// 		</div>
//     {/* search box ends */}
// 			<div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
// 				<TaskActions handleAddTask={()=> setShowAddModal(true)}></TaskActions>
// 				<TaskList tasks={tasks} onEdit={handleEditTask} key={tasks.id} ></TaskList>
// 			</div>
// 		</div>
// 	</section>
//     </>
//   )
// }

// export default TaskBoard


import { useState } from "react";

import SearchTask from "./SearchTask";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";
import AddTaskModal from "./AddTaskModal";

const TaskBoard = () => {
  // Default task data
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Learn React",
    description: "I want to learn React",
    tags: ["web", "react", "js"],
    priority: "High",
    isFavourite: true,
  };

  // State for tasks, modal visibility, and task to update
  const [tasks, setTasks] = useState([defaultTask]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  // Handle adding or updating a task
  function handleAddTask(newTask, isAdd) {
    if (isAdd) {
      setTasks([...tasks, { ...newTask, id: crypto.randomUUID() }]);
    } else {
      setTasks(
        tasks.map((task) => (task.id === newTask.id ? newTask : task))
      );
    }
    setShowAddModal(false); // Close modal after saving
  }

  // Handle task edit
  function handleEditTask(task) {
    setTaskToUpdate(task);
    setShowAddModal(true); // Corrected to setShowAddModal
  }

  return (
    <>
      <section className="mb-20" id="tasks">
        {/* Add task modal */}
        {showAddModal && (
          <AddTaskModal
            onSave={handleAddTask}
            taskToUpdate={taskToUpdate}
          />
        )}

        <div className="container">
          {/* Search box */}
          <div className="p-2 flex justify-end">
            <SearchTask />
          </div>

          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            {/* Task actions */}
            <TaskActions handleAddTask={() => setShowAddModal(true)} />

            {/* Task list */}
            <TaskList
              tasks={tasks}
              onEdit={handleEditTask}
              key={tasks.map((task) => task.id).join("-")} // Ensure unique key based on task IDs
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default TaskBoard;
