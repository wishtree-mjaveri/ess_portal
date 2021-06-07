import React from "react";
import  {useTranslation}  from "react-i18next/dist/es/useTranslation";

import Layout from 'antd/es/layout/index'
import Menu from 'antd/es/menu/index'
import Tooltip from 'antd/es/tooltip/index'
import { Link, Route, Switch } from "react-router-dom";
import logo from "./esslogo.png";

import {
 
  faFileUpload,
  faHome,
  faTasks,
 
  faUserAlt,
  faUserEdit,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

import Home from "./Home";
import Tasks from "./Tasks";
import EmployeeDIrectory from "./EmployeeDIrectory";
import DocumentUploads from "./DocumentUploads";


import PageNotFound from "./PageNotFound";

import EmployeeInfo from "./EmployeeInfo";

import EditEmployee from "./EditEmployee";

import EmployeeTable from "./EmployeeTable";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  {AiOutlineLogout}  from "@react-icons/all-files/ai/AiOutlineLogout";

const LazyEmployeeTable = React.lazy(()=>import('./EmployeeTable'))
const LazyHome = React.lazy(()=>import('./Home'))
const LazyTasks = React.lazy(()=>import('./Tasks'))
const LazyEmployeeDirectory = React.lazy(()=>import('./EmployeeDIrectory'))
const LazyDocumentUploads = React.lazy(()=>import('./DocumentUploads'))
const LazyPageNotFound = React.lazy(()=>import('./PageNotFound'))
const LazyEmployeeInfo = React.lazy(()=>import('./EmployeeInfo'))
const LazyEditEmployee = React.lazy(()=>import('./EditEmployee'))


// import Logout from "./Logout";


const { Header, Content, Footer, Sider } = Layout;
function Leftmenu(props) {
  const { t } = useTranslation();

  const user = localStorage.getItem("existusername");
  if (user == null) {
    // message.error('Please login')
    props.history.push("/sign-in");
  }
  const handleLogOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("existusername");
    props.history.push("/logout");
  };
  return (
    <>
      <Layout className={"ant-layout-sider-children"}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo dashboard">
            <img
              src={logo}
              style={{ height: "64px", width: "70px", padding: "10px" }}
            />
            {/* <h2 style={{color:'white'}}>Dashboard</h2> */}
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.SubMenu
            key="submenu1"
            icon={<FontAwesomeIcon icon={faUserAlt} />}
            title={"    Employee"}
            style={{ color:"black", fontSize:"16px"}}
            >
         
            {/* <Menu.Item
              key="5"
              icon={
                <FontAwesomeIcon icon={faUser} style={{ color: "black" }} />
              }
            >
              <Tooltip title={t("Employee-info")}>
                <Link
                  to={"/menu/employee-info"}
                  style={{
                    color: "black",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  Employee-Info
                </Link>
              </Tooltip>
            </Menu.Item> */}
            <Menu.Item
              key="6"
              icon={
                <FontAwesomeIcon icon={faUserEdit} style={{ color: "black" }} />
              }
            >
              <Tooltip title={t("Employee-edit")}>
                <Link
                  to={"/menu/employee-edit"}
                  style={{
                    color: "black",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
               fontSize:"16px"
                  }}
                >
                  Employee-edit
                </Link>
              </Tooltip>
            </Menu.Item>
            </Menu.SubMenu>
            <Menu.Divider/>
            <Menu.Item
              key="1"
              icon={
                <FontAwesomeIcon icon={faHome} style={{ color: "black" }} />
              }
            >
              <Tooltip title={t("Home")}>
                <Link to={"/menu/home"} style={{ color: "black"   ,fontSize:"16px"}}>
                  {t("Home")}
                </Link>
              </Tooltip>
            </Menu.Item>
            <Menu.Item
              key="2"
              icon={
                <FontAwesomeIcon icon={faTasks} style={{ color: "black" }} />
              }
            >
              {/* <Menu.Item key="2" icon={<UnorderedListOutlined  style={{color:"black"}} />}> */}
              <Tooltip title={t("Tasks")}>
                <Link to={"/menu/tasks"} style={{ color: "black",  fontSize:"16px" }}>
                  {t("Tasks")}
                </Link>
              </Tooltip>
            </Menu.Item>
            <Menu.Item
              key="3"
              icon={
                <FontAwesomeIcon
                  icon={faFileUpload}
                  style={{ color: "black" }}
                />
              }
            >
              <Tooltip title={t("Upload_document")}>
                <Link to={"/menu/document-upload"} style={{ color: "black",  fontSize:"16px" }}>
                  {t("Upload_document")}
                </Link>
              </Tooltip>
            </Menu.Item>
            <Menu.Item
              key="4"
              icon={
                <FontAwesomeIcon icon={faUsers} style={{ color: "black" }} />
              }
            >
              <Tooltip title={t("People")}>
                <Link
                  to={"/menu/people"}
                  style={{
                    color: "black",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                   fontSize:"16px"
                  }}
                >
                  {t("People")}
                </Link>
              </Tooltip>
            </Menu.Item>
            {/* <Menu.Item
              key="2"
              icon={
                <FontAwesomeIcon icon={faTasks} style={{ color: "black" }} />
              }
            > */}
              {/* <Menu.Item key="2" icon={<UnorderedListOutlined  style={{color:"black"}} />}> */}
              {/* <Tooltip title={"Employees"}>
                <Link to={"/menu/employees"} style={{ color: "black" }}>
                  Employees
                </Link>
              </Tooltip>
            </Menu.Item> */}
            {/* <Menu.Item
              key="5"
              icon={
                <FontAwesomeIcon icon={faUser} style={{ color: "black" }} />
              }
            >
              <Tooltip title={t("People")}>
                <Link
                  to={"/menu/employee-info"}
                  style={{
                    color: "black",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  Employee-Info
                </Link>
              </Tooltip>
            </Menu.Item>
            <Menu.Item
              key="6"
              icon={
                <FontAwesomeIcon icon={faUserEdit} style={{ color: "black" }} />
              }
            >
              <Tooltip title={t("People")}>
                <Link
                  to={"/menu/employee-edit"}
                  style={{
                    color: "black",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  Employee-edit
                </Link>
              </Tooltip>
            </Menu.Item> */}
          </Menu>
          <div id="last-div"></div>
        </Sider>
        <Layout>
          <div>
            <Header
              className="site-layout-sub-header-background"
              style={{
                position: "relative",
                background: "cadetblue",
                color: "white",
              }}
            >
              <h1 style={{ color: "white", fontSize: "40px" ,overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}}>
                ESS Portal
              </h1>

              <Link
                onClick={handleLogOut}
                style={{
                  position: "absolute",
                  right: "32px",
                  top: "8px",
                  color: "white",
                }}
              >
                <Tooltip title={t("logout")}>
                  <AiOutlineLogout size={"40px"} style={{ padding: "8px" }} />
                </Tooltip>
              </Link>
            </Header>
          </div>
          <Content
            style={{ margin: "24px 16px 0", height: "100%", overflowY: "auto" }}
          >
            {/* <div className="site-layout-background" style={{ padding: 24 ,minHeight:"100%"}}> */}
            <React.Suspense fallback={"loading..."} >
            <Switch>
              <Route path={"/menu/home"} component={LazyHome} />
              <Route path={"/menu/tasks"} component={LazyTasks} />
              <Route path={"/menu/people"} component={LazyEmployeeDirectory} />
              <Route
                path={"/menu/document-upload"}
                component={LazyDocumentUploads}
              />
              <Route path={"/menu/employee-info"} component={LazyEmployeeInfo} />
              <Route path={'/menu/employee-edit'} component={LazyEditEmployee}/>
              <Route path={"/menu/employees"} component={LazyEmployeeTable} />
              <Route component={LazyPageNotFound} />
            </Switch>
            </React.Suspense>
            {/* </div> */}
          </Content>
          <Footer
            style={{
              textAlign: "right",
              background: "cadetblue",
              padding: "15px",
              color: "white",
              textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap" 
            }}
          >
            {" "}
            <img src={logo} style={{ height: "20px", width: "20px"}} />{" "}
            {t("footer")}
          </Footer>
        </Layout>
      </Layout>
    </>
  );
}

export default Leftmenu;
