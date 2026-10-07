"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#0A0A0A]/70 border-b border-gray-800">
            <div className="max-w-7xl mx-2 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <Link href="/" className="text-xl  mx-4 font-bold tracking-tight text-white hover:text-blue-400 transition-colors">
                    Om<span className="text-blue-500">.Shrestha</span>
                </Link>
                <div className="flex items-center space-x-4 text-sm font-medium text-gray-400">
                    {pathname !== "/about" && (
                        <Link href="/about" className="hover:text-white transition-colors">
                            More About Me...
                        </Link>
                    )}
                    <Link href="/#contact" className="hover:text-white transition-colors">Contact</Link>
                </div>
            </div>
        </nav>
    );
}
