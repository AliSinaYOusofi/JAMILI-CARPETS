"use client"
import React, { useState } from 'react'
import { animated } from '@react-spring/web';
import { useSpring } from '@react-spring/web';
import Link from 'next/link';
import Hamburger from 'hamburger-react'
import { useNextContext } from '@/Context/appContext';

type theme = {
    display: boolean
}
export default function Navbar({display} : theme) {

    //Make navbar
    const [navbar, setNavbar] = useState(false);
    
    const {theme, setTheme} = useNextContext();

    return (
        <div>
            Navbar
        </div>
    )
}