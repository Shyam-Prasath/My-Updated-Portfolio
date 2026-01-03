"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HiChevronDown, HiChevronUp, HiSparkles } from "react-icons/hi2";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [openIndex, setOpenIndex] = useState(-1);

  const navbarToggleHandler = () => setNavbarOpen(!navbarOpen);

  const handleStickyNavbar = () => {
    setSticky(window.scrollY >= 80);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => window.removeEventListener("scroll", handleStickyNavbar);
  }, []);

  const handleSubmenu = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const pathname = usePathname();

  return (
    <header
      className={`header left-0 top-0 z-40 flex w-full items-center ${
        sticky
          ? "fixed z-[9999] bg-white/80 shadow-sticky backdrop-blur-sm transition dark:bg-gray-dark dark:shadow-sticky-dark"
          : "absolute bg-transparent"
      }`}
    >
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">

          <div className="w-60 max-w-full px-4 xl:mr-12">
            <Link
              href="/"
              className={`header-logo flex items-center gap-3 w-full ${
                sticky ? "py-5 lg:py-2" : "py-8"
              }`}
            >
              <span
                className="
                  shrink-0 flex h-10 w-10 items-center justify-center rounded-lg
                  bg-gradient-to-br from-violet-600 to-indigo-600
                  text-white shadow-md
                  transition-transform duration-300 hover:scale-105
                  dark:from-sky-500 dark:to-cyan-500
                "
              >
                <HiSparkles className="text-xl" />
              </span>

              <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white whitespace-nowrap">
                Shyam <span className="ml-1">Prasath</span>
              </span>
            </Link>
          </div>

          <div className="flex w-full items-center justify-between px-4">
            <div>
              <button
                onClick={navbarToggleHandler}
                aria-label="Mobile Menu"
                className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
              >
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                    navbarOpen ? "top-[7px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                    navbarOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                    navbarOpen ? "top-[-8px] -rotate-45" : ""
                  }`}
                />
              </button>

              <nav
                className={`navbar absolute right-0 z-30 w-[250px] rounded
                  border border-body-color/50 bg-white px-6 py-4 duration-300
                  dark:bg-black dark:border-body-color/20
                  lg:visible lg:static lg:w-auto lg:border-none
                  lg:bg-transparent lg:dark:bg-transparent
                  lg:p-0 lg:opacity-100
                  ${
                    navbarOpen
                      ? "visible top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }
                `}
              >
                <ul className="block lg:flex lg:space-x-12">
                  {menuData.map((menuItem, index) => (
                    <li key={index} className="group relative">
                      {menuItem.path ? (
                        <Link
                          href={menuItem.path}
                          className={`flex py-2 text-base lg:inline-flex lg:px-0 lg:py-6 ${
                            pathname === menuItem.path
                              ? "text-primary dark:text-white"
                              : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                          }`}
                        >
                          {menuItem.title}
                        </Link>
                      ) : (
                        <>
                          <p
                            onClick={() => handleSubmenu(index)}
                            className="flex cursor-pointer items-center gap-2 py-2 text-base text-dark
                              group-hover:text-primary
                              dark:text-white/70 dark:group-hover:text-white
                              lg:inline-flex lg:px-0 lg:py-6"
                          >
                            {menuItem.title}
                            <span className="text-lg">
                              {openIndex === index ? (
                                <HiChevronUp />
                              ) : (
                                <HiChevronDown />
                              )}
                            </span>
                          </p>

                          <div
                            className={`
                              ${openIndex === index ? "block" : "hidden"}
                              lg:block lg:invisible lg:opacity-0
                              lg:absolute lg:left-0 lg:top-[90%]
                              lg:w-[250px] lg:p-4 lg:shadow-lg
                              lg:bg-white lg:dark:bg-dark
                              lg:group-hover:visible lg:group-hover:opacity-100
                            `}
                          >
                            {menuItem.submenu.map((submenuItem, subIndex) => (
                              <Link
                                key={subIndex}
                                href={submenuItem.path}
                                className="block rounded py-2.5 text-sm text-dark hover:text-primary dark:text-white/70 dark:hover:text-white lg:px-3"
                              >
                                {submenuItem.title}
                              </Link>
                            ))}
                          </div>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="flex items-center justify-end pr-16 lg:pr-0">
              <ThemeToggler />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
