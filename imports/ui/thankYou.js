import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
return(
  <div className='boxed-view'>
  <div className='boxed-view__box'>
      <h1>Thank you ! </h1>
      <p> We received your message. </p>
      <Link to="/" className='button button--link'> HEAD HOME</Link>
  </div>
  </div>
);
}