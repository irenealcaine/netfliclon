import React from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { useState } from 'react'
import placeholder from '../images/placeholder.jpg'


const Movie = ({ item }) => {
  const imageOnErrorHandler = (event) => {
    event.currentTarget.src = placeholder;
    event.currentTarget.className = "border border-red-600";
  };

  const [like, setLike] = useState(false)
  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
      <img
        src={`https://image.tmdb.org/t/p/w500${item?.backdrop_path}`}
        placeholder='blur'
        alt={item?.title}
        className='w-full h-auto block'
        onError={imageOnErrorHandler}
      />
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
        <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
          {item?.title}
        </p>
        <p className="">
          {like ? <FaHeart className='absolute top-4 left-4 text-red-600 text-xl' /> : <FaRegHeart className='absolute top-4 left-4 text-red-600 text-xl' />}
        </p>
      </div>
    </div>
  )
}

export default Movie
