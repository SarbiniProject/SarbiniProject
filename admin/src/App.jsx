import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Admin from './adminpages/loging'
import Dashboard from './adminpages/Dashboard'

function App() {
  return (
    <div className="App">
      <Router>
   <Routes>
     <Route path='/' element={<Admin/>}></Route>
     <Route path='/Dashboard' element={<Dashboard/>}></Route>
    </Routes>
    </Router>
    </div>
  );
}

export default App;
