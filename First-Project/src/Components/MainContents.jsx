import React from "react";

export default function MainContent() {
  return (
    <div className='MainContents'>
      <div className='content-text'>
        <h1>
          Bike <br /> Is An Art
        </h1>
        <p className='sub-text'>
          Ride Along With Nature, Feel The Nature In Motion.
        </p>
      </div>
      <div className='image'>
        <img src='./src/assets/bike.webp' width={600} alt='' />
        <h1 className='image-number'>03</h1>
      </div>
      <div className='right-side'></div>
    </div>
  );
}
