import logo from './logo.svg';
import './App.css';
import Admin from './adminpages/loging'
import Collaborators from './adminpages/collaborators';
import Sidebar from './adminpages/sidebar';
function App() {
  return (
    <div className="App">
      {/* <Admin/> */}
      {/* <Collaborators /> */}
      <Sidebar />
    </div>
  );
}

export default App;
