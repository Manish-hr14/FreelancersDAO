import React from 'react';
import GradientBackground from './Components/GradientBackground';
import Navbar from './Components/Navbar'
import ActivateWithActivator from './Components/Heading'
import './Components/App.css'
import Button from './Components/Button';

const App = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };
  return (
    <div className="relative w-full min-h-screen bg-zinc-900 text-white">
      <Navbar />
      <GradientBackground />
      <div className="absolute inset-0 flex justify-center items-center">
        <ActivateWithActivator />
      </div>
      <div  className="absolute inset-0 flex justify-center items-center">
      <Button onClick={handleClick}>Launch App</Button>
    </div>
    </div>
    
  );
};
export default App;




