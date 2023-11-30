import { Routes, Route } from 'react-router-dom';
import './App.css';
import Topbar from './components/Topbar/Topbar';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Studios from './components/Studios/Studios';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <div>
      <Topbar />
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/studios' element={<Studios />} />
        {/* <Route path='/' element={Home} /> */}
        {/* <Route path='/' element={Home} /> */}
        {/* <Route path='/' element={Home} /> */}
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
