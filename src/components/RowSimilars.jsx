import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { Link } from 'react-router-dom'
import placeholder from '../images/placeholder2.png'



const RowSimilars = ({ title, rowID, fetchURL }) => {

  const [similars, setSimilars] = useState([])

  useEffect(() => {
    axios.get(fetchURL).then((res) => {
      setSimilars(res.data.results)
      console.log(res.data.results)
      console.log(similars)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchURL])

  const slideLeft = () => {
    let slider = document.getElementById('slider' + rowID)
    slider.scrollLeft = slider.scrollLeft - 500
  }

  const slideRight = () => {
    let slider = document.getElementById('slider' + rowID)
    slider.scrollLeft = slider.scrollLeft + 500
  }

  const imageOnErrorHandler = (event) => {
    event.currentTarget.src = placeholder;
    event.currentTarget.className = "border border-red-600 rounded-lg";
  };

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">
        {title}
      </h2>
      <div className="relative flex items-center group w-full">
        <MdChevronLeft
          size={40}
          className='bg-white text-black rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block left-0'
          onClick={slideLeft}
        />
        <div
          id={'slider' + rowID}
          className="h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {similars.map((similar) => (
            <Link to={`/details/${similar?.id}`} id={similar?.id}>
              <div className='w-[120px] md:w-[180px] h-auto inline-block cursor-pointer relative p-2'>
                <img
                  src={`https://image.tmdb.org/t/p/original${similar?.poster_path}`}
                  alt=""
                  className='w-full h-auto block rounded-lg'
                  onError={imageOnErrorHandler}
                />
                <p className='text-sm text-center font-bold truncate mt-2'>{similar.title}</p>
              </div>
            </Link>
          ))}
        </div>
        <MdChevronRight
          size={40}
          className='bg-white text-black rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block right-0'
          onClick={slideRight}

        />
      </div>
    </>
  )
}

export default RowSimilars
