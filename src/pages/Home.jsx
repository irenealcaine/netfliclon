import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'

const Home = () => {
  return (
    <div>
      <Main />
      <Row rowID='1' title='Novedades' fetchURL={requests.requestUpcoming} />
      <Row rowID='2' title='Populares' fetchURL={requests.requestPopular} />
      <Row rowID='3' title='Tendencias' fetchURL={requests.requestTrending} />
      <Row rowID='4' title='Mejor valoradas' fetchURL={requests.requestTopRated} />
      <Row rowID='5' title='Documentales' fetchURL={requests.requestDocumentary} />
    </div>
  )
}

export default Home
