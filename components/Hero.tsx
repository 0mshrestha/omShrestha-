"use client"

import { Mascot } from 'page-mascot'

export default function Hero() {
  return (
    <section className=" flex flex-col justify-center space-y-3 max-w-3xl">
      <p className="text-blue-500 font-sans tracking-wider text-sm uppercase">Full Stack & Systems Journey</p>
      <div className="flex items-center space-x-2">
        <div className="mr-4 md:mr-0 h-8 w-8 md:w-16 md:h-16 m-4 flex items-center justify-center" style={{ transform: 'scale(0.90)' }}>
          <Mascot
            directions="/mascots/raccoon-directions.webp"
            reactions="/mascots/raccoon-reactions.webp"
          /></div>
        <h1 className="text-3xl font-sans sm:text-6xl font-bold tracking-tight mx-4 text-white leading-tight">
          &nbsp;Hi, I'm<br />Om Shrestha
        </h1>
      </div>
      <p className="text-gray-400 text-lg sm:text-xl max-w-2xl leading-relaxed mb-2">the <b>Jacked Guy</b> sitting infront of the laptop and writing random codes which eventually runs fine,
        I'm a Full Stack Developer specialized in TypeScript, React, Next.js, and building scalable Node.js/Express backends, Smooth animations using GSAP. Open to work together and I am currently engineering production-ready platforms that somehow <b>runs</b>, while laying down the foundation for deep backend architecture.
      </p>
    </section>
  );
}
