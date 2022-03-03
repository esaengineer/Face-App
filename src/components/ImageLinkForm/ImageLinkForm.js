import React from 'react';
import ReactDOM from 'react-dom';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => 
{
  return (
    <div>
    <p className="f3">
      {'This magic will happen here. It will detect face from your image. Give it a try.'}
    </p>

    <div className="center">

    <div className="pa4 br3 center shadow-5 form">
      <input className="f4 pa2 w-70 center" type="text" onChange={onInputChange} />
      <button className="w-30 grow f4 pv2 dib white light-red" 
      onClick={onButtonSubmit}>Detect</button>
    </div>
    </div>



    </div>
    );

}
export default ImageLinkForm;