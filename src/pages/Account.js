import React from 'react'
import SavedShows from '../components/SavedShows'


const Account = () => {
  return (
    <>
      <div className='text-white w-full h-screen'>
        <img className=' w-full h-[400px] object-cover absolute' src="https://assets.nflxext.com/ffe/siteui/vlv3/83e8c151-107d-4e8f-b95a-d2ba99d49bb9/f1ac72e1-5adc-4caf-bceb-e8ec775414ac/IN-en-20230213-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt='' />

        <div className='w-full h-[400px] bg-black/60 fixed top-0 left-0'></div>

        <div className='absolute top-[20%] p-4 md:p-8'>
          <h1 className='text-3xl md:5xl font-bold'>My Shows</h1>
          
        </div>
        {/* <SavedShows/> */}
      </div>
    </>
  )
}

export default Account