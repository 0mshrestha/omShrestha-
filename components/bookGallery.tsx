"use client";

import { useRef, MouseEvent, useEffect, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

interface photos { id: number; src: string; alt: string; speed: number; top?: string; bottom?: string; left: string; width: string; aspect: string; }
interface mobilePositions { top?: string; bottom?: string; }

const photos = [
    // Top Left (Landscape)
    { id: 1, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6-dGjs4F4A_HaIJjIU_mAqZ4yw9f22BVI7qRA9CpzOQ&s=10", alt: "Gallery Item 1", speed: 0.15, top: "15%", left: "8%", width: "w-24 md:w-48", aspect: "aspect-[4/3]" },
    // Top Center-Left (Portrait)
    { id: 2, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5kifRjsXW9CWvhBjtHPAVLXnUAVN-u6P-fcp3pmCSMA&s=10", alt: "Gallery Item 2", speed: 0.28, top: "2%", left: "34%", width: "w-24 md:w-38", aspect: "aspect-[3/4]" },
    // Top Center-Right (Vertical Portrait)
    { id: 3, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVO2kMD6VknkgONKzW3eFxNiYG7UXFOswZl4KlQUuVLw&s=10", alt: "Gallery Item 3", speed: 0.12, top: "2%", left: "57%", width: "w-24 md:w-34", aspect: "aspect-[2/3]" },
    // Top Right (Portrait)
    { id: 4, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS71_LComkxI-toIcS-fetmFkzMzU0p902N0HE2iFgPmQ&s=10", alt: "Gallery Item 4", speed: 0.32, top: "12%", left: "76%", width: "w-24 md:w-28", aspect: "aspect-[3/4]" },

    { id: 5, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYnJhhOHfZc6Q8mOsSTtdhDZOBHBEIzHJU23o_YknOJQ&s=10", alt: "Gallery Item 5", speed: 0.22, bottom: "14%", left: "6%", width: "w-28 md:w-48", aspect: "aspect-[4/3]" },
    // Bottom Center-Left (Square-ish Portrait)
    { id: 6, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9JdA-C_Y9P4gZyQfPHS9v2q2I5LhPjNDYeJxikJsbuQ&s=10", alt: "Gallery Item 6", speed: 0.35, bottom: "2%", left: "30%", width: "w-24 md:w-34", aspect: "aspect-[4/5]" },
    // Bottom Center-Right (Portrait)
    { id: 7, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG2tiFOyyUAoVzfibHkrNUiBxb_qDnIwltA_B7dglZqQ&s=10", alt: "Gallery Item 7", speed: 0.18, bottom: "6%", left: "52%", width: "w-24 md:w-38", aspect: "aspect-[3/4]" },
    // Bottom Right (Landscape)
    { id: 8, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy4A_hwpb-DMnKjVHYNRkP5grG35jecdCmiNbMpzgv9w&s=10", alt: "Gallery Item 8", speed: 0.25, bottom: "16%", left: "74%", width: "w-28 md:w-48", aspect: "aspect-[4/3]" },
];

const mobilePositions = [
    { x: -55, y: -260 },      // 1 — top
    { x: 75, y: -190 },     // 2 — upper right
    { x: 72, y: 20 },     // 3 — right
    { x: 55, y: 170 },      // 4 — lower right

    { x: -60, y: 35 },       // 5 — bottom
    { x: -110, y: 205 },     // 6 — lower left
    { x: -185, y: 25 },    // 7 — left
    { x: -135, y: -160 },    // 8 — upper left
];

export default function BookGallery() {
    const containerRef = useRef<HTMLDivElement>(null);
    const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 608);

        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => {
            window.removeEventListener("resize", checkMobile);
        };
    }, []);


    useGSAP(() => {
        if (!isMobile) return;

        const animations: gsap.core.Tween[] = [];

        imageRefs.current.forEach((image, index) => {
            if (!image) return;

            const position = mobilePositions[index];

            gsap.set(image, {
                x: position.x,
                y: position.y,
                rotation: index % 2 === 0 ? -2 : 2,
            });

            const animation = gsap.to(image, {
                x: position.x + (index % 2 === 0 ? 25 : -25),
                y: position.y + (index % 2 === 0 ? -18 : 18),
                rotation: index % 2 === 0 ? 3 : -3,

                duration: 3 + index * 0.35,
                ease: "sine.inOut",

                repeat: -1,
                yoyo: true,

                delay: index * 0.2,
            });

            animations.push(animation);
        });

        return () => {
            animations.forEach((animation) => animation.kill());
        };
    }, {
        scope: containerRef,
        dependencies: [isMobile],
    });

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current || isMobile) return;

        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;

        const x = (clientX / innerWidth - 0.5) * 2;
        const y = (clientY / innerHeight - 0.5) * 2;

        imageRefs.current.forEach((img, index) => {
            if (!img) return;
            const speed = photos[index].speed;

            gsap.to(img, {
                x: x * 85 * speed,
                y: y * 85 * speed,
                ease: "power2.out",
                duration: 0.8,
                overwrite: "auto",
            });
        });
    };

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative w-full h-screen m:h-fit overflow-hidden bg-black select-none"
        >
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none z-0 px-4">
                <h1 className="text-white text-3xl md:text-5xl font-medium tracking-wide mb-2">
                    Books Gallery
                </h1>
            </div>

            <div className="absolute inset-0 w-full h-full z-10 pointer-events-none">
                {photos.map((photo, i) => (
                    <div
                        key={photo.id}
                        ref={(el) => {
                            if (el) imageRefs.current[i] = el;
                        }}
                        className={`absolute ${photo.width} ${photo.aspect} pointer-events-auto bg-neutral-900 overflow-hidden shadow-xl transition-shadow duration-300 hover:shadow-white/5 hover:z-50`}
                        style={
                            isMobile
                                ? {
                                    top: "50%",
                                    left: "50%",
                                }
                                : {
                                    top: photo.top,
                                    bottom: photo.bottom,
                                    left: photo.left,
                                }}>
                        <Image
                            src={photo.src}
                            alt={photo.alt}
                            fill
                            sizes="(max-width: 600px) 200px, 300px"
                            className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700 ease-out"
                            priority={i < 4}
                        />
                    </div>
                )
                )}
            </div>
        </div >
    );
}
