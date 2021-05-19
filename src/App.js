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


function App() {
  return (
    <div className="App">
      <BrowserRouter>
   {/* <Signup /> */}
   
   {/* <Signin/> */}
   {/* <Leftmenu/> */}
   {/* <Logout /> */}
   {/* <EmployeeDIrectory /> */}
  
   <Switch>

<Route path={"/"} exact component={Signin} />
<Route path={"/sign-in"} exact component={Signin} />
<Route path={"/signup"} component={Signup}/>
<Route path={'/logout'} component={Logout} />
{/* <Route path={'/home'} component={Leftmenu}/> */}
<Route path={'/menu'} component={Leftmenu}/>

<Route component={PageNotFound}/>
{/* <Route path={'/home'} component={Home} />
<Route path={'/tasks'} component={Tasks} />
<Route path={'/employee-directories'} component={EmployeeDIrectory} /> */}
</Switch>
   
   </BrowserRouter>
    </div>
  );
}

export default App;
