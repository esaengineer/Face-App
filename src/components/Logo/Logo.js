import React from 'react';
import ReactDOM from 'react-dom';
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import brain from './brain.png';

const Logo = () => 
{
  return (
    <div className="ma2 mte">



  <Tilt options={{ max : 65 }} style={{ height: '150px',width:'150px'}}>
      <div>
        <div className="Tilt-inner br2 shadow-2 pa3">
        <img src={brain} alt='brain' style={{paddingTop:'5px'}} />
        </div>
      </div>
    </Tilt>

    </div>
    );

}
export default Logo;