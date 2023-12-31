
const AddTask = ({
  task,
  setTask,
  taskList,
   setTasksList}) => {

  const handelSubmit =(e)=>{
    e.preventDefault()
    //creATE Object and add it to the taskList
  
    //if task.id is present then edit the task
    if(task.id){
      const newTaskList = taskList.map((item)=>{
        if(item.id === task.id){
          return {
            id:item.id,
            title:e.target.taskTitle.value,
            task_description:e.target.taskDescription.value,
            completed:false}
        }
        return item
      }
      );
      setTasksList(newTaskList);
      setTask({})
    }

    //else add the new task
    else{
      const newTask = {
        id:Math.floor(Math.random()*10000)+1,
        title:e.target.taskTitle.value,
        task_description:e.target.taskDescription.value,
        completed:false
      }
      setTasksList([...taskList,newTask])
      setTask({})

    }

  }

  return (
    <>
        <section className="">
            <form 
            onSubmit={handelSubmit}
            className=" bg-slate-500 mx-4 shadow-xl rounded-lg border-red-200 flex justify-center items-center flex-col gap-2">
                <input 
                type="text" 
                name="taskTitle"
                value={task.title || ''}
                onChange={(e)=>setTask({...task,title:e.target.value})}
                placeholder="Task Title"
                className="p-2 mt-5 h-1/2 w-1/3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-green-400"/>
                <textarea 
                name="taskDescription"
                placeholder="Task Description"
                value={task.task_description || ''}
                onChange={(e)=>setTask({...task,task_description:e.target.value})}
                className="p-2 h-1/2 w-1/3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-green-400"></textarea>
                <button 
                type="submit" 
                className="w-1/6 mb-4 ml-2  p-2 rounded-lg bg-blue-400 border-2 cursor-pointer">
                    {
                        task.id ? 'Edit Task' : 'Add Task'
                    }
               </button>
            </form>
        </section>
    </>
  )
}

export default AddTask