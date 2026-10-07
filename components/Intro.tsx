"use client"

import { Mascot } from 'page-mascot'

export default function Intro() {

  const MASCOT_SIZE = 120
  return (
    <section className="flex w-full h-fit max-w-3xl flex-col gap-5">
      <p className="font-sans text-sm uppercase tracking-wider text-blue-500">
        Full Stack &amp; Systems Journey
      </p>

      <div className="flex items-center gap-1 sm:gap-2">
        <div className="relative h-[88px] w-[88px] shrink-0 sm:h-[120px] sm:w-[120px]">
          <div className="origin-top-left scale-[0.733] sm:scale-100">
            <Mascot
              size={MASCOT_SIZE}
              directions="/mascots/raccoon-directions.webp"
              reactions="/mascots/raccoon-reactions.webp"
            />
          </div>
        </div>

        <h1 className="min-w-0 font-sans text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
          <span className="block">Hi, I&apos;m</span>
          <span className="block">Om Shrestha</span>
        </h1>
      </div>

      <p className="max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg md:text-xl">
        the <b >Jacked </b>Guy sitting infront of the laptop and writing random codes which eventually runs fine,
        I'm a Full Stack Developer specialized in TypeScript, React, Next.js, and building scalable Node.js/Express backends, Smooth animations using GSAP. Open to work together and I am currently engineering production-ready platforms, while laying down the foundation for deep backend architecture.
      </p>
    </section>
  )
}
