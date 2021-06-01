import logo from './logo.svg';
import './App.css';
import Signup from './Signup';
import Signin from './Signin';
import Leftmenu from './Leftmenu';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './Home';
import Tasks from './Tasks';
import EmployeeDIrectory from './EmployeeDIrectory';
import Logout from './Logout';
import PageNotFound from './PageNotFound';
import AdminLeftMenu from './AdminLeftMenu';
import {useMediaQuery} from 'react-responsive'


function App() {
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null
  }
  const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
    return isTablet ? children : null
  }
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
  }
  const Default = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 768 })
    return isNotMobile ? children : null
  }
  return (
    <div className="App">
      <BrowserRouter>
   {/* <Signup /> */}
   
   {/* <Signin/> */}
   {/* <Leftmenu/> */}
   {/* <Logout /> */}
   {/* <EmployeeDIrectory /> */}
  
    <Switch>
    {/*  */}
  
  <Route path={"/"} exact component={Signin} />
<Route path={"/sign-in"} exact component={Signin} />
<Route path={"/signup"} component={Signup}/>
<Route path={'/logout'} component={Logout} />
{/* <Route path={'/home'} component={Leftmenu}/> */}
<Route path={'/menu'} component={Leftmenu}/>
<Route path={'/admin/menu'} component={AdminLeftMenu}/>

<Route component={PageNotFound}/>

</Switch>
   
   
  
   </BrowserRouter>
    </div>
  );
}

export default App;
