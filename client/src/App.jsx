import { Routes, Route } from 'react-router-dom';
import './App.css';
import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Studios from './components/Studios';

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
    </div>
  )
}

export default App;
