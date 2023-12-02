import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/authContext';

import Topbar from './components/Topbar/Topbar';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Studios from './components/Studios/Studios';
import Footer from './components/Footer/Footer';
import Schedule from './components/Schedule/Schedule';
import Register from './components/Register/Register';
import Login from './components/Login/Login';

function App() {

  return (
    <AuthProvider>
      <div>
        <Topbar />
        <Navbar />

        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/studios' element={<Studios />} />
          <Route path='/schedule' element={<Schedule />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </AuthProvider>
  )
}

export default App;
