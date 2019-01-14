import {Meteor} from 'meteor/meteor';
import React from 'react';
import { Router, Route, Switch,Redirect } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import SignUp from '../ui/Signup';
import Dashboard from '../ui/Dashboard';
import NotFound from '../ui/NotFound';
import Login from '../ui/Login';
import Home from '../ui/home';
import AddForm from '../ui/AddForm';
import ThankYou from '../ui/thankYou';

const history = createHistory();
const unauthenticatedPages = ['/signup', '/login'];
const authenticatedPages = ['/dashboard'];
 
export const onAuthChange = (isAuthenticated)=>{
   const pathname = history.location.pathname;
  const isAuthenticatedPage = authenticatedPages.includes(pathname);
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
  if (isUnauthenticatedPage && isAuthenticated){
    history.replace('/dashboard');
  } else if (isAuthenticatedPage && !isAuthenticated){
    history.replace('/login');
  }
}
export const routes =(
<Router history={history}>
     <Switch>
         <Route path='/' exact={true} component={Home}/>
         <Route path='/login'   render={() => {return Meteor.userId() ? <Redirect to="/dashboard" /> : <Login />}} />
         <Route path='/signup'   render={() => {return Meteor.userId() ? <Redirect to="/dashboard" /> : <SignUp /> }}/>
         <Route path='/dashboard' render={() => {return Meteor.userId() ? <Dashboard/> : <Login /> }} />
         <Route path='/contact-us' exact={true} component={AddForm}/>
         <Route path='/thanks' exact={true} component={ThankYou}/>
         <Route path='*' component={NotFound}/>
         
     </Switch>
</Router>
);