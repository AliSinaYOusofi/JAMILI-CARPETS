import { carpetCategories } from "@/carpet categories/carpetCategories";
import { useNextContext } from "@/Context/appContext";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { FaFacebook, FaPinterest, FaWhatsapp } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
export interface CarpetCategory {
    name: string;
    images: string[];
    price: number;
    description: string;
}

const QuickViewOfProduct: React.FC<{ name: string }> = ({ name }) => {
    
    const message = `I%20Want%20To%20Buy%20${name}%20Carpet`
    const { theme } = useNextContext();
    const [currentCarpet, setCurrentCarpet] = useState<CarpetCategory[]>([])
    const [currentImage, setCurrentImage] = useState<string>("")

    const themeClasses = theme
    ? 'hover:border-gray-100 transition-all transition hover:bg-gray-200 text-gray-900 hover:-translate-y-2'
    : 'hover:border-gray-700 transition-all transition hover:bg-gray-800 text-gray-100 hover:-translate-y-2';

    useEffect( () => {
        const carpet = carpetCategories.filter( item => item.name == name)
        console.log(carpet, 'the carpet')
        setCurrentCarpet(carpet)
        setCurrentImage(carpet[0].images[0])
        return () => {
            setCurrentCarpet([])
        }
    }, [name])

    const addToFavorites = () : void => {
        
        // const storedFavorites = localStorage.getItem('favorites');

        // const favorites: string[] = storedFavorites ? JSON.parse(storedFavorites) : [];

        
        // if (!favorites.includes(name)) {
        //     favorites.push(name);

            
        //     localStorage.setItem('favorites', JSON.stringify(favorites));

        //     toast.success("Added to your favourites")
        // } else {
        //     // remove from favourites
        //     favorites.splice(favorites.indexOf(name), 1);
        //     toast.error("Already in your favourites")
        // }
    };

    return (
        <section
            className={`py-8 rounded-md  md:py-16 antialiased ${theme ? "bg-white" : "bg-gray-800"} ${theme ? "text-gray-900" : "text-gray-100"}`}
        >
            <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
                    <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
                        <Image
                            className={` ${theme ? "block" : "hidden"} object-contain`}
                            src={currentImage}
                            alt=""
                            width={"300"}
                            height={"300"}
                            priority={true}
                        />
                    </div>

                    <div className="mt-6 sm:mt-8 lg:mt-0">
                        <h1
                        className={`text-xl font-semibold  sm:text-2xl`}
                        >
                            {name}
                        </h1>
                        <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                        <p
                            className={`text-2xl font-extrabold  sm:text-3xl`}
                        >
                            ${currentCarpet.length > 0 ? currentCarpet[0].price : ""}
                        </p>

                        <div className="flex items-center gap-2 mt-2 sm:mt-0">
                            <div className="flex items-center gap-1">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <svg
                                key={index}
                                className="w-4 h-4 text-yellow-300"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                >
                                <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                                </svg>
                            ))}
                            </div>
                            <p
                            className={`text-sm font-medium leading-none `}
                            >
                            (5.0)
                            </p>

                            
                            {/* <a
                            href="#"
                            className={`text-sm font-medium leading-none underline hover:no-underline `}
                            >
                            345 Reviews
                            </a> */}
                        </div>
                        </div>

                        <div className={`flex  mt-10 mb-10 sm:mb-0 sm:items-center sm:justify-center md:items-start md:justify-start lg:items-start lg:justify-start gap-x-10`}>
                
                                <Link href={`http://m.me/JamiliCarpet/?text=I%20Want%20To%20Buy%20${name}%20Carpet`} className={`p-2 rounded-lg flex items-center border border-gray-300 justify-center transition-all duration-500 ${themeClasses}`}>
                                    <FaFacebook size={30}/>
                                </Link>

                                <Link href={`https://wa.me/+93777697777?text=I%20Want%20To%20Buy%20${name}%20Carpet`} className={`p-2 rounded-lg flex items-center border border-gray-300 justify-center transition-all duration-500 ${themeClasses}`}>
                                    <FaWhatsapp size={30}/>
                                </Link>

                                <Link href="https://www.instagram.com/jamili_carpets" className={`p-2 rounded-lg flex items-center border border-gray-300 justify-center transition-all duration-500 ${themeClasses}`}>
                                    <PiInstagramLogoFill size={30}/>
                                </Link>

                                <Link 
                                    href={`https://ph.pinterest.com/JamiliCarpets/`} 
                                    className={`p-2 rounded-lg flex items-center border border-gray-300 justify-center transition-all duration-500 ${themeClasses}`}
                                >
                                    <FaPinterest size={30}/>
                                </Link>
                            </div>

                        <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                        
                        {/* <button
                            title="Add to favorites"
                            className={`flex items-center justify-center py-2.5 px-5 text-sm font-medium focus:outline-none rounded-lg border hover:bg-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700`
                            }
                            onClick={addToFavorites}
                            role="button"
                        >
                            <svg
                                className="w-5 h-5 -ms-2 me-2"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                            />
                            </svg>
                            Add to favorites
                        </button> */}

                        {/* <a
                            href="#"
                            title="Add to cart"
                            className={`mt-4 sm:mt-0 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 flex items-center justify-center`}
                            role="button"
                        >
                            <svg
                            className="w-5 h-5 -ms-2 me-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                            >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                            />
                            </svg>
                            Add to cart
                        </a> */}
                        </div>

                        <hr className="my-6 md:my-8 " />

                        <p
                        className={``}
                        >
                            {currentCarpet.length > 0 ? currentCarpet[0].description : ""}
                        </p>
                        <div className="flex items-start gap-4 justify-start flex-wrap mt-5">
                            {
                                currentCarpet.length > 0
                                ?
                                currentCarpet[0].images.map( (item, index) => (
                                    <Image
                                        key={index}
                                        className="w-20 cursor-pointer  h-20 rounded-sm"
                                        src={item}
                                        alt=""
                                        width={50}
                                        height={50}
                                        onClick={() => setCurrentImage(item)}
                                    />
                                ))
                                :
                                null
                            }
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default QuickViewOfProduct;
