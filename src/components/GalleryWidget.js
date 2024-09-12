import React from 'react';
import './GalleryWidget.css';
import pic from "../images/pic.png";

const GalleryWidget = () => {
  return (
    <div className="gallery-widget">
      <div className="gallery-header">
        <button className='gallery'>
          <h3>Gallery</h3>
        </button>
        <button className="add-image-button">+ ADD IMAGE</button>
      </div>
      <div className="gallery-images">
        {/* Positioned arrows as circular buttons at the top right corner */}
        <div className="arrow-buttons">
          <button className="arrow-button left-arrow">{'<'}</button>
          <button className="arrow-button right-arrow">{'>'}</button>
        </div>
        <img src={pic} alt="Placeholder" />
        <img src={pic} alt="Placeholder" />
        <img src={pic} alt="Placeholder" />
      </div>
    </div>
  );
};

export default GalleryWidget;
