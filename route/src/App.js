import {  Route,BrowserRouter as Router,Link} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import Aboutus from './components/Aboutus';
 import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
    
      <Route exact path="/" component={Home} />
      <Route  path="/Aboutus" component={Aboutus} />
      <Route exact path="/Contact" component={Contact} />
 
      
    </div>
    </Router>
  );
}


export default App;

