import React from 'react'

const Video = () => {
  return (
    <div>
      {/* <iframe
        className='w-full h-screen md:p-24 p-10 pt-20 md:pt-24 aspect-auto'
        title='video'
        src="https://www.youtube.com/embed/G1IbRujko-A?autoplay=1">
      </iframe> */}
      <iframe
        className='w-full h-screen md:p-16 p-10 pt-20  aspect-auto'
        src="https://www.youtube.com/embed/G1IbRujko-A"
        title="Trailer"
      // frameborder="0"
      // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      // allowfullscreen
      ></iframe>
    </div>
  )
}

export default Video
