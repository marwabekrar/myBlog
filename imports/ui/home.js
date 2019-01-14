import React from 'react';
import PublicHeader from './PublicHeader';
import MylifeSoFar from './myLifeSofar';
// Avec Stateless functions

export default () => { 
    return (
    <>
      <PublicHeader/>
      <header className="carousel">
        <div className="hero-text-box">
            <h1 className="title"> I am an Analyst-programmer, and I truely love my profession!</h1>
            <a className="btn btn-full js--scroll-to-plans" href="#">Know me better </a>
            <a className="btn btn-ghost js--scroll-to-start" href="#">Contact me </a>
        </div>
      </header>
      <MylifeSoFar />
   </>
   );
  
  
}