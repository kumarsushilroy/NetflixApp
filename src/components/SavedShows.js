
import Chevron from 'react-chevron';
// import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
import { useState, useEffect } from 'react';
import { UserAuth } from '../Context/Authcontext';
import { db } from '../Firebase';
import { doc, onSnapshot } from 'firebase/firestore'

const SavedShows = () => {

  const slideLeft = () => {
    var left = document.getElementById('slider');
    left.scrollLeft = left.scrollLeft - 500;
  }

  const slideRight = () => {
    var right = document.getElementById('slider');
    right.scrollRight = right.scrollRight + 500;
  }

  const [movies, setmovies] = useState([]);
  const { user } = UserAuth();
  

  useEffect(() => {
   onSnapshot(
    doc(db, 'users', `${user?.email}`, (doc)=>{
      setmovies(doc?.data()?.savedShows)
    })
   )
  }, [user?.email])
  console.log(movies)

  return (
    <>
      <h2 className='text-white font-bold md:text-xl p-4'>My Shows</h2>
      <div className="relative flex items-center group">
        <Chevron onClick={slideLeft} direction={'left'} className="bg-white p-4 left-0  hidden group-hover:block rounded-full absolute cursor-pointer z-10 opacity-70 hover:opacity-100" />
        <div id={'slider'} className="h-full w-full overflow-x-scroll whitespace-nowrap scroll-smooth   relative">

          {
            movies.map((item, id) => {
              return (

                <div key={id} className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block relative cursor-pointer p-2">
                  <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?.img}`} alt={item?.title} />

                  <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-90 text-white">
                    <p className='white-space-normal text-center md:text-sm h-full text-white flex  justify-center text-xs font-bold items-center'>{item?.title}</p>

                  </div>
                </div>
              )
            })
          }

        </div>
        <Chevron onclick={slideRight} direction={'right'} className="bg-white p-4 right-0 hidden group-hover:block rounded-full absolute cursor-pointer z-10 opacity-70 hover:opacity-100" />


      </div>
    </>
  )
}

export default SavedShows