import { useState } from 'react';
import Header from './Components/Header/Header';
import TypingCanvas from './Components/TypingCanvas/TypingCanvas';
import './App.css'

const App = () => {
  return (
    <div className="App h-screen">
      <Header />
      <TypingCanvas />
    </div>
  )
}

export default App
