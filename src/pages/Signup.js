import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../Context/Authcontext';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [error, seterror] = useState();

  const navigate = useNavigate();

  function successmsg() {
    document.getElementById('para').innerHtml = "Account Added Successfully"
  }

  const { signUp } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    seterror('');
    try {
      await signUp(email, password);
      successmsg();
      navigate('/')

    } catch (error) {
      seterror(error.message)
    }
  }

  return (
    <div className='w-full  h-screen items-center flex justify-center p-7'>

<img className='hidden sm:block w-full h-full object-cover absolute' src="https://assets.nflxext.com/ffe/siteui/vlv3/83e8c151-107d-4e8f-b95a-d2ba99d49bb9/f1ac72e1-5adc-4caf-bceb-e8ec775414ac/IN-en-20230213-popsignuptwoweeks-perspective_alpha_website_large.jpg" />

<div className='w-full h-screen bg-black/60 fixed top-0 left-0'></div>

      <div className='w-[300px] md:w-[400px] h-[500px] bg-black/75  absolute items-center flex flex-col  sm:justify-center shadow-xl rounded border border-yellow-600 px-6 py-5'>
        <h1 className='text-center text-white pb-5'>SignUp Form</h1>
        {error ? <p className='text-red-600'>{error}</p> : <p className='text-white' id='para'></p>}
        <form onSubmit={handleSubmit}>

          <label className=' text-white text-[24px] block' htmlFor="">Email</label>
          <input onChange={(e) => setemail(e.target.value)} placeholder='enter email' className='px-4 py-3 rounded outline-none mb-2' type='email' />

          <label className='block text-white text-[24px]' htmlFor="">Password</label>
          <input onChange={(e) => setpassword(e.target.value)} placeholder='enter password' className='px-4 py-3 rounded outline-none' type='Password' />

          <button type='submit' className='text-white justify-center flex  py-2 px-4 w-[180px] bg-red-600 rounded-full my-6 '>Signup</button>

          <p className='text-white'>already have an account ? &nbsp;
            <Link className='border border-yellow-500 p-2 hover:opacity-75 rounded hover:text-yellow' to='/'>Sign In</Link></p>

        </form>
      </div>
    </div>
  )
}

export default Signup