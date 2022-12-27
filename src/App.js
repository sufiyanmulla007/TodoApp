import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './TodoComponent/Home';
import Navbaar from './TodoComponent/Navbaar';
function App() {
  return (
     <div className="App">
      <Navbaar/>
      <Home/>
      </div>
  );
};

export default App;
