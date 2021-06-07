import React from 'react'
import Card  from 'antd/es/card/index'
import image from './employeeThumbnail.png'
function EmployeeInfo() {
    let employeeinfo = localStorage.getItem('user')
    let employee = JSON.parse(employeeinfo)
    console.log(employee)
    return (
        <div>
            <Card  >
                <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gridTemplateRows:"repeat(3,1fr)",gridGap:"20px",textAlign:"left"}} >
                <div style={{gridColumn:"1 / span 1",gridRow:"1 /span 2"}}>
                    <img src={employee.image==""?image:employee.image} alt={"Employee image"} style={{height:"180px",width:"auto"}} />
                </div>
                <div style={{gridColumn:"2 /span 2",gridRow:"1 /span 1"}} >
                <h3>
                        Name
                    </h3> 
                    <hr/>
                    Madhav
                </div>
                <div>
                <h3>Location</h3>
                <hr/>
                Pune
                </div>
                <div>
                    <h3>
                        Employeeid
                    </h3>
                    <hr/>
                    #ESS1019
                </div>
                <div>
                    <h3>
                        Primary Contact No
                    </h3>
                    <hr/>
                   {employee.phoneno}
                </div>
                <div>
                    <h3>Company mail id</h3>
                    <hr/>
                    madhav@essportal.com
                </div>
                <div>
                    <h3>Extension</h3>
                    <hr/>
                    --------------
                </div>
                <div style={{gridColumn:"1 /span 3"}} >
                    <h3>Current Address</h3>
                    <hr/>
                   {employee.currentAddress}
                </div>
                <div style={{gridColumn:"1 /span 3"}}>
                    <h3>Permanent Address</h3>
                    <hr/>
                  {employee.permanentAddress}

                </div>
                </div>
            </Card>
        </div>
    )
}

export default EmployeeInfo
