
import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Account from './pages/Account';
import ProtectedRoute from './components/ProtectedRoute';
import { Authprovider } from './Context/Authcontext';


function App() {
  return (
    <>


      <Authprovider>

        <Navbar />
        
        <Routes>
          <Route path='/' element={<Signin />} />
          <Route path='/home' element={<ProtectedRoute><Home/></ProtectedRoute>} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/account' element={<ProtectedRoute> <Account /> </ProtectedRoute>} />
        </Routes>
      </Authprovider>





    </>

  );
}

export default App;
