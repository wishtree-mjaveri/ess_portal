import React,{useState} from 'react'
import Task from './Task'
import CreateTask from './CreateTask'
import {useTranslation} from 'react-i18next/dist/es/useTranslation'
function Todo() {
    const [tasks, setTasks] = useState([
        {
            title: "Grab some Pizza",
            completed: true
        },
        {
            title: "Do your workout",
            completed: true
        },
        {
            title: "Hangout with friends",
            completed: false
        }
    ]);
    const addTask = title => {
        const newTasks = [...tasks, { title, completed: false }];
        setTasks(newTasks);
    };
    const completeTask = index => {
        const newTasks = [...tasks];
        newTasks[index].completed = !newTasks[index].completed;
        setTasks(newTasks);
    };
    const removeTask = index => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        // const arr=newTasks.filter(task=>{return task==tas?task:null})
        // console.log(arr)
        setTasks(newTasks);

    };
    const {t}=useTranslation()
    return (
        <div className="todo-container">
        <div className="header">{t("todo_tasks")} </div>
        <div className="tasks">
            {tasks.map((task, index) => (
                <Task
                    task={task}
                    index={index}
                    key={index}
                    completeTask={completeTask}
                    removeTask={removeTask}
                />
            ))}
        </div>
        <div className="create-task" >
                    <CreateTask addTask={addTask} />
                </div>
    </div>
    )
}

export default Todo
