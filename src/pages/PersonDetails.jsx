import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import RowActors from '../components/RowActors'
import RowSimilars from '../components/RowSimilars'
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
      // console.log(response.data.profiles)
      // console.log(images[1])
      // window.scroll({
      //   top: 0,
      //   behavior: 'smooth'
      // });
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
            {/* <h1 className="text-lg md:text-2xl font-bold">{movie?.tagline}</h1> */}
            {/* <div className="my-4 ">
              <Link to={`/details/video`}>
                <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5 rounded mr-4'>Reproducir</button>
              </Link>
              <button className='border text-white border-gray-300 py-2 px-5 rounded mt-4 md:mt-0'>Ver mas tarde</button>
            </div> */}



            {/* <p className='text-sm text-gray-400 font-bold'>{Math.floor(movie?.runtime / 60)}h {movie?.runtime - (Math.floor(movie?.runtime / 60)) * 60}min</p> */}
            {/* <p className="mt-2">{movie?.vote_average}/10 ({movie?.vote_count} votos)</p> */}
            {/* <RowActors rowID='1' title='Actores' fetchURL={requests.requestActors} /> */}
            {/* <RowSimilars rowID='2' title='Películas similares' fetchURL={requests.requestSimilars} /> */}
            <RowCredits rowID='1' title='Participaciones en películas' fetchURL={requests.requestCredits} />
          </div>
        </div>


      </div>
    </div>
  )
}

export default PersonDetails
