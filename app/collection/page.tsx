"use client"
import ShopByCategories from '@/components/ShopByCategories'
import { useNextContext } from '@/Context/appContext'
import React, { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'

export default function page() {

    const { theme, setTheme } = useNextContext()
    
    useEffect(() => {
    
        const savedTheme = localStorage.getItem("theme");
        
        if (savedTheme) {
          setTheme(JSON.parse(savedTheme));
        }
        
    }, []);

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
            <ShopByCategories text={true}/>
        </div>
    )
}
