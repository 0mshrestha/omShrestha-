"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import FloatingGallery from "@/components/bookGallery";
import Link from "next/dist/client/link";

export default function About() {

    const projectList = [
        {
            title: "roomFinder",
            description: "Express backend with MongoDB database, Map with leaflet and RESTful APIs for room listings and user authentication.",
            tags: ["Node.js", "Express", "MongoDB"],
        },
        {
            title: "Profile",
            description: "portfolio website built with Next.js, Tailwind CSS,GSAP, and React, for myself.",
            tags: ["Next.js", "Tailwind CSS", "JavaScript", "React", "GSAP", "Framer Motion"],
        },
    ];

    const skillCategories = [
        {
            title: "Frontend & Meta-Frameworks",
            skills: ["React", "Next.js (App Router)", "Tailwind CSS", "HTML5/CSS3", "GSAP", "Framer Motion"],
        },
        {
            title: "Backend & Databases",
            skills: ["Node.js", "Express.js", "MongoDB / Mongoose", "REST APIs", "PostgreSQL"],
        },
        {
            title: "Tools & Workflow",
            skills: ["Git & GitHub", "Postman", "NPM / Yarn", "VS Code"],
        }
    ];

    return (
        <div className="min-h-screen bg-[#000000] text-gray-100 font-mono antialiased">
            <Navbar />

            <section id="about" className="max-w-6xl md:mx-10 px-6 sm:px-6 lg:px-2 space-y-1 py-0 font-sans">
                <div className="space-y-6">
                    <h2 className="text-sm mt-1 font-semibold tracking-wider text-zinc-500 uppercase">
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
                    <p className="text-sm tracking-wider text-zinc-500 uppercase">Visit <a href="https://github.com/0mshrestha" target="_blank" rel="noreferrer" className="text-blue-400 hover:no-underline">GitHub</a> for more...</p>
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
                        Used to be a delusional guy and had nothing to do i was just fkedup by my life, then i started reading because of my friend <b><a href="https://www.instagram.com/rojalshakya1/" target="_blank" rel="noreferrer">RojalSakya</a></b> Big shoutout to you man for asking me to read "Conscious, Subconscious Mind" and now I love reading books and i started loving it even more when I read the book "The Alchemist" by Paulo Coelho, than after that got into money shitt "The 7 Habits of Highly Effective People" by Stephen R. Covey, "Rich Dad, Poor Dad" by Robert Kiyosaki, "Psychology of Money" by Morgan Housel,etc. Than finally i got to know about this badass nigga <b><a href="https://www.google.com/search?q=Davidgoggins" target="_blank" rel="noreferrer">David Goggins</a></b> from my friend <b><a href="https://github.com/101shreyash/" target="_blank" rel="noreferrer">Shreyash</a></b>, and his story from The Book "Can't Hurt Me", "Never Finished" The most Goated shit i ever read and after that i couldn't stop. Everyday im hungry, not for food but for the greatness which is why i play chess to know how great blunders i can make in a single game. Have a great day, what you read doesn't make sense but after all this that you knew that im a jacked guy who is hungry for the great blunders and currently passionate about backend engineering... thanks for reading, its a type of shit that i write when i dont know what to write on exam paper.
                    </p>
                    <p className="text-zinc-400 leading-relaxed mt-2 text-[15px]">
                        BTW i love listening to music too and the best singer ik? <b><a href="https://www.instagram.com/kirawacha_/" target="_blank" rel="noreferrer">Kushal Rai</a></b>
                    </p>
                    <p className="text-zinc-500 bg-[#0A0A0A] max-w-fit leading-relaxed mt-2 text-[12px]">
                        Click the highlighted words to visit them!
                    </p>
                </div>
            </section>
            <FloatingGallery />
            <Footer />
        </div>
    );
}
