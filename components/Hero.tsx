import Link from "next/link";

export default function Hero() {
  return (
    <section className=" flex flex-col justify-center space-y-3 max-w-3xl">
      <p className="text-blue-500 font-sans tracking-wider text-sm uppercase">Full Stack & Systems Journey</p>
      <h1 className="text-3xl font-sans sm:text-6xl font-bold tracking-tight text-white leading-tight">
        Hi, I'm<br />&nbsp;Om Shrestha
      </h1>
      <p className="text-gray-400 text-lg sm:text-xl max-w-2xl leading-relaxed mb-2">the <b>Jacked Guy</b> sitting infront of the laptop and writing random codes which eventually runs fine,
        I recently mastered the MERN stack and I am currently engineering production-ready platforms that somehow <b>runs</b> using Next.js, while laying down the foundation for deep backend architecture.
      </p>
    </section>
  );
}
