'use client'
import Link from "next/link"
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";


// import { useRouter } from 'next/router';

const Header = () => {
    const [pathName, setName] = useState(usePathname());

    const links = [
        {
            index:1,
            href: '/',
            text: 'Home',
        },
        {
            index:2,
            href: '/features',
            text: 'Features',
        },
        {
            index:3,
            href: '/contact',
            text: 'Contact',
        },
    ];

    function handleClick() {
        setName(usePathname())
        console.log(pathName);
    }

    return (

        <header className="mb-auto">
            <h3 className="float-md-start mb-0"><Link href="/"><img src='Text_2x.png' /></Link></h3>
            <nav className="nav nav-masthead justify-content-center float-md-end">
                {links.map((link) => (
                    <Link key={link.index} className={`nav-link fw-bold py-1 px-0 ${pathName == link.href && "active"}`} href={link.href} onClick={handleClick}>
                        {link.text}
                    </Link>
                ))}
            </nav>
        </header >

    );
};

export default Header;

// export default function Header({ }) {


//     return (
//         
//     )
// }