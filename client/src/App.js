/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/


import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SignUp from './Pages/SignUp';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import './global.css'
import { auth } from './services/firebase';
import Home from './Pages/Home';
// courses section import
import TimeManagement from './components/TimeManagement';
import CommunicationSkills from './components/CommunicationSkills';
import EmotionalIntelligence from './components/EmotionalIntelligence';
import Leadership from './components/Leadership';
import Productivity from './components/Productivity';
import ConflictResolution from './components/ConflictResolution';
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Listen to authentication state changes
  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Login />} />
        <Route path="/time-management" element={<TimeManagement />} />
        <Route path="/communication-skills" element={<CommunicationSkills />} />
        <Route path="/emotional-intelligence" element={<EmotionalIntelligence />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/productivity" element={<Productivity />} />
        <Route path="/conflict-resolution" element={<ConflictResolution />} />
      </Routes>
    </Router>
  );
}

export default App;