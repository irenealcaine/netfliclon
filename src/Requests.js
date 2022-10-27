const key = process.env.REACT_APP_API_KEY
// const movie_id = 436270

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=es-ES&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=es-ES&page=1`,
  requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=es-ES&page=2`,
  requestDocumentary: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=es-ES&query=documental&page=1`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=es-ES&page=1`,
  // requestDetails: `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${key}&language=es-ES`
}

export default requests
