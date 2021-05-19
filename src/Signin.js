import React, { useState } from "react";
import { Form, Button, Input, Card, message } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import GoogleLogin from "./GoogleLogin";
import image from "./undraw_Team_page_re_cffb (1).svg";
import logo from './esslogo.png'
function Signin(props) {
  const FormItem = Form.Item;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let existuser = localStorage.getItem('existusername')
  // let existuserObj = JSON.parse(existuser)
  if (existuser!=null) {
    if (existuser.length>0) {
      props.history.push('/menu/home')
    console.log('user exist',existuser)
      
    } else{
      console.log('no user present')
    }
  } else{
    console.log('no user present')
  }
 
  const handleSignup = () => {
    if (email.length==0||password.length==0) {
      return null
    } else {
      let user=localStorage.getItem('user')
      
      let userObj=JSON.parse(user)
      // if (userObj==null) {
      //   message.error('No user exist with this email.Please create account.')
      // }
      if (userObj) {
      console.log(userObj.username)
props.history.push('/menu/home',{username:userObj.username})
        // props.history.push('/menu',{username:userObj.username})
      } else {
        message.error('No user exist with this email.Please create account.')
      }
      console.log(email);
      
    }


  };

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  document.title="Signin"
  return (
    <div id="emp">
      <div id={"div-image"}>
        <img id="image" style={{marginBottom:"20px"}} src={logo}  />
      <img id="image" src={image} />
      </div>
      <div id={"div-form"}>
      <Card id="form">
        <Form layout="vertical" style={{padding:'10px'}} name="basic">
          <FormItem
            rules={[
              { required: true, message: "Please input your E-mail!" },
              { type: "email", message: "Enter valid email" },
            ]}
            label={"Email"}
            name="email"
          >
            <Input
              prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Email"
              width="20px"
              value="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </FormItem>
          <FormItem
            rules={[{ required: true, message: "Please input your Password!" }]}
            label={"Password"}
            name="password"
          >
            <Input
              prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              width="20px"
              placeholder="Password"
              value="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormItem>
          <Button type="primary" htmlType="submit" style={{background:"cadetblue",borderColor:"cadetblue"}} onClick={handleSignup}>
            Sign In
          </Button>
        </Form>
        <h3>
          Or Signin with
          <span>
            <GoogleLogin history={props.history}/>
          </span>
        </h3>
        <h4>
        Don't have a ESSPortal account? <Link to={"/signup"} style={{color:"cadetblue"}} >Sign Up Now</Link>
      </h4>
      </Card>
     
      </div>
    </div>
  );
}

export default Signin;
