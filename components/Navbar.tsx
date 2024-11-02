import { useNextContext } from "@/Context/appContext";
import { getThemeStyles } from "@/Global/themesStyle";
import { useSpring, animated } from "@react-spring/web";
import Hamburger from "hamburger-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaHome, FaThLarge, FaBoxes, FaPhoneAlt, FaHeart } from "react-icons/fa";

const Navbar: React.FC = () => {

    const { theme, setTheme } = useNextContext()
    const [isOpen, setOpen] = useState(false)
    const style = getThemeStyles()
    
    const toggleTheme = () => {
        // instead save it the current theme to localStorage
        localStorage.setItem("theme", JSON.stringify(!theme));
        
        const currentTheme: string | null = localStorage.getItem("theme")
        
        setTheme(prev => ! prev)
    };
    

    useEffect( () => {
        const currentTheme : string | null = localStorage.getItem('theme')
        if(currentTheme){
            setTheme(JSON.parse(currentTheme))
        } else {
            localStorage.setItem('theme', JSON.stringify(theme))

        }
    }, [])

    return (
        <div className="flex flex-wrap ">
            
        <section className="relative mx-auto">
            
                {/* navbar */}
                <nav className={`flex ${theme ? "bg-gray-100" : "bg-gray-900"} ${!theme ? "text-white" : "text-black"}  justify-between  w-screen`}>
            
                <div className="px-5 xl:px-12 py-6 flex w-full items-center">
                    <Link className="text-3xl font-bold font-heading" href="#">
                        <Image
                            src="/images/logo jamili.png"
                            alt="logo here"
                            width={70}
                            height={70}
                        />
                    </Link>
                    {/* Nav Links */}
                    <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                        <li className="group">
                            <a className={`relative  hover:${style.textColor}`} href="/">
                                Home
                                <span className="block h-0.5 w-0 bg-gray-400 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                            </a>
                        </li>
                        <li className="group">
                            <a className={`relative hover:${style.textColor}`} href="/collection">
                                Categories
                                <span className="block h-0.5 w-0 bg-gray-400 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                            </a>
                        </li>
                        <li className="group">
                            <a className={`relative hover:${style.textColor}`} href="/favourites">
                                Favourites
                                <span className="block h-0.5 w-0 bg-gray-400 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                            </a>
                        </li>
                        {/* <li className="group">
                            <a className={`relative hover:${style.textColor}`} href="#">
                                Contact Us
                                <span className={"block h-0.5 w-0 bg-gray-400 group-hover:w-full transition-all duration-300 ease-in-out"}></span>
                            </a>
                        </li> */}
                    </ul>

                    {/* Header Icons */}
                    <div className="hidden xl:flex items-center space-x-5">
                        <a className="hover:text-gray-200" href="/favourites">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            />
                            </svg>
                        </a>
                       
                        {/* Sign In / Register */}
                        

                        <div className=" flex mr-6 items-center" onClick={toggleTheme}>
                            {
                                theme
                                
                                ?
                                <button className="">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                                    </svg>
                                </button>
                                :
                                <button className="">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                                    </svg>
                                </button>
                            }
                        </div>
                    </div>

                    
                </div>
                {/* Responsive navbar */}
                <a className="xl:hidden flex mr-6 items-center" href="#">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 hover:text-gray-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                    </svg>
                    <span className="flex absolute -mt-5 ml-4">
                    <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
                    </span>
                </a>

                <div className="xl:hidden flex mr-6 items-center" onClick={toggleTheme}>
                    {
                        theme
                        
                        ?
                        <button className="">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                            </svg>
                        </button>
                        :
                        <button className="">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                            </svg>
                        </button>
                    }
                </div>

                <div>
                    {

                    }
                </div>
                
                <div className="xl:hidden flex mr-6 items-center">

                    <Hamburger size={24} toggled={isOpen} toggle={setOpen} />
                </div>

                </nav>
            </section>

            <div className={` ${style.textColor} w-full`}>
                {
                    isOpen && <MobileNav open={isOpen}/>
                }
            </div>
        </div>
    );
};

interface MobileNavProps {
    open: boolean
}

const MobileNav: React.FC<MobileNavProps> = ({ open }) => {
    
    const navAnimation = useSpring({
        transform: open ? 'translateX(0)' : 'translateX(-100%)',
        opacity: open ? 1 : 0,
        config: { tension: 120, friction: 14 }, // Adjusted for a smoother and more natural animation
    });
  
    const { theme } = useNextContext();
    const style = getThemeStyles();
  
    const iconHover = 'transition-transform duration-300 group-hover:-translate-y-1';
  
    return (
        <animated.ul
            style={navAnimation}
            className="xl:hidden w-full gap-y-6 text-center text-3xl flex flex-col justify-center mb-10 divide-gray-400 items-center px-4 mx-auto font-semibold font-heading space-y-4"
        >
            {[
            { href: '/', icon: FaHome, text: 'Home' },
            { href: '/collection', icon: FaThLarge, text: 'Category' },
            { href: '/collections', icon: FaBoxes, text: 'Collections' },
            { href: '/favourites', icon: FaHeart, text: 'Favourites' },
            // { href: '#', icon: FaPhoneAlt, text: 'Contact Us' },
            ].map(({ href, icon: Icon, text }, index) => (
            <li className="w-full mt-4" key={index}>
                <a
                className={`flex rounded-full group items-center justify-center gap-2 py-2 w-full ${style.hoverOnNavItemsMobile}`}
                href={href}
                >
                    <Icon className={iconHover} />
                    {text}
                </a>
            </li>
            ))}
        </animated.ul>
    );
};
  
export default Navbar;
