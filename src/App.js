import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Profile from './components/Profile';
import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
  <div className='wrapper'> 
      <Header />
      <Nav />
      <Profile />

  </div>
  );
}




export default App;
