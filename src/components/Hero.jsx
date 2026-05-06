import React from 'react'
import plant from '../assets/plant.png'

const Hero = () => {
  return (
    <section
      className="relative w-full flex-1 overflow-hidden flex items-center bg-[#0d2a1a]"
    >
      {/* Decorative leaf icons */}
      <span className="absolute top-8 left-200 text-[#4a7a3a] text-3xl opacity-60 select-none">🪴</span>
      <span className="absolute top-20 right-20 text-[#4a7a3a] text-4xl opacity-50 select-none rotate-12">🌿</span>
      <span className="absolute bottom-24 left-[55%] text-[#4a7a3a] text-4xl opacity-50 select-none -rotate-12">🌱</span>
      <span className="absolute  bottom-24 left-80 text-[#4a7a3a] text-4xl opacity-50 select-none rotate-12">🌾</span>

      <div className="w-full max-w-7xl mx-auto px-20 flex items-center justify-between gap-10 -mt-16">

        {/* Left content */}
        <div className="flex-1 flex flex-col gap-6 z-10">

          <h1 className="text-5xl font-extrabold leading-tight text-white">
            <span className="text-[#c49a10]">Plants</span> make a<br />
            positive <span className="text-[#c49a10]">impact</span> on<br />
            your environment
          </h1>

          <p className="text-white/70 italic text-sm max-w-md leading-relaxed">
            Plants bring natural beauty, improve air quality, and 
            create a peaceful environment that makes 
            your home feel alive and refreshing.
          </p>

          <div className="flex items-center gap-4 mt-2">
            <button className="flex items-center gap-2 bg-[#c49a10] text-white font-bold px-6 py-3 rounded-md border-2 border-[#c49a10] hover:bg-transparent hover:text-[#c49a10] hover:scale-105 hover:shadow-[0_0_20px_rgba(196,154,16,0.35)] transition-all duration-300 cursor-pointer">
              Shop Now
            </button>
            <button className="flex items-center gap-2 border-2 border-white text-white font-bold px-6 py-3 rounded-md hover:bg-white hover:text-[#0d2a1a] hover:scale-105 hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.35)] transition-all duration-300 cursor-pointer">
              Know More
            </button>
          </div>


          <div className="flex items-center gap-5 mt-2">
            <a href="#" className="text-white/70 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/>
                <circle cx="17.5" cy="6.5" r="1.5"/>
              </svg>
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Right — plant image */}
        <div className="flex-1 flex justify-center items-end z-10">
          <img
            src={plant}
            alt="Plant"
            className="w-full max-w-xl object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
