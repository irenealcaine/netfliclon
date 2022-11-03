import React from 'react'

const Video = () => {
  return (
    <div>
      <iframe
        className='w-full h-screen md:p-16 p-10 pt-20  aspect-auto'
        src="https://www.youtube.com/embed/G1IbRujko-A"
        title="Trailer"
      ></iframe>
    </div>
  )
}

export default Video
