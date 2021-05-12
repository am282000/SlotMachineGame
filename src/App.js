import React from 'react';
import './App.css';
import SlotM from './SlotM';

 

function App() {
  return (
    <>
      <h1 className='heading_style'> 🎰 Welcome to <span style={{fontWeight:"bold"}}>SLOT MACHINE GAME</span> 🎰 </h1>
      <div>
        <SlotM x='😀' y='💌' z='🤡' /> <hr/>
        <SlotM x='😎' y='😎' z='😎' /> <hr/>
        <SlotM x='🐵' y='❤️' z='😂' /> <hr/>
        <SlotM x='😘' y='😘' z='😘' /> <hr/>
      </div> 
    </>   
  );
}

export default App;
