import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Redirect} from 'react-router-dom';
//import createHistory from 'history/createBrowserHistory';
import moment from 'moment';
import { Forms } from "../api/forms";
import PublicHeader from './PublicHeader';
import ThankYou from './thankYou';


export default class AddForm extends Component {
  
  constructor(props){
    super(props);
    this.state={
      error:'',
      submitted: false
    }
  }
  


handleSubmit(event) {
    event.preventDefault();    
    const firstname = ReactDOM.findDOMNode(this.refs.prenom).value.trim();
    const lastname = ReactDOM.findDOMNode(this.refs.nom).value.trim();
    const email = ReactDOM.findDOMNode(this.refs.courriel).value.trim();
    const phone = ReactDOM.findDOMNode(this.refs.telephone).value.trim();
    const address = ReactDOM.findDOMNode(this.refs.adresse).value.trim();
    const city = ReactDOM.findDOMNode(this.refs.ville).value.trim();
    const province = ReactDOM.findDOMNode(this.refs.province).value.trim();
    const postalCode = ReactDOM.findDOMNode(this.refs.codePostale).value.trim();
    const country = ReactDOM.findDOMNode(this.refs.pays).value.trim();
    const comment = ReactDOM.findDOMNode(this.refs.commentaire).value.trim();
   
 
    
  
    
    Meteor.call('forms.insert', firstname,lastname,email,phone,address,city,province,postalCode,country,comment ,  (err, res) =>{
        if (err){
            this.setState({error: err.reason})
        }else{
              //const history = createHistory();

           
           // Clear form
            ReactDOM.findDOMNode(this.refs.nom).value = '';
            ReactDOM.findDOMNode(this.refs.prenom).value = '';
            ReactDOM.findDOMNode(this.refs.courriel).value = '';
            ReactDOM.findDOMNode(this.refs.telephone).value = '';
            ReactDOM.findDOMNode(this.refs.adresse).value = '';
            ReactDOM.findDOMNode(this.refs.ville).value = '';
            ReactDOM.findDOMNode(this.refs.province).value = '';
            ReactDOM.findDOMNode(this.refs.codePostale).value = '';
            ReactDOM.findDOMNode(this.refs.pays).value = '';
            ReactDOM.findDOMNode(this.refs.commentaire).value = '';


            this.setState({submitted: true });
            
            
            
            //history.push('/login');
            

        }
    });
    
 
   
  }


  
  render() {
    let redirect = null

    if (this.state.submitted){
      redirect = <Redirect to="/thanks" />
    }
    return (
      <div >
       {redirect}
        <PublicHeader title ="Contact-us"/>
        <div className='boxed-view'>
          <div className='boxed-view__form-contactus'>
              {this.state.error ? <p> {this.state.error}</p>: undefined}
              <form onSubmit={this.handleSubmit.bind(this)} className='boxed-view__form'>
                  
                  <input
                      type="text"
                      ref="prenom"
                      placeholder="First name"
                      name="prenom" />
                   <input
                      type="text"
                      ref="nom"
                      placeholder="Last Name"
                      name="nom" />
                  <input
                      type="text"
                      className="form-control"
                      ref="courriel"
                      placeholder="Email"
                      name="courriel" />
                  <input
                      type="text"
                      ref="telephone"
                      placeholder="Phone Number"
                      name="telephone"/>
                  <input
                      type="text"
                      ref="adresse"
                      placeholder="Address"
                      name="adresse"/>
                  <input 
                      type="text" 
                      ref="ville"
                      placeholder="City" 
                      name="ville"/>
                  <input 
                      type="text" 
                      ref="province"
                      placeholder="Province" 
                      name="province"/>
                  <input 
                      type="text" 
                      ref="codePostale"
                      placeholder="Postal code" 
                      name="codePostale"/>
                  <input 
                      type="text" 
                      className="form-control"
                      ref="pays"
                      placeholder="Country" 
                      name="pays"/>
                  <textarea 
                      type="text" 
                      ref="commentaire"
                      placeholder="Comment or question" 
                      name="commentaire"/>
                  <button type="submit"  className='button' onSubmit={this.handleSubmit.bind(this)}>Send</button>

           
          </form>
        </div>
        </div>
      </div>
    );
  }
}

