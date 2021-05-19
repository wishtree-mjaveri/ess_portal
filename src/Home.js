import React,{useState} from 'react'
import {Card,message} from 'antd'
import {UploadOutlined,TeamOutlined,BarsOutlined} from '@ant-design/icons'
import addFile from './addFiles.svg'
import people from './people.svg'
import task from './completedTask.svg'
import taskComplete from './undraw_completed_tasks_vs6q (1).svg'
import file from './undraw_Add_files_re_v09g (1).svg'
import People from './undraw_people_search_wctu (1).svg'
function Home(props) {
   
// let user=localStorage.getItem('existusername')
const user = localStorage.getItem('existusername')
if (user==null) {
    props.history.push('/sign-in')
  
} 
document.title="Home"

const [existuser, setuser] = useState('')
if (props.location.state) {
    const {username} =props.location.state;
    console.log(username)
    // setuseremail(email)
    localStorage.setItem('existusername',username)
} else {
   
}


    return (
       
        <div style={{display:'grid'}}>
        <div>
           <h2>Hello,{existuser.length!==0?existuser:localStorage.getItem('existusername')}</h2>
           <br/>
           <h3>Welcome to the Employee Self Service Portal</h3>
           <h3>Employee self-service (ESS) is technology that lets employees handle many human resources (HR), information technology (IT), and other administrative needs on their own. Often made available through a web portal or internal portal, ESS usually facilitates common tasks, including updating personal information, accessing employee handbooks, and logging vacation and personal days. Increasingly, employee self-service portals also allow individuals to manage their insurance plans and other benefits.</h3>
        </div>
        <div style={{display:"grid",alignContent:"stretch",gridTemplateColumns:"50% 50%"}}>
        <div><Card style={{gridColumn:1,}} >
            <BarsOutlined style={{color:"cadetblue"}} />
                <h3 style={{color:"cadetblue"}}>Tasks</h3>
                <br/>
                <h3>Employee can mark tasks as completed already assigned or  added by him/her and delete task as well.
                </h3>
             
          
            </Card></div>
            <div><img id={'callout-div-image'} src={taskComplete}/></div>
        <div><img id={'callout-div-image'} src={file}/></div>
        <div> <Card style={{gridColumn:2,}}>
            <UploadOutlined size={'10px'} style={{color:"cadetblue"}}/>
                <h3 style={{color:"cadetblue"}}>Upload Documents</h3>
                <br/>
                <h3>Employee can upload documents.</h3>
            </Card></div>
      
        <div> <Card style={{gridColumn:3,}} >
            <TeamOutlined style={{color:"cadetblue"}}/>
                <h3 style={{color:"cadetblue"}}>People</h3>
                <br/>
                <h3>Employee can find other employee details.</h3>
            </Card></div>
            <div> <img id={'callout-div-image'} src={People}/></div>
        <div></div>
            
            
           
           
           
        </div>
        </div>
    )
}

export default Home
