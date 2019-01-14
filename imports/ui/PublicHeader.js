import React from 'react';
import {Tracker} from 'meteor/tracker';
import {Accounts} from 'meteor/accounts-base';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'


export default class PublicHeader extends React.Component{
  
   constructor(props){
    super(props);
    this.state={
      isAuthenticated : false
    }  
  }
  
  componentDidMount(){
       
   this.AuthTracker = Tracker.autorun(()=>{
      
      const isAuthenticated =  !! Meteor.userId() ;
      this.setState({isAuthenticated});
      
        
    });
  }
  
  componentWillUnmount(){
    
    this.AuthTracker.stop();
  }
  
  
  
  onAuthChange(isAuthenticated) {
   
      if (isAuthenticated){
        return (
           <div className= 'header__link-container'>
           <Link to="/" className='link'> Who am I ? </Link> 
            <Link to="/dashboard" className='link'>Dashboard </Link> 
           <Link to="/contact-us" className='link'> Contact-us </Link> 
           <button  className='button button--link-text' onClick= { () => Accounts.logout((err)=>{'logout', err})}> Logout</button> 
           </div>
          )
    
         } else {
             return (
               <div className= 'header__link-container'>
                    <Link to="/" className='link'> Who am I ? </Link> 
                    <Link to="/" className='link'> Courses </Link>
                    <Link to="/contact-us" className='link'> Contact-me </Link> 
                    <Link to="/login" className='link'> Login </Link> 
                    <Link to="/signup" className='link'> Signup </Link> 
               </div>
             );
             }
        }
  
  
  render(){
            return (
              <div className='header'>
              <div className='header__content'>
              <h1 className='header__title'> Marwa Bekrar </h1>
              {this.onAuthChange(this.state.isAuthenticated)}

              </div>      
              </div>

            );
          }
  
}



