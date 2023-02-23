
import { Link,NavLink } from 'react-router-dom';

import { UserAuth } from '../Context/Authcontext';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {

  const navigate = useNavigate();
  
 const {user,LogOut} = UserAuth();
 
 console.log(user);

 

 const handleLogout = async() =>{
    try{
       await LogOut();
        navigate('/')
    }catch(error){
      alert(error)
    }
 }

  return (
    <div className='flex justify-between px-3 py-3 z-[100] fixed absolute w-full '>
     <Link to='/'><h1 className='text-red-600 text-3xl sm:text-4xl font-bold '>NETFLIX</h1></Link> 

     { user? <div className="button">
       <Link to='/account'><button className=' px-5 py-3 text-white rounded hover:opacity-75 transition duration-200 outline-white-400 border'>Account</button></Link> 
       <button onClick={handleLogout} className='bg-red-600 px-5 py-3 text-white rounded hover:opacity-75 ml-2 transition duration-200'>LogOut</button>
      </div> :   <div className="button mt-3">
       <NavLink to='/signup' className=' md:px-5 px-3 mt-3 md:py-3 py-2 text-white rounded hover:opacity-75 transition duration-200 outline-white '><button>Sign Up</button></NavLink> 
       <NavLink to='/' className=' md:px-5 px-3 mt-3 md:py-3 py-2 text-white rounded hover:opacity-75 ml-2 transition duration-200'>
        <button>Sign In</button> </NavLink> 
      </div>
       }
      
    </div>
  )
}

export default Navbar