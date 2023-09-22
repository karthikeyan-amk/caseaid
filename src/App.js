import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Header.js'
import Home from './Home';
import Client from './Components/Client/Home'
import Judge from './Components/Judge/Home'
import Advocate from './Components/Advocate/Home'

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/client" Component={Client} />
          <Route path="/judge" Component={Judge} />
          <Route path="/advocate" Component={Advocate} />

          </Routes> 
      </div>
    </Router>
    
    
  );
}

export default App;
