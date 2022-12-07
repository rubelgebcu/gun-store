import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import AllGun from './components/AllGun/AllGun';
import { useState } from 'react';

function App() {
  const [count, setCount] =useState(0);
  const countIncrease=()=>{
    setCount(count+1)

  }
  return (
    <div className="App">
      
      <Navbar count={count}></Navbar>
      <AllGun countIncrease={countIncrease}></AllGun>
    </div>
  );
}

export default App;
