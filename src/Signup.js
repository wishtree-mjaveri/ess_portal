import React, { useState } from "react";
import {useTranslation} from 'react-i18next'
import LanguageSelect from './LanguageSelect'
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
  const {t} =useTranslation()

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
          currentAddress:"31st, Manthan, Sharda Nagar, Rajapeth, Amravati, Maharashtra",
          permanentAddress:"31st, Manthan, Sharda Nagar, Rajapeth, Amravati, Maharashtra",
          phoneno:"7456774567"
        };
       localStorage.setItem('user',JSON.stringify(data))

        setEmail('')
        setPassword('')
        setUsername('')
        setConfirmPassword('')
        message.success('Account created.')
       props.history.push('/sign-in')
        console.log(data);
      }
     
    }
    
  };

  document.title="Signup"
  return (
    <div  >
      <div style={{textAlign:"right"}}>
    <LanguageSelect />
    </div>
    <div id="emp">
     
      <div id="div-image">
       <img id='image' src={logo}  />
      <img id="image" src={Image} />
      </div>
      <div id="responsive-div">
        <img id="responsive-logo"src={logo}/>
        <span>ESS Portal</span>
      </div>
      <div id="div-form">
      <Card id="form">
        <Form name="basic" layout="vertical">
          <FormItem
            rules={[
              { required: true, message: "Please insert your username!" },
            ]}
            label={t("username")}
            name="username"
          >
            <Input
              prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder={t("username")}
              value="username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </FormItem>
          <FormItem
            rules={[
              { required: true, message: "Please insert your E-mail!" },
              { type: "email", message: "Enter valid email" },
            ]}
            label={t("E-mail")}
            name="email"
          >
            <Input
              prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder={t("E-mail")}
              value="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </FormItem>
          <FormItem
            rules={[{ required: true, message: "Please insert your Password!" }]}
            label={t("Password")}
            name="password"
          >
            <Input
              prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder={t("Password")}
              value="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormItem>

          <FormItem
            rules={[
              { required: true, message: "Please insert your confirm Password!" },
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
            label={t("Confirm_Password")}
            name="confirm-password"
            dependencies={["password"]}
            hasFeedback
          >
            <Input
              prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder={t("Confirm_Password")}
              value="confirmpassword"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </FormItem>
          <FormItem className="gx-text-center">
            <Button type="primary" htmlType="submit" style={{background:"cadetblue",borderColor:"cadetblue"}} onClick={handleSignup}>
            {t("sign_up_now")}
            </Button>
          </FormItem>
        </Form>
        <h3>
          Or
          <div>
            <GoogleLogin history={props.history}/>
          </div>
        </h3>
        <h4>{t('Already_have_an_account_?')} <span><Link to={'/sign-in'} style={{color:"cadetblue"}}>{t("Signin")}</Link></span> </h4>
      </Card>
      </div>
    </div>
    </div>
  );
}

export default Signup;
