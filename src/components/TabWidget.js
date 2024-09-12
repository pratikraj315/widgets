import React, { useState } from 'react';
import './TabWidget.css';

const TabWidget = () => {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="tab-widget">
      <div className="tabs">
        <button 
          className={`tab-button ${activeTab === 'about' ? 'active' : ''}`} 
          onClick={() => setActiveTab('about')}
        >
          About Me
        </button>
        <button 
          className={`tab-button ${activeTab === 'experiences' ? 'active' : ''}`} 
          onClick={() => setActiveTab('experiences')}
        >
          Experiences
        </button>
        <button 
          className={`tab-button ${activeTab === 'recommended' ? 'active' : ''}`} 
          onClick={() => setActiveTab('recommended')}
        >
          Recommended
        </button>
      </div>
      <div className="content">
        {activeTab === 'about' && (
          <p>
            Hello! I’m Pratik Raj, a dedicated and passionate software engineer with a background in computer science. I graduated in July 2024 and have hands-on experience in front-end development using ReactJS, along with skills in Node.js, Express, and MongoDB for back-end solutions. 
            <br/><br/>
            I enjoy solving DSA problems and constantly improving my skills through courses and projects. My past internships have honed my ability to work with cross-functional teams and build responsive, user-friendly applications. Outside of tech, I’m an avid volleyball player and love reading books like Atomic Habits.
          </p>
        )}
        {activeTab === 'experiences' && <p>I’m Pratik Raj, a software engineer with a strong foundation in front-end development, particularly with ReactJS. I’ve completed internships at Vibencode Pvt Ltd and Nathcorp Pvt Ltd, where I developed web applications and collaborated closely with cross-functional teams. My experience spans designing responsive interfaces, integrating APIs, and maintaining code quality in fast-paced environments. I’ve also built personal projects like chat applications using the MERN stack, enhancing my skills in full-stack development. I thrive on tackling challenges and continuously expanding my technical expertise to deliver impactful solutions.</p>}
        {activeTab === 'recommended' && <p>With a strong focus on front-end development using ReactJS and full-stack projects with Node.js and MongoDB, I have consistently demonstrated the ability to build efficient and responsive applications. Colleagues and mentors appreciate my proactive approach, teamwork, and commitment to delivering high-quality work. I am known for my eagerness to learn, attention to detail, and problem-solving mindset, making me a valuable contributor to any team or project I undertake.</p>}
      </div>
    </div>
  );
};

export default TabWidget;
