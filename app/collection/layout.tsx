"use client"
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react'

export default function layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

    return (
        <div>
            <Navbar />
            {children}

        </div>
    )
}
