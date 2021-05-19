import React from 'react'
import {Card} from 'antd'
import profile from './undraw_profile_pic_ic5t.svg'
function EmployeeDetails({email,id,name}) {
    return (
        <div className={'profile-card'} style={{background:'white'}}>
        
        <img src={profile} alt={"profile"} style={{width:'100%',  borderRadius:'5px 5px',  background: 'linear-gradient(to right, #ee5a6f, #f29263)'}} />
        {/* <br/> */}
        <h3>{name}</h3>
       
           
             
                <h3>Id : {id}</h3>
                {/* <h2>Employee Name:{name}</h2> */}
                <h3> Email : {email}</h3>
            </div>
      
    )
}

export default EmployeeDetails
 