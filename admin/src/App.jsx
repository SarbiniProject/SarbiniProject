import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Admin from './adminpages/loging'
import Regions from './adminpages/Dashboard';
import Sidebar from './adminpages/Sidebar';
import Profile from './adminpages/Profile';
import { AuthProvider } from './adminpages/AuthContext';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
   <Routes>
     <Route path='/' element={<Admin/>}></Route>
     <Route path='/Dashboard' element={<Sidebar/>}></Route>
     <Route path='/Profile' element={<Profile/>}></Route>
    
    </Routes>
    </Router></AuthProvider>

    </div>
  );
}

export default App;
