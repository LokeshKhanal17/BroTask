
const DisplayTask = ({
    task,
    setTask,
    taskList,
    setTasksList}) => {

    const tasks = [
        ...taskList //spread operator
    ]
    //delete all tasks
    const deleteAll = ()=>{
        setTasksList([])
    }
    //delete a task
    const handleDelete = (id)=>{
        const newTaskList = tasks.filter((task)=>task.id !== Number(id))
        setTasksList(newTaskList)
    }
    //Edit a task
    //give one small pop up window to edit the task with task title and task description
    const handleEdit = (id)=>{
        const selectedTask = tasks.find((task)=>task.id === Number(id))
        setTask(selectedTask)

    }

  return (
   <>
   <section className="flex-col shadow-lg flex-wrap bg-slate-300 rounded-lg mx-2">
   <div className=" p-3 my-4  mx-4 flex flex-wrap justify-between items-center ">
        <div className="flex justify-between items-center gap-4">
        <span className="text-2xl font-extralight">Bro Task List</span>
        <span className="text-xl p-2 rounded-full bg-slate-100 font-extralight">{tasks.length}</span>
        </div>
        <button
        onClick={deleteAll}
        className="ml-2 p-2  rounded-lg bg-red-400 border-2 cursor-pointer"
        >Clear All</button>
    </div>
    <ul className="mx-4 flex flex-wrap justify-start items-center">
        {
            tasks.map((task)=>(
                <li key={task.id} className=" w-1/4 p-2 flex justify-between bg-orange-200 m-3 rounded-lg">
            <div className="flex flex-col">
            <span className="justify-center bg-blue-200 rounded-lg text-center text-2xl">{task.title}</span>
            <span className="text-l font-extralight mt-4 ml-4">{task.task_description}</span>
            <span className="text-l font-extralight mt-4 ml-4">
                {
                    //current time and date 
                    Date().toLocaleString().slice(0,21)
                }
            </span>
            </div>
            <div className="flex flex-col">
            <button 
            onClick={()=>handleDelete(task.id)}
            className="ml-2 p-2   rounded-lg bg-red-500 cursor-pointer span-style">
                x
            </button>
            <button 
            onClick={()=>{handleEdit(task.id)}}
            className="m-2 p-2 rounded-lg bg-green-500 cursor-pointer span-style">
                    -
            </button>
            </div>
            </li>
            ))
        }
    

        </ul>

    </section>
    
   </>
  )
}

export default DisplayTask