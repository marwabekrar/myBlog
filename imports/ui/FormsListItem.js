import {Meteor} from 'meteor/meteor';
import React from 'react';
import PropTypes from 'prop-types'
//import Clipboard from 'clipboard';
import Modal from 'react-modal';
import moment from 'moment';

export default class FormsListItem extends React.Component{
constructor(props){
    super (props);
    this.state = {
      isOpen:false
    };
  };
  
  HandleModalClose(){
    this.setState({
      isOpen: false
    });
  }
  
  
  
  render (){    
  return  (<div key ={this.props._id} className='item'> 
           <div className='item__info'>
           <h2>  {this.props.firstname} {this.props.lastname} </h2>
           <p className='item__status-message'>{ moment(this.props.createdAt).fromNow() } </p>
           </div>
           <p className='item__message'>  {this.props.comment} </p>
           
           {Roles.userIsInRole( Meteor.userId(), 'admin' ) ? 
              <button className="button button--pill" onClick={()=>{this.setState({isOpen: true})}}> View User Details</button>
              : undefined
           }
            <Modal 
                      isOpen={this.state.isOpen} 
                      contentLabel='View details'
                      ariaHideApp={false}
                      onRequestClose={this.HandleModalClose.bind(this)}
                      className='boxed-view__box'
                      overlayClassName='boxed-view boxed-view--Modal'>

                  
                  <h1> User details</h1>
                  <form  className='boxed-view__form'>
                  <p align="left">First Name : {this.props.firstname}</p>
                  <p align="left">Last Name : {this.props.lastname}</p>
                  <p align="left">Email: {this.props.email}</p>
                  <p align="left">Address: {this.props.address}</p>
                  <p align="left">City: {this.props.city}</p>
                  <p align="left">Provice: {this.props.province}</p>
                  <p align="left">Postal Code: {this.props.postalCode}</p>
                  <p align="left">Country : {this.props.country}</p>
                <button type ='button'className='button' onClick={this.HandleModalClose.bind(this)}>Close</button>
                </form>
          
            </Modal>
           </div>
          );
  }

}

FormsListItem.propTypes ={
  _id: PropTypes.string.isRequired,
  firstname : PropTypes.string.isRequired,
  lastname : PropTypes.string.isRequired,
  email:PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  city:PropTypes.string.isRequired,
  province:PropTypes.string.isRequired,
  postalCode:PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  createdAt: PropTypes.number.isRequired
};