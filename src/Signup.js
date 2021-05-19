import React, { useState } from "react";
import { Button, Card, Checkbox, Form, Input, Modal, message } from "antd";
import {
  UserOutlined,
  LockOutlined,
  GoogleCircleFilled,
} from "@ant-design/icons";
import axios from "axios";
import { Link } from "react-router-dom";
import Signin from "./Signin";
import GoogleLogin from "./GoogleLogin";
import Image from "./undraw_Team_page_re_cffb (1).svg";
import logo from './esslogo.png'
function Signup(props) {
  const FormItem = Form.Item;

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

 
  const handleSignup = () => {
    if (username.length==0||email.length==0||password.length==0||confirmPassword.length==0) {
     return null
    } else {
      if (password!==confirmPassword) {
        return null
      } else {
        const data = {
          username: username,
          email: email,
        };
        setEmail('')
        setPassword('')
        setUsername('')
        setConfirmPassword('')
        localStorage.setItem('user',JSON.stringify(data))
        message.success('Account created.')
       props.history.push('/sign-in')
        console.log(data);
      }
     
    }
    
  };

  document.title="Signup"
  return (
    <div id="emp">
      <div id="div-image">
       <img id='image' src={logo}  />
      <img id="image" src={Image} />
      </div>
      <div id="div-form">
      <Card id="form">
        <Form name="basic" layout="vertical">
          <FormItem
            rules={[
              { required: true, message: "Please input your username!" },
            ]}
            label={"Username"}
            name="username"
          >
            <Input
              prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
              value="username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </FormItem>
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
              placeholder="Password"
              value="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormItem>

          <FormItem
            rules={[
              { required: true, message: "Please input your Password!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("confirm password dosen't match")
                  );
                },
              }),
            ]}
            label={"Confirm Password"}
            name="confirm-password"
            dependencies={["password"]}
            hasFeedback
          >
            <Input
              prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Confirm Password"
              value="confirmpassword"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </FormItem>
          <FormItem className="gx-text-center">
            <Button type="primary" htmlType="submit" style={{background:"cadetblue",borderColor:"cadetblue"}} onClick={handleSignup}>
              Sign Up Now
            </Button>
          </FormItem>
        </Form>
        <h3>
          Or
          <div>
            <GoogleLogin history={props.history}/>
          </div>
        </h3>
        <h4>Already have an account ?<span><Link to={'/sign-in'} style={{color:"cadetblue"}}>Sign in</Link></span> </h4>
      </Card>
      </div>
    </div>
  );
}

export default Signup;
