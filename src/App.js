import React from 'react';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import './App.scss';

// Components
import Header from './Components/Header/Index';
import Footer from './Components/Footer/Index';

// Pages
import HomePage from './Pages/Home/Index';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
