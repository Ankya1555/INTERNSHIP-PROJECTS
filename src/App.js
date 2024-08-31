import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import Nav from './Component/Nav';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Gallery from './Component/Gallery';
import Start from './Component/Start';
import Login from './Component/Login';
import { Signup } from './Component/Signup';
import Home2 from './Home2';
import Marriage from './Marriage';
import Manuskichi from './Manuskichi';
import Toys from './Toys';
import Computer from './Computer';
import Cycle from './Cycle';
import Plastic from './Plastic';
import DonateForm from './DonateForm';
import News from './Component/News';


function PrivateRoute({ element: Element }) {
  const auth = localStorage.getItem('Auth') === 'true';
  return auth ? <Element /> : <Navigate to="/login" />;
}

function App() {
  const [auth, setAuth] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedAuth = localStorage.getItem('Auth') === 'true';
    setAuth(storedAuth);
  }, [navigate]);

  return (
    <>
      {auth && <Nav />}
      <Routes>
        {/* Public Routes */}
        <Route path='/login' element={<Login setAuth={setAuth} />} />
        <Route path='/signup' element={<Signup />} />

        {/* Protected Routes */}
        <Route path='/home' element={<PrivateRoute element={Home} />} />
        <Route path='/about' element={<PrivateRoute element={About} />} />
        <Route path='/gallery' element={<PrivateRoute element={Gallery} />} />
        <Route path='/contact' element={<PrivateRoute element={Contact} />} />
        <Route path='/start' element={<PrivateRoute element={Start} />} />
        <Route path='/home2' element={<PrivateRoute element={Home2} />} />
        <Route path='/marriage' element={<PrivateRoute element={Marriage} />} />
        <Route path='/manuskichi' element={<PrivateRoute element={Manuskichi} />} />
        <Route path='/toys' element={<PrivateRoute element={Toys} />} />
        <Route path='/computer' element={<PrivateRoute element={Computer} />} />
        <Route path='/cycle' element={<PrivateRoute element={Cycle} />} />
        <Route path='/plastic' element={<PrivateRoute element={Plastic} />} />
        <Route path='/donate' element={<PrivateRoute element={DonateForm} />} />
        <Route path='/news' element={<PrivateRoute element={News}/>}/>


        {/* Redirect from root path */}
        <Route path='/' element={<Navigate to={auth ? '/home' : '/login'} />} />
      </Routes>
    </>
  );
}

export default App;
