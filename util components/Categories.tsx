import QuickViewOfProduct from '@/components/QuickViewofProduct';
import { useNextContext } from '@/Context/appContext';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { IoIosClose } from "react-icons/io";

interface CategoriesProps {
  image: string;
  name: string;
  link: string;
}

const Categories: React.FC<CategoriesProps> = ({ image, name, link }) => {

    const [isHovered, setIsHovered] = useState(false);
    const [showQuickView, setShowQuickView] = useState<boolean>(false);
    const { theme } = useNextContext()

    const toggleQuickView = (): void => {
        setShowQuickView(!showQuickView);
    };

    return (
        <>
            <div
                className="relative inline-block"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Link href={`/collection/${name}`} className="block">
                    <Image
                        src={image}
                        alt={name}
                        width={400}
                        height={400}
                        priority={true}
                        className={`w-[400px] h-[300px] object-cover rounded-md transition duration-300 ease-in-out ${
                        isHovered ? 'blur-[1px]' : ''
                        }`}
                    />
                    <span className="absolute top-2 right-2 bg-white text-black px-2 py-1 text-sm font-semibold rounded">
                        {name}
                    </span>
                </Link>

                
                <button onClick={toggleQuickView} className="group mt-4 relative h-12 overflow-hidden w-full rounded-sm bg-white text-lg shadow">
                    <div className="absolute inset-0 w-3 bg-orange-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                    <span className="relative text-black group-hover:text-white">Quick View</span>
                </button>
                
            </div>

            {showQuickView && (
            <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto">
                {/* Background Overlay */}
                <div
                    className="fixed inset-0 bg-black opacity-50"
                    onClick={toggleQuickView}
                ></div>

                <div className="relative  p-4 py-10 rounded-lg shadow-lg w-full max-w-7xl mx-4 sm:mx-auto overflow-y-auto max-h-[90vh]">
                    <button
                        onClick={toggleQuickView}
                        className="absolute top-10 right-4 text-gray-600 text-xl"
                    >
                        <IoIosClose size={40} />
                    </button>

                    <QuickViewOfProduct name={name}  />
                </div>
            </div>
        )}



        </>
    );
};

export default Categories;
