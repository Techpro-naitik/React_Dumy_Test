import React from 'react';
import { BrowserRouter as Browser, Route, Switch, Redirect } from 'react-router-dom';
import ReactRegister from './ReactRegister';
import ReactLogin from './ReactLogin';
import DashBoard from './DashBoard';

 const RouterActivity=(props)=>{
    console.log(props)
    return(
    <div>
        <Browser>
        <div>
        <Switch>
                    <Route path='/Register' exact component={ReactRegister}/>
                    <Route path='/Login' exact component={ReactLogin} />
                    <Route path='/Dashboard' exact component={DashBoard} />
                    <Route path="*" E component={ReactLogin} />
        </Switch >
        </div>
        </Browser>
   </div> 
   )


 }
 export default RouterActivity;