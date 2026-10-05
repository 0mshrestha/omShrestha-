"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import FloatingGallery from "@/components/bookGallery";

export default function About() {

    const projectList = [
        {
            title: "roomFinder",
            description: "Express backend with MongoDB database, Map with leaflet and RESTful APIs for room listings and user authentication.",
            tags: ["Node.js", "Express", "MongoDB"],
        },
        {
            title: "Profile",
            description: "portfolio website built with Next.js, Tailwind CSS, and React, for myself.",
            tags: ["Next.js", "Tailwind CSS", "JavaScript", "React", "GSAP"],
        }
    ];

    const skillCategories = [
        {
            title: "Frontend & Meta-Frameworks",
            skills: ["React", "Next.js (App Router)", "Tailwind CSS", "HTML5/CSS3"],
        },
        {
            title: "Backend & Databases",
            skills: ["Node.js", "Express.js", "MongoDB / Mongoose", "REST APIs"],
        },
        {
            title: "Tools & Workflow",
            skills: ["Git & GitHub", "Postman", "NPM / Yarn", "VS Code"],
        }
    ];

    return (
        <div className="min-h-screen bg-[#000000] text-gray-100 font-mono antialiased">
            <Navbar />

            <section id="about" className="max-w-6xl md:mx-10 px-6 sm:px-6 lg:px-8 space-y-2 py-6 font-sans">

                <div className="space-y-6">
                    <h2 className="text-sm font-semibold tracking-wider text-zinc-500 uppercase">
                        Featured Work
                    </h2>

                    <div className="space-y-8">
                        {projectList.map((project, idx) => (
                            <div key={idx} className="group">
                                <h3 className="text-xl font-medium text-zinc-100 group-hover:text-blue-400 transition-colors duration-200">
                                    {project.title}
                                </h3>
                                <p className="text-zinc-400  leading-relaxed mt-2 text-[15px]">
                                    {project.description}
                                </p>
                                <p className="text-sm text-zinc-500 mt-2">
                                    <span className="text-zinc-600 font-medium">Built with:</span> {project.tags.join(", ")}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="space-y-6 pt-10">
                    <h2 className="text-sm font-semibold tracking-wider text-zinc-500 uppercase">
                        Technical Toolkit
                    </h2>

                    <div className="space-y-4">
                        {skillCategories.map((category, idx) => (
                            <div key={idx} className="text-[15px] leading-relaxed">
                                <span className="font-medium text-zinc-200 block md:inline md:w-56">
                                    {category.title}:
                                </span>
                                <span className="text-zinc-400 md:ml-2">
                                    {category.skills.join(", ")}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="pt-10">
                    <h2 className="text-sm font-semibold tracking-wider uppercase">
                        Fk this technical stuff, let me tell you about my journey of reading books and how i got into it.
                    </h2>
                    <p className="text-zinc-400 leading-relaxed mt-2 text-[15px]">
                        Hy im an ex Army of freeFire but after retirement everything changed for me i had nothing to do i was just fked by my life,then i started reading because of my friend <b> <a href="https://www.instagram.com/rojalshakya1/" target="_blank" rel="noreferrer">RojalSakya</a></b> Big shoutout to you man for asking me to read "The Power of Your Subconscious Mind" and now I love reading books and i started loving it when I read the book "The Alchemist" by Paulo Coelho, than after that got into money shitt "The 7 Habits of Highly Effective People" by Stephen R. Covey, "Rich Dad, Poor Dad" by Robert Kiyosaki, "Psychology of Money" by Morgan Housel,etc. Than finally i got to know about this badass nigga <b><a href="https://www.google.com/search?q=Davidgoggins" target="_blank" rel="noreferrer">David Goggins</a></b> from my friend <b><a href="https://github.com/101shreyash/" target="_blank" rel="noreferrer">Shreyash</a></b>  and his story from The Book "Can't Hurt Me", "Never Finished" The most Goated shit i ever read and after that i couldn't stop. Everyday im hungry not hungry for food but for the greatness which is why i play chess to know how great blunder i can do in a single game. have a great day what read doesnt make sense but after all that you knew that im a jacked guy who is hungry for great blunders and currently passionate about backend engineering...
                    </p>
                    <p className="text-zinc-400 leading-relaxed mt-2 text-[15px]">
                        And i love listening to music too and the best singer? it obviously <b><a href="https://www.instagram.com/kirawacha_/" target="_blank" rel="noreferrer">Kushal Rai</a></b>
                    </p>
                </div>
            </section>
            <FloatingGallery />
            <Footer />
        </div>
    );
}
