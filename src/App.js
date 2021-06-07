
import './App.css';
import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Signup from './Signup';
import Signin from './Signin';
import Leftmenu from './Leftmenu';

import Logout from './Logout';
import PageNotFound from './PageNotFound';
import AdminLeftMenu from './AdminLeftMenu';

// const LazySignUp =React.lazy(()=>import('./Signup'))
// const LazySignin =React.lazy(()=>import('./Signin'))
// const LazyLeftmenu =React.lazy(()=>import('./Leftmenu'))
// const LazyLogout =React.lazy(()=>import('./Logout'))
// const LazyPageNotFound =React.lazy(()=>import('./PageNotFound'))
// const LazyAdminLeftMenu =React.lazy(()=>import('./AdminLeftMenu'))




function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
   {/* <Signup /> */}
   
   {/* <Signin/> */}
   {/* <Leftmenu/> */}
   {/* <Logout /> */}
   {/* <EmployeeDIrectory /> */}
   {/* <React.Suspense fallback={'loading...'} > */}
  
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
{/* </React.Suspense> */}
 
   
  
   </BrowserRouter>
    </div>
  );
}

export default App;
