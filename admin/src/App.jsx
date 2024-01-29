import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Admin from './adminpages/loging'
import Regions from './adminpages/Dashboard';
import Sidebar from './adminpages/Sidebar';
import Profile from './adminpages/Profile';
import { AuthProvider } from './adminpages/AuthContext';
import MsgTest from './adminpages/msgText';
import TawkToChat from './adminpages/TawkToChat'
function App() {
  useEffect(() => {
    const s1 = document.createElement('script');
    s1.async = true;
    s1.src = 'https://embed.tawk.to/65b2f1490ff6374032c4ff89/1hl1ft2eb';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    document.body.appendChild(s1);

    return () => {
      // Cleanup the script when the component is unmounted
      document.body.removeChild(s1);
    };
  }, []);

  return (
    <div className="App">
      <AuthProvider>
      <Router>
   <Routes>
   
     {/* <Route path='/' element={<Admin/>}></Route> */}
     <Route path='/' element={<MsgTest/>}></Route>
     <Route path='/Dashboard' element={<Sidebar/>}></Route>
     <Route path='/Profile' element={<Profile/>}></Route>
    
    </Routes>
    </Router></AuthProvider>

    </div>
  );
}

export default App;
