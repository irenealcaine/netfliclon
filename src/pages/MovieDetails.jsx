import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import placeholder from '../images/placeholder.jpg'



const MovieDetails = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState([])

  const key = process.env.REACT_APP_API_KEY

  const requests = {
    requestDetails: `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=es-ES`
  }

  useEffect(() => {
    axios.get(requests.requestDetails).then((res) => {
      setMovie(res.data)
    })
  }, [])

  console.log(movie)
  console.log(requests.requestDetails)
  // console.log(movie?.genres[0].name)
  // const movieGenres = movie?.genres.map((i) => (
  //   <p>{i}</p>
  // ))
  // console.log(movieGenres)

  const imageOnErrorHandler = (event) => {
    event.currentTarget.src = placeholder;
  };

  return (



    <div className='w-full h-screen text-white'>
      <div className="w-full h-full">
        <div className="absolute w-full h-screen bg-gradient-to-r from-black to-black/50" />
        <img className='h-full w-full object-cover' src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`} alt='título' onError={imageOnErrorHandler} />
        <div className="absolute w-full top-[15%] p-4 md:p-8 flex flex-col md:flex-row items-center">
          <img src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`} alt="7" className='md:w-1/4 w-0 md:mr-8 mr-0' />
          <div>
            <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
            <h1 className="text-lg md:text-2xl font-bold">{movie?.tagline}</h1>
            {/* <div className="my-4">
              <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5 rounded'>Reproducir</button>
              <button className='border text-white border-gray-300 py-2 px-5 rounded ml-4'>Ver mas tarde</button>
            </div> */}
            <p className="w-full md:max-w-[80%] lg:max-w-[70%] xl:max-w-[55%] text-gray-200 indent-8 text-justify">{movie?.overview}</p>
            {/* <p className="text-gray-400 text-sm">Géneros:
            {movie?.genres.map((i) => (
              <p>{movie?.genres[i].name}</p>
            ))}
          </p> */}
            <p className="text-gray-500 text-sm">Estreno: <span className='text-gray-400 font-bold'>{movie?.release_date}</span></p>

            <p className="text-gray-500 text-sm">Duración: <span className='text-gray-400 font-bold'>{Math.floor(movie?.runtime / 60)}h {movie?.runtime - (Math.floor(movie?.runtime / 60)) * 60}min</span></p>
            <p className="">{movie?.vote_average}/10 ({movie?.vote_count} votos)</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails
