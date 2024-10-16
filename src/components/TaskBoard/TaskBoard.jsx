import SearchTask from "./SearchTask"
import TaskActions from "./TaskActions"
import TaskList from "./TaskList"

const TaskBoard = () => {
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
				<TaskList></TaskList>
			</div>
		</div>
	</section>
    </>
  )
}

export default TaskBoard