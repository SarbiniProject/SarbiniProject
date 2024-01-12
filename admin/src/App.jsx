import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Admin from './adminpages/loging'
import Dashboard from './adminpages/Dashboard'
import Sidebar from './adminpages/SideBar';

function App() {
  return (
    <div className="App">
      <Router>
   <Routes>
     <Route path='/' element={<Admin/>}></Route>
     <Route path='/Dashboard' element={<Sidebar/>}></Route>
    </Routes>
    </Router>

    </div>
  );
}

export default App;
