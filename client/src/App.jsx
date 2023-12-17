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
import Logout from './components/Logout/Logout';
import Path from './paths';
import CreateStudio from './components/Admin/CreateStudio/CreateStudio';
import EditStudio from './components/Admin/EditStudio/EditStudio';
import StudioDetails from './components/Admin/StudioDetails/StudioDetails';
import CreateGroup from './components/Admin/CreateGroup/CreateGroup';
import { StudioProvider } from './contexts/studioContext';
import NotFound from './components/NotFound/NotFound';
import AuthGuard from './guards/AuthGuard';
import AdminAuthGuard from './guards/AdminAuthGuard';

function App() {

  return (
    <AuthProvider>
      <StudioProvider>
        <div>
          <Topbar />
          <Navbar />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/studios' element={<Studios />} />
            <Route path='/schedule' element={<Schedule />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />



            <Route element={<AuthGuard />} >

              <Route path={Path.StudioDetails} element={<StudioDetails />} />
              <Route path='/logout' element={<Logout />} />

            </Route>

            <Route element={<AdminAuthGuard />} >

              <Route path={Path.CreateStudio} element={<CreateStudio />} />
              <Route path={Path.EditStudio} element={<EditStudio />} />
              <Route path={Path.CreateGroup} element={<CreateGroup />} />
              
            </Route>

            <Route path="*" element={<NotFound />} />


          </Routes>
          <Footer />
        </div>
      </StudioProvider>

    </AuthProvider>
  )
}

export default App;
