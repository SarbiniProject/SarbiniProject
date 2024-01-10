import logo from './logo.svg';
import './App.css';
import Admin from './adminpages/loging'
import Collaborators from './adminpages/collaborators';
function App() {
  return (
    <div className="App">
      {/* <Admin/> */}
      <Collaborators />
    </div>
  );
}

export default App;
