import React from "react";
import "./style.css";

const Cube = () => {
  return (
    <div className='perspective'>
      <label className='tab' htmlFor='tab-one'>
        Tab 1
      </label>
      <label className='tab' htmlFor='tab-two'>
        Tab 2
      </label>
      <label className='tab' htmlFor='tab-three'>
        Tab 3
      </label>
      <input type='radio' name='tabs' id='tab-one' />
      <input type='radio' name='tabs' id='tab-two' />
      <input type='radio' name='tabs' id='tab-three' />
      <div className='cube'>
        <div className='tab-content'>
          <h1>Tab 1</h1>
          <p>THIS IS AWESOME</p>
        </div>
        <div className='tab-content'>
          <h1>Tab 2</h1>
          <p>THIS IS COOL</p>
        </div>
        <div className='tab-content'>
          <h1>Tab 3</h1>
          <p>THIS IS SWEET</p>
        </div>
      </div>
    </div>
  );
};

export default Cube;
