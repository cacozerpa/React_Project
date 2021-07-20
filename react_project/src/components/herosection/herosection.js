import React from 'react';
import '../../App.css';
import { Button } from '../button/button';
import './herosection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <image src='../../../public/images/home.jpeg'/>
      <h1>DISTRIBUIDORA NEGRETE C.A</h1>
      <p>Maracaibo, Venezuela</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;