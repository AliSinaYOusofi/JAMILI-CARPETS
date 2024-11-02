import { useNextContext } from "@/Context/appContext";
import { getThemeStyles } from "@/Global/themesStyle";
import GoFullScreen, {
  heroSectionImageCarousel,
} from "@/util components/GoFullScreen";
import SocialMediaIcons from "@/util components/SocialMediaIcons";
import Image from "next/image";
import React, { useState } from "react";

interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = () => {
    const { theme } = useNextContext();
    const style = getThemeStyles();

    const [currentImage, setCurrentImage] = useState(heroSectionImageCarousel[0]);

    return (
        <div
        className={` flex  items-center justify-center ${theme ? "bg-gray-100" : "bg-gray-900"} ${!theme ? "text-white" : "text-black"}`}
        >
        <div className="max-w-[85rem] mb-20 mt-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
            <div className="lg:col-span-3 text-center lg:text-left">
                <h1
                    className={`block text-3xl font-extrabold sm:text-4xl md:text-5xl lg:text-7xl ${style.textColor}`}
                >
                    
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-red-600 to-green-600">Luxurious</span>
                <span>&nbsp; hand-woven </span>
                <span className="text-orange-500">&nbsp; carpets 🇦🇫</span>
                </h1>
                <p className={`mt-3 text-lg ${style.textColor}`}>
                Using only the finest materials, our craftsmen painstakingly weave
                each carpet by hand, employing age-old techniques.
                </p>

                <div className="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3 justify-center">
                
                </div>
                <SocialMediaIcons carpet_name={""} carpet_image={""} />
            </div>

            <div className="lg:col-span-4  relative flex flex-col md:flex-row  justify-center">
                <Image
                    className="rounded-xl h-[600px]"
                    src={currentImage.url}
                    alt={currentImage.alt}
                    width={500}
                    height={500}
                />

                <GoFullScreen
                    imagePath="/images/herosection image.jpg"
                    altText="Hero Image"
                    width={500}
                    height={600}
                    setCurrentImage={setCurrentImage}
                />
            
            </div>

            </div>
        </div>
    </div>
  );
};

export default HeroSection;
