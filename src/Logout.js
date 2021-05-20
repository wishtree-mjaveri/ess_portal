import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";
import image from "./undraw_Login_re_4vu2 (1).svg";
import { useTranslation } from "react-i18next";
// import { Footer } from 'antd/lib/layout/layout'
import { Layout } from "antd";
import logo from "./esslogo.png";
const { Footer } = Layout;
function Logout(props) {
  const { t } = useTranslation();

  return (
    <div id="logout-div">
      <div id="logout-child-div">
        <img
          src={image}
          style={{ height: "auto", width: "400px", margin: "20px" }}
        />
      </div>
      <div>
        <Card id="logout-child-div" style={{display:"grid",justifyContent:"center"}}>
          {t("Logout_Successful")}
          <br />
          {t("Go_back_to_Signin")}
          <Link to={"/sign-in"} style={{ color: "cadetblue" }}>
             {t("Signin")}{" "}
          </Link>
          <img src={logo} style={{padding:'8px',marginLeft:'30px',width:"60%"}} />
        </Card>
      </div>

     <Footer><img src={logo} style={{height:'auto',width:"33px"}} /> {t("footer")}</Footer>
    </div>
  );
}

export default Logout;
