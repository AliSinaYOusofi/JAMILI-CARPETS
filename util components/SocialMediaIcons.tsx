import { useNextContext } from '@/Context/appContext';
import { getThemeStyles } from '@/Global/themesStyle';
import Link from 'next/link';
import React from 'react';
import { FaFacebook } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaPinterest } from "react-icons/fa6";
interface SocialMediaIconsProps {
    carpet_name: string,
    carpet_image: string
}

const SocialMediaIcons: React.FC<SocialMediaIconsProps> = ({ carpet_name, carpet_image }) => {
    const { theme } = useNextContext();
    const style = getThemeStyles();
    const themeClasses = theme
        ? 'hover:border-gray-100 transition-all transition hover:bg-gray-200 text-gray-900 hover:-translate-y-2'
        : 'hover:border-gray-700 transition-all transition hover:bg-gray-800 text-gray-100 hover:-translate-y-2';

    // URL encoding the carpet_name and carpet_image
    const encodedCarpetName = encodeURIComponent(carpet_name);
    const encodedCarpetImage = encodeURIComponent(carpet_image);

    return (
        <>
            <h1 className={`${style.textColor} lg:text-3xl text-2xl font-extrabold mb-4`}>Our social media</h1>
            
            <div className={`${style.textColor} flex mt-10 mb-10 sm:mb-0 sm:items-center sm:justify-center md:items-start md:justify-start lg:items-start lg:justify-start gap-x-10`}>
                <Link 
                    href={`https://m.facebook.com/JamiliCarpet/`} 
                    className={`p-2 rounded-lg flex items-center border border-gray-300 justify-center transition-all duration-500 ${themeClasses}`}
                >
                    <FaFacebook size={30} />
                </Link>

                <Link 
                    href={`https://wa.me/+93777697777`} 
                    className={`p-2 rounded-lg flex items-center border border-gray-300 justify-center transition-all duration-500 ${themeClasses}`}
                >
                    <FaWhatsapp size={30} />
                </Link>

                <Link 
                    href={`https://www.instagram.com/jamili_carpets`} 
                    className={`p-2 rounded-lg flex items-center border border-gray-300 justify-center transition-all duration-500 ${themeClasses}`}
                >
                    <PiInstagramLogoFill size={30} />
                </Link>
                
                <Link 
                    href={`https://ph.pinterest.com/JamiliCarpets/`} 
                    className={`p-2 rounded-lg flex items-center border border-gray-300 justify-center transition-all duration-500 ${themeClasses}`}
                >
                    <FaPinterest size={30}/>
                </Link>
            </div>
        </>
    );
};

export default SocialMediaIcons;
