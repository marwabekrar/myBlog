import React from 'react';
import PublicHeader from './PublicHeader';
import FormsList from './FormsList'

// Avec Stateless functions

export default () => { 
    return (
    <div>
    <PublicHeader title ="Dashboard"/>
      <div className='page-content'>
        <FormsList/>
      </div>
   </div>
   );
  
  
}

