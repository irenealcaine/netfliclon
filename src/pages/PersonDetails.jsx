/* eslint-disable no-unused-vars */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import placeholder from '../images/placeholder.jpg'
import RowCredits from '../components/RowCredits'


const PersonDetails = () => {
  const { id } = useParams()
  const [person, setPerson] = useState([])
  const [images, setImages] = useState([])

  const key = process.env.REACT_APP_API_KEY

  const requests = {
    requestActor: `https://api.themoviedb.org/3/person/${id}?api_key=${key}&language=en-US`,
    requestCredits: `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${key}&language=es-ES`,
    requestImages: `https://api.themoviedb.org/3/person/${id}/images?api_key=${key}`
  }

  useEffect(() => {
    axios.get(requests.requestActor).then((res) => {
      setPerson(res.data)
      window.scroll({
        top: 0,
        behavior: 'smooth'
      });
    })
    axios.get(requests.requestImages).then((response) => {
      setImages(response.data.profiles)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  const imageOnErrorHandler = (event) => {
    event.currentTarget.src = placeholder;
  };

  return (
    <div className='w-full h-screen text-white'>
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-t from-black to-black/30" />
        <img className='h-[550px] w-full object-cover' src={images[1] ? `https://image.tmdb.org/t/p/original${images[1]?.file_path}` : `https://image.tmdb.org/t/p/original${person?.profile_path}`} alt='título' onError={imageOnErrorHandler} />
        <div className="absolute w-full top-[20%] p-4 md:p-8 flex flex-col gap-4 md:flex-row items-start">
          <img src={`https://image.tmdb.org/t/p/original${person?.profile_path}`} alt="7" className='md:w-1/4 w-0 rounded-xl shadow-2xl top-4' onError={imageOnErrorHandler} />
          <div className='md:w-3/4 w-full'>
            <h1 className="text-3xl md:text-5xl font-bold">{person?.name}</h1>
            <p className='text-sm text-gray-400 font-bold mt-4'>{person?.birthday} &nbsp; - &nbsp; {person.deathday ? `${person?.deathday}` : 'Presente'}</p>
            <p className='text-sm text-gray-400 font-bold mt-4'>{person?.place_of_birth}</p>
            <p className="w-full lg:max-w-[90%] xl:max-w-[80%] text-gray-200 indent-8 text-justify mt-2">{person?.biography}</p>
            <RowCredits rowID='1' title='Participaciones en películas' fetchURL={requests.requestCredits} />
          </div>
        </div>


      </div>
    </div>
  )
}

export default PersonDetails
