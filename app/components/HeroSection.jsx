import React from 'react'

const HeroSection = () => {
  return (
    <section className='min-h-screen' id='home'>
        <div className='flex flex-col justify-center items-center min-h-screen'>
          <div className='font-poiretfont text-center font-extrabold text-customdarkgreen'>
            <h1 className='text-4xl md:text-6xl lg:text-8xl'>Aniket Sapra</h1>
            <h2 className='text-2xl md:text-4xl lg:text-6xl'>Frontend Developer</h2>
          </div>
        </div>
    </section>
  )
}

export default HeroSection
