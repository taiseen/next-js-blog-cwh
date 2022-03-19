import React from 'react'
import Link from 'next/link';

const Navbar = () => {
    
    const links = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Blog", path: "/blog" },
        { name: "Contact", path: "/contact" },
    ]

    return (
        <header className="fixed top-0 left-0 right-0 p-3 bg-gray-100 shadow">
            <nav className="space-x-4 text-center">
                {
                    links.map((goTo, i) => (
                        <Link
                            key={i}
                            href={goTo.path}>
                            <a className="text-xl hover:text-gray-600 hover:underline underline-offset-4 duration-300">{goTo.name}</a>
                        </Link>
                    ))
                }
            </nav>
        </header>
    )
}

export default Navbar