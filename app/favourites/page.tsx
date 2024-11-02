"use client"
import { carpetCategories, CarpetCategory } from "@/carpet categories/carpetCategories"
import Footer from "@/components/Footer"
import { useNextContext } from "@/Context/appContext"
import Categories from "@/util components/Categories"
import { useEffect, useState } from "react"
import toast, { Toaster } from "react-hot-toast"

export default function page () {

    const [favourites, setFavourites] = useState<CarpetCategory[] | null>()
    const {theme} = useNextContext()

    useEffect ( () => {
        const fetchFavourites = () => {
            
            try {
                const favsLocalStorage  = localStorage.getItem("favorites")
                const favCarpets = favsLocalStorage ? JSON.parse(favsLocalStorage) : [];

                // filter favourites based carpetCategories
                const filteredFavourites = carpetCategories.filter(carpet => favCarpets.includes(carpet.name))
                setFavourites(filteredFavourites)
                console.log(filteredFavourites)
            } 
            
            catch (error) {
                console.error("Failed to fetch favourites")
                toast.error("Failed to fetch favourites")
            }
        }

        fetchFavourites()
    }, [favourites])

    if ( ! favourites) {
        <div className="flex items-center justify-center min-h-screen ">
                <div role="status" className="text-center">
                    <svg 
                        aria-hidden="true" 
                        className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-orange-600" 
                        viewBox="0 0 100 101" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path 
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" 
                            fill="currentColor"
                        />
                        <path 
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" 
                            fill="currentFill"
                        />
                    </svg>
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
    }
    
    return (
        <div className={`${theme ? "bg-gray-100" : "bg-gray-900"} ${!theme ? "text-white" : "text-black"}`}>

            <Toaster 
                toastOptions={{
                success: {
                    style: {
                    backgroundColor: theme ? "white" : "#1F2937"
                    }
                },
                error: {
                    style: {
                    backgroundColor: theme ? "white" : "#1F2937"
                    }
                }
                }}
            />
            <div className="flex  mx-auto max-w-7xl gap-x-10 gap-y-10 justify-center items-center flex-wrap">
                {
                    favourites?.length ?
                    favourites.map( ( item, index ) => {
                        return (
                            <div>
                                
                                <Categories link={item.name} name={item.name} image={item.images[0]}/>
                            </div>
                        )
                    })
                    :
                    <div className="flex flex-col items-center justify-center min-h-screen">
                        <h1> No Favourites Found </h1>
                        <p> Start adding some favourites by clicking on the heart icon on the product page.</p>
                    </div>
                }
            </div>
            <Footer />
        </div>
    )
}