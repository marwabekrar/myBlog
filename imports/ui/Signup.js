import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Link } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';
import PublicHeader from './PublicHeader';

export default class SignUp extends React.Component{
  constructor (props){
    super(props);
    this.state ={
      error: ''
    };
    
  }
  
  onSubmit(e){
    e.preventDefault();
    
    let email= this.refs.email.value.trim();
    let password = this.refs.password.value.trim();
    if (password.length < 9){
      return this.setState({
        error : 'Password must be more than 8 characters long'
      })
    }
    
    Accounts.createUser({email, password}, (err)=>{
      if(err) {
        this.setState({
          error: err.reason
        });
      }else{
        this.setState({
          error: ''
        })
      }
    
    });
    
    
  }
  
  render (){
    return (
      <div>
      <PublicHeader title ="Join Us"/>
      <div className='boxed-view'>
      <div className='boxed-view__box'>
      <h1> SignUp  </h1>

      {this.state.error ? <p> {this.state.error}</p> : undefined}
      <form onSubmit={this.onSubmit.bind(this)} noValidate className='boxed-view__form'>
      <input type="email" ref = "email" name="email" placeholder="Enter your email" />
      <input type="password" ref ="password" name="password" placeholder="Enter your password" />
      <button className='button'> Create Account </button>
      </form>
      
      <Link to="/login"> Already have an account? </Link>
      </div> 
      </div>
      </div>
           );
  }
  
}

