import React, { Dispatch, SetStateAction, useRef, useState } from 'react';
import { FiMaximize } from 'react-icons/fi';
import Image from 'next/image'; // Assuming you're using Next.js

interface GoFullScreenProps {
    imagePath: string;
    altText?: string;
    width: number;
    height: number;
    setCurrentImage: Dispatch<SetStateAction<{url: string, alt: string}>>
}

export const heroSectionImageCarousel = [
    
    {
        url: "/images/1628-.jpg",
        alt: "first image",
    },

    {
        url: "/images/hero image.jpg",
        alt: "second image",
    },
    {
        url: "/images/hero.jpg",
        alt: "third image",
    },
    {
        url: "/images/Untitled-1.jpg",
        alt: "foruth image",
    },
]

const GoFullScreen: React.FC<GoFullScreenProps> = ({ imagePath, altText = "Image", width, height, setCurrentImage }) => {
    
    const imageRef = useRef<HTMLImageElement>(null);
    const [isFullScreen, setIsFullScreen] = useState<boolean>(false)

    const handleFullScreen = () => {

        setIsFullScreen(true)

        if (imageRef.current) {
            if (imageRef.current.requestFullscreen) {
                imageRef.current.requestFullscreen();
            } else if ((imageRef.current as any).webkitRequestFullscreen) { /* Safari */
                (imageRef.current as any).webkitRequestFullscreen();
            } else if ((imageRef.current as any).msRequestFullscreen) { /* IE11 */
                (imageRef.current as any).msRequestFullscreen();
            }
        }
    };

    
    return (
        <div className="relative flex flex-row md:flex-col items-center justify-center">

            {
                heroSectionImageCarousel.map( (image) => {
                    return (
                        <div key={image.alt} className=" ml-4 gap-4  ">
                            <Image
                                src={image.url}
                                alt={image.alt}
                                width={70}
                                height={70}
                                className='mt-4 h-20 w-20 md:h-30 cursor-pointer md:w-30 rounded-md'
                                onClick={() => setCurrentImage(image)}
                            />
                        </div>
                    )
                })
            }            
        </div>
    );
};

export default GoFullScreen;
