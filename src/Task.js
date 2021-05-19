import React,{useState} from 'react'
import {IoIosCheckmarkCircleOutline} from 'react-icons/io'
import {ImCancelCircle} from 'react-icons/im'
import{DeleteOutlined,CheckCircleOutlined} from '@ant-design/icons'
import{Tooltip} from 'antd'
function Task({task,completeTask,index,removeTask}) {
    return (
        <div
        className="task"
        style={{ textDecoration: task.completed ? "line-through" : "" }}
    >
        <p>
            <Tooltip title={task.title}>
        {task.title}
        </Tooltip>
        </p>
        {/* <button style={{ background: "red" }} onClick={() => removeTask(index)}>x</button> */}
     
        {/* <button onClick={}>Complete</button> */}
      
        <span> <CheckCircleOutlined style={{float:'right',color:'green',height:'auto',width:'20px'}} onClick={() => completeTask(index)}/></span>
        <span><DeleteOutlined  style={{float:'right',color:"red",height:'auto',width:'18px'}}onClick={()=> removeTask(index)}/> </span>
       
    </div>
    )
}

export default Task
