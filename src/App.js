import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Signup from './pages/Signup';
import Navbar from './pages/Navbar';
import Footer from './Components/Footer';
import Favorites from './pages/Favorites';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      {/* <Navbar_test></Navbar_test> */}
      <Routes>
        <Route element={<Home/>} path='/' />
        <Route element={<Contact/>} path='/contact' />
        <Route element={<About/>} path='/about' />
        <Route element={<Signup/>} path='/signup' />
        <Route element={<Favorites/>} path ='/favorites'></Route>
        <Route element={<Cart/>} path='/cart'></Route>
        <Route element={<Checkout/>} path='/checkout'></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
