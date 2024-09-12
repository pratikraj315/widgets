import React from 'react';
import TabWidget from './components/TabWidget';
import GalleryWidget from './components/GalleryWidget';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="content-wrapper">
        <TabWidget />
        <GalleryWidget />
      </div>
    </div>
  );
}

export default App;
