import React from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useState } from 'react';
import { db } from '../Firebase';
import { doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { UserAuth } from '../Context/Authcontext';

const Movie = ({ item, id }) => {

    const [like, setlike] = useState(false);
    const [saved, setsaved] = useState(false);

    const { user } = UserAuth();
    const movieiId = doc(db, 'users', `${user?.email}`);

    const saveshow = async () => {
        if (user?.email) {
            setlike(!like);
            setsaved(true);
            await updateDoc(movieiId, {
                savedShows: arrayUnion({
                    id: item.id,
                    title: item.title,
                    img: item.backdrop_path
                })
            })
        }else{
            alert('plz login to save a movie');
        }

    }

    return (

        <div key={id} className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block relative cursor-pointer p-2">
            <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />

            <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-90 text-white">
                <p className='white-space-normal text-center md:text-sm h-full text-white flex  justify-center text-xs font-bold items-center'>{item?.title}</p>
                <p onClick={saveshow} className='absolute top-10 left-9 text-gray-300'>{like ? <FaHeart /> : <FaRegHeart />}</p>
            </div>
        </div>

    )
}

export default Movie