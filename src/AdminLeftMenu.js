import React from "react";
import { useTranslation } from "react-i18next";
import { Button, Layout, Menu, Tooltip } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UnorderedListOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Tasks from "./Tasks";
import EmployeeDIrectory from "./EmployeeDIrectory";
import DocumentUploads from "./DocumentUploads";
import Logout from "./Logout";
import logo from "./esslogo.png";
import { AiOutlineLogout } from "react-icons/ai";
import PageNotFound from "./PageNotFound";
import {
  faChartBar,
  faEdit,
  faFileUpload,
  faHome,
  faTasks,
  faUser,
  faUserAlt,
  faUserEdit,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EmployeeInfo from "./EmployeeInfo";
import EditEmployee from "./EditEmployee";
import EmployeeTable from "./EmployeeTable";
import Dashboard from "./Dashboard";
const { Header, Content, Footer, Sider } = Layout;
function AdminLeftMenu(props) {
  const { t } = useTranslation();

//   const user = localStorage.getItem("existusername");
//   if (user == null) {
//     // message.error('Please login')
//     props.history.push("/sign-in");
//   }
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
            {/* <Menu.SubMenu
            key="submenu1"
            icon={<FontAwesomeIcon icon={faUserAlt} style={{color:"black"}} />}
            title={"EMployee"}
            >
          
            <Menu.Item
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
                <Link to={"/menu/home"} style={{ color: "black" }}>
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
              {/* <Tooltip title={t("Tasks")}>
                <Link to={"/menu/tasks"} style={{ color: "black" }}>
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
                <Link to={"/menu/document-upload"} style={{ color: "black" }}>
                  {t("Upload_document")}
                </Link>
              </Tooltip>
            </Menu.Item> */} 
            {/* <Menu.Item
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
                  }}
                >
                  {t("People")}
                </Link>
              </Tooltip>
            </Menu.Item> */}
            <Menu.Item
              key="2"
              icon={
                <FontAwesomeIcon icon={faTasks} style={{ color: "black" }} />
              }
            >
              {/* <Menu.Item key="2" icon={<UnorderedListOutlined  style={{color:"black"}} />}> */}
              <Tooltip title={"Employees"}>
                <Link to={"/admin/menu/employees"} style={{ color: "black" }}>
                  Employees
                </Link>
              </Tooltip>
            </Menu.Item>
            <Menu.Item
              key="22"
              icon={
                <FontAwesomeIcon icon={faChartBar} style={{ color: "black" }} />
              }
            >
              {/* <Menu.Item key="2" icon={<UnorderedListOutlined  style={{color:"black"}} />}> */}
              <Tooltip title={"Dashboard"}>
                <Link to={"/admin/menu/dashboard"} style={{ color: "black" }}>
                 Dashboard
                </Link>
              </Tooltip>
            </Menu.Item>
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
                overflow:"hidden",
                textOverflow:"ellipsis",
                whiteSpace:"nowrap"
              }}
            >
              <h1 style={{ fontWeight: 500, color: "white", fontSize: "50px" ,  overflow:"hidden",
                textOverflow:"ellipsis",
                whiteSpace:"nowrap"}}>
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
            <Switch>
              {/* <Route path={"/menu/home"} component={Home} />
              <Route path={"/menu/tasks"} component={Tasks} />
              <Route path={"/menu/people"} component={EmployeeDIrectory} />
              <Route
                path={"/menu/document-upload"}
                component={DocumentUploads}
              />
              <Route path={"/menu/employee-info"} component={EmployeeInfo} />
              <Route path={'/menu/employee-edit'} component={EditEmployee}/> */}
              <Route path={"/admin/menu/employees"} component={EmployeeTable} />
              <Route path={"/admin/menu/dashboard"} component={Dashboard} />
              <Route component={PageNotFound} />
            </Switch>

            {/* </div> */}
          </Content>
          <Footer
            style={{
              textAlign: "right",
              background: "cadetblue",
              padding: "15px",
              color: "white",
              whiteSpace:"nowrap",
              overflow:"hidden",
              textOverflow:"ellipsis"

            }}
          >
            {" "}
            <img src={logo} style={{ height: "20px", width: "20px" }} />{" "}
            {t("footer")}
          </Footer>
        </Layout>
      </Layout>
    </>
  );
}

export default AdminLeftMenu;
