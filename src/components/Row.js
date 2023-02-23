import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Movie from './Movie';
import Chevron from 'react-chevron';
// import {MdChevronLeft, MdChevronRight} from 'react/icons/md'
const Row = ({ title , fetchUrl}) => {

    const [movies, setmovies] = useState([]);
    
    

    useEffect(() => {
        axios.get(fetchUrl).then((res) => {
            // console.log(res.data.results)
            setmovies(res.data.results)
        })
       
       
    }, [fetchUrl])

    

    console.log(movies)

    const slideLeft = () =>{
        var left = document.getElementById('slider');
        left.scrollLeft = left.scrollLeft - 500;
    }

    const slideRight = ()=>{
        var right = document.getElementById('slider');
        right.scrollRight = right.scrollRight + 500;
    }

    return (
        <>
            <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
            <div className="relative flex items-center group">
            <Chevron direction={'left'} onClick={slideLeft}  className="bg-white p-4 left-0  hidden group-hover:block rounded-full absolute cursor-pointer z-10 opacity-70 hover:opacity-100" />
                <div id={'slider'} className="h-full w-full scrollbar-hidden overflow-x-scroll whitespace-nowrap scroll-smooth   relative"> 

                    {
                        movies.map((item, id) => {
                            return (

                                <Movie item={item} key={id} />
                            )
                        })
                    }

                </div>
                <Chevron direction={'right'} onClick={slideRight} className="bg-white p-4 right-0 hidden group-hover:block rounded-full absolute cursor-pointer z-10 opacity-70 hover:opacity-100" />
                

            </div>

            
        </>
    )
}

export default Row