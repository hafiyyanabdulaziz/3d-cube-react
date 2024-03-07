import React from "react";
import "./style.css";

const Cube = () => {
  const onClick = () => {
    console.log("onclick");
    document.getElementById("putar").style.transform = `rotateX(-90deg)`;
  };
  return (
    <div className='perspective'>
      <div id='putar' className='cube'>
        <div className='tab-content'>
          <h1>Tab 1</h1>
        </div>
        <div className='tab-content'>
          <h1>Tab 2</h1>
        </div>
        <div className='tab-content'>
          <h1>Tab 3</h1>
        </div>
        <div className='tab-content'>
          <h1>Tab 4</h1>
        </div>
      </div>
      <button onClick={onClick} style={{ marginTop: 20 }}>
        click
      </button>
    </div>
  );
};

export default Cube;
