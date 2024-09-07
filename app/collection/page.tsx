"use client"
import ShopByCategories from '@/components/ShopByCategories'
import { useNextContext } from '@/Context/appContext'
import React from 'react'
import { Toaster } from 'react-hot-toast'

export default function page() {

    const { theme } = useNextContext()
    return (
        <>
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
        </>
    )
}
