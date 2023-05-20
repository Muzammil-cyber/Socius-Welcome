"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
// import { useRouter } from 'next/router';

const Header = () => {
  const [pathName, setName] = useState(usePathname());
  const [hidden, setHidden] = useState(true);

  const links = [
    {
      index: 1,
      href: "/",
      text: "Home",
    },
    {
      index: 2,
      href: "/features",
      text: "Features",
    },
    {
      index: 3,
      href: "/contact",
      text: "Contact",
    },
  ];

  function HandleClick() {
    setName(usePathname());
    console.log(pathName);
  }
  async function drop(e) {
    e.preventDefault();
    // console.log(e.target.ariaHidden);
    if (e.target.ariaHidden === "true") {
      setHidden(false);
    } else {
      setHidden(true);
    }
  }

  return (
    <header className="sticky top-0">
      <nav className="border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/Logo_1@1x.png"
              className="h-12 mr-3 w-auto"
              alt="Sucious Logo"
              height={500}
              width={500}
            />
            <Image
              height={500}
              width={500}
              className="h-10 w-auto"
              src="/Text_2x.png"
              alt="Text Sucious"
            />
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            onClick={drop}
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden={hidden}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className={`${hidden && "hidden"} w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 nav-masthead">
              {links.map((link) => (
                <li key={link.index}>
                  <Link
                    href={link.href}
                    className={`nav-link block py-2 pl-3 pr-4 md:p-0 ${
                      pathName == link.href && "active"
                    }`}
                    onClick={HandleClick}
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

// export default function Header({ }) {

//     return (
//
//     )
// }
