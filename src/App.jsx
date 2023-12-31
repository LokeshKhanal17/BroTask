import { useEffect, useState } from 'react'
import './App.css'
import { Header,DisplayTask,AddTask } from './components'

function App() {
  const [taskList, setTaskList] = useState(localStorage.getItem('taskList') ? JSON.parse(localStorage.getItem('taskList')) : [])
  const [task, setTask] = useState({})
  const [theme,setTheme] = useState(localStorage.getItem('theme') || 'bg-slate-300')
  
  //useEffect to store theme in local storage everytime theme changes
  useEffect(() => {
    localStorage.setItem('theme', theme)

  }
  ,[theme]);
  
  //useEffect to store data in local storage everytime taskList changes
  useEffect(() => {
    localStorage.setItem('taskList', JSON.stringify(taskList))
  }
  ,[taskList]);



  return (
    < div
    className={`min-h-screen ${theme}`}
    >
      <Header 
      setTheme={setTheme}
      theme={theme}
      />
      <AddTask 
      task={task}
      setTask={setTask}
      taskList={taskList} 
      setTasksList={setTaskList}/>
      <DisplayTask
       task={task}
       setTask={setTask}
       taskList={taskList} 
       setTasksList={setTaskList}/>
      
    </div>
  )
}

export default App
