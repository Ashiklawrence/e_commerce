import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Signup from './pages/Signup';
import Navbar from './pages/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route element={<Home/>} path='/' />
        <Route element={<Contact/>} path='/contact' />
        <Route element={<About/>} path='/about' />
        <Route element={<Signup/>} path='/signup' />
      </Routes>
    </div>
  );
}

export default App;
