import React from 'react'
import{Card} from 'antd'
import {Link} from 'react-router-dom'
import image from './undraw_Login_re_4vu2 (1).svg'
function Logout(props) {
   
 
    return (
        <div id="logout-div">
            <div id="logout-child-div">
                <img src={image} style={{height:"auto",width:"400px",margin:"20px"}}/>
            </div>
            <div>
            <Card id="logout-child-div">
                Logout Successful
                <br/>
                Go back to<Link to={'/sign-in'} style={{color:"cadetblue"}}> Signin</Link>
            </Card>
            </div>
        </div>
    )
}

export default Logout
