import React from 'react'
import Todo from './Todo'

function Tasks(props) {
    document.title="Tasks"
    const user = localStorage.getItem('existusername')
if (user==null) {
    props.history.push('/sign-in')
  
} 
    return (
        <div>
          
            <Todo />
        </div>
    )
}

export default Tasks
