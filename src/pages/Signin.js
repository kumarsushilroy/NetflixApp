import React from 'react';
import { UserAuth } from '../Context/Authcontext';
import { useNavigate,Link } from 'react-router-dom';
import { useState } from 'react';
const Signin = () => {

  const [email, setemail] = useState('');
  const [password , setpassword] = useState('');
  const [error, seterror] = useState();
   
  const navigate = useNavigate();
  const {signIn} = UserAuth();

  
  const handleSubmit = async(e)=>{
       e.preventDefault()
       try{
        await signIn(email, password);
         navigate('/home')
       }catch(error){
        seterror(error.message)
       }
       
  }


  return (

    

    <div className='w-full  h-screen items-center flex justify-center p-7'>
       <img className='hidden sm:block w-full h-full object-cover absolute' src="https://assets.nflxext.com/ffe/siteui/vlv3/83e8c151-107d-4e8f-b95a-d2ba99d49bb9/f1ac72e1-5adc-4caf-bceb-e8ec775414ac/IN-en-20230213-popsignuptwoweeks-perspective_alpha_website_large.jpg" />

       <div className='bg-black/60 w-full h-screen left-0 top-0 fixed'></div>

      <div className=' absolute w-[300px] md:w-[400px] h-[500px] flex items-center flex-col justify-center shadow-xl rounded bg-black/70 fixed border border-white-600 px-6 py-5'>
      <h1 className='text-center text-white pb-5'>SignIn Form</h1>
        {error && <p className='text-red-400'>{error}</p>}
        <form onSubmit={handleSubmit}>
          
          <label className=' text-white text-[20px] md:text-[24px] block' htmlFor="">Email</label>
          <input onChange={(e)=>setemail(e.target.value)} placeholder='enter email' className='px-4 py-3 rounded outline-none mb-2' type='email' />

          <label className='block text-white md:text-[24px] text-[20px]'  htmlFor="">Password</label>
          <input onChange={(e)=>setpassword(e.target.value)} placeholder='enter password' className='px-4 py-3 rounded outline-none' type='Password' />

          <button type='submit' className='text-white hover:opacity-75 justify-center flex  py-2 px-4 w-[180px] bg-[red] rounded-full my-6 '>Sign In</button> 

          <p className='text-white'>Don't have an account ? &nbsp;
            <Link className='border border-white-500 sm:p-2 p-1  hover:opacity-75 rounded hover:text-yellow' to='/signup'>Sign Up</Link></p>

        </form>
      </div>
    </div>
  )
}

export default Signin