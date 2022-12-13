import './App.css';
import NavbarComponents from './components/NavbarComponents';
import { BrowserRouter as Router ,Routes,Route,Link} from 'react-router-dom';
import Home from './components/pages/Home';


function App() {
  return (
    <Router>
    <NavbarComponents/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
