import React from 'react';
import { useNextContext } from "@/Context/appContext";
import { getThemeStyles } from "@/Global/themesStyle";
import { ReactElement } from 'react';
import { FaStar } from 'react-icons/fa';
import Image from 'next/image';

interface TestimonialProps {
  comment: string;
  image: string | ReactElement;
  name: string;
  role: string;
  rating: number;
}

const Testimonials: React.FC<TestimonialProps> = ({ comment, image, name, role, rating }) => {
  const { theme } = useNextContext();
  const style = getThemeStyles();

  return (
    <div className={`p-6 rounded-lg shadow-md  ${theme ? "bg-white" : "bg-gray-800"} ${theme ? "text-gray-900" : "text-gray-300"} mx-auto max-w-sm`}>
        
        <p className="text-lg  mb-4">{comment}</p>

        <hr className={`my-4 border-t`} />

        <div className="flex  flex-row items-center justify-between">
            <div className="flex items-center mb-4 sm:mb-0">
                <div className="w-12 h-12 mr-4 rounded-full overflow-hidden">
                    {typeof image === 'string' ? (
                    <Image src={image} alt={name} width={48} height={48} />
                    ) : (
                    image
                    )}
                </div>
                <div>
                    <h4 className="font-bold">{name}</h4>
                    <p className="text-sm">{role}</p>
                </div>
            </div>

            <div className="flex items-center">
                <FaStar className="text-yellow-500 mr-1" />
                <span className="text-lg font-bold">{rating}</span>
            </div>
        </div>
        </div>
    );
};

export default Testimonials;
