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
          <Route path="/caseaid" Component={Home} />
          <Route path="/caseaid/client" Component={Client} />
          <Route path="/caseaid/judge" Component={Judge} />
          <Route path="/caseaid/advocate" Component={Advocate} />

          </Routes> 
      </div>
    </Router>
    
    
  );
}

export default App;
