import React from 'react';
import './App.css';

import Routes from './routes/routes.js'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {
  return (
    <div>
      <Header></Header>
      <Routes className="main"></Routes>
      <Footer></Footer>    
    </div>
  );
}

export default App;
