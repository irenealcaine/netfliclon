import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Movie from './Movie'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

const Row = ({ title, fetchURL, rowID }) => {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios.get(fetchURL).then((res) => {
      setMovies(res.data.results)
    })
  }, [fetchURL])

  const slideLeft = () => {
    let slider = document.getElementById('slider' + rowID)
    slider.scrollLeft = slider.scrollLeft - 500
  }

  const slideRight = () => {
    let slider = document.getElementById('slider' + rowID)
    slider.scrollLeft = slider.scrollLeft + 500
  }

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">
        {title}
      </h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          size={40}
          className='bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block left-0'
          onClick={slideLeft}
        />
        <div
          id={'slider' + rowID}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((item, id) => (
            <Movie item={item} key={id} />
          ))}
        </div>
        <MdChevronRight
          size={40}
          className='bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block right-0'
          onClick={slideRight}

        />
      </div>
    </>
  )
}

export default Row
