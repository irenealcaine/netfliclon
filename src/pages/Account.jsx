import React from 'react'
import SavedShows from '../components/SavedShows'

const Account = () => {
  return (
    <>
      <div className="w-full text-white">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/79fe83d4-7ef6-4181-9439-46db72599559/33195bfc-7f65-4308-8869-677efc451cad/ES-es-20221017-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="" className='w-full h-[400px] object-cover' />
        <div className="bg-black/60 fixed top-0 w-full h-[550px]"></div>
        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">Mis favoritos</h1>
        </div>
      </div>
      <SavedShows />
    </>
  )
}

export default Account
