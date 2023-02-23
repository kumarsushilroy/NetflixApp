import React, { useEffect, useState } from 'react'
import requests from './Requests';
import axios from 'axios';
import { UserAuth } from '../Context/Authcontext';



const Main = () => {
    // let num1 = 4;
    // let num2 = 4;
    // const data = num1 + num2;
    // console.log(data);

    // setTimeout(()=>{
    //    window.location.reload(true)
    // },5000)

    
    const {user} = UserAuth();
    
    const [movies, setmovies] = useState([]);
   
    const movie = movies[Math.floor(Math.random()*movies.length)]
   
     const changemovie = () =>{
       window.location.reload()
     }

     const play = ()=>{
        alert('sorry video can\'nt be played')
     }

     const watch = ()=>{
        alert("data was not available")
     }
    useEffect(() => {
      
        const movieData = async() => {
           const  movieInfo = await axios.get(requests.nowplaying);
        //    console.log(movieInfo.data.results);
           setmovies(movieInfo.data.results);
        }
        movieData();

        

    }, [])
     
    const truncate = (str, num)=>{
      if (str?.length > num){
        return str.slice(0,num) + '........';
      }else {
        return str;
      }
    }

    return (
        <div className='w-full h-[550px] text-white'>
          
            <div className="h-full w-full text-white">
                <div className="h-[550px] absolute w-full bg-gradient-to-r from-black"></div>
                <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movies?.original_title} />

                <div>

                    <div className='absolute w-full top-[20%] p-4 md:p-8'>
                        <h1 className='text-2xl text-[green] mb-4'>WELCOME ! {user.email}</h1>
                        <h1 className='text-3xl md:text-5xl pb-[78px]'>{movie?.title}</h1>
                        
                        <button onClick={play} className='border hover:opacity-75 bg-gray-300 rounded  text-black border-gray-300 ml-2 py-2 px-5 md:px-10 mb-4'>Play</button>
                        <button onClick={watch} className='border hover:opacity-75 text-white rounded border-gray-300 py-2 md:px-5 px-3 ml-4'>Watch Later</button>
                        <button onClick={changemovie} className='border hover:opacity-75 text-white rounded border-gray-300 py-2 md:px-5 px-3 ml-4' >NEXT</button>
                        <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>{movie?.release_date}</p>
                        <p>{truncate(movie?.overview, 250)}</p>
                    </div>
                </div>
            </div>

           
        </div>
    )
}

export default Main