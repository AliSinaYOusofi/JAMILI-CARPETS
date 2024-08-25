import React from "react";
import Image from "next/image";
import { useNextContext } from "@/Context/appContext";
import { FaLeaf, FaHandHoldingHeart, FaPalette, FaRecycle } from "react-icons/fa"; // Example icons

const WhyJamiliCarptes: React.FC = () => {
  const { theme } = useNextContext();

  return (
    <div className="max-w-7xl mx-auto mt-20 px-4 sm:px-6 lg:px-8">
      <div
        className={`flex w-full mx-auto flex-col md:flex-row items-center md:items-start p-6 gap-8 rounded-lg shadow-lg ${theme ? "bg-white" : "bg-gray-800"} ${theme ? "text-gray-900" : "text-gray-100"}`}
      >
        <div className="flex-shrink-0">
          <Image
            src="/images/why.jpg" // Replace with your image path
            alt="Jamili Carpets"
            width={400}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>

        <div className="flex flex-col justify-between h-full flex-grow md:ml-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 ">
            Why Choose Jamili Carpets?
          </h2>
          <div className="space-y-4">
            <div className="text-lg sm:text-xl md:text-2xl">
              <div className="flex items-center">
                <FaLeaf size={40} className="text-green-500 mr-3" /> 
                <span className="font-semibold">1. High Quality Materials:</span>
              </div>
              <p className="pl-12 text-xl text-gray-300">Our carpets are made from the finest materials, ensuring durability and luxury.</p>
            </div>

            <div className="text-lg sm:text-xl md:text-2xl">
              <div className="flex items-center">
                <FaHandHoldingHeart size={40} className="text-red-500 mr-3" />
                <span className="font-semibold">2. Hand-Woven:</span>
              </div>
              <p className="pl-12 text-xl text-gray-300">Each carpet is meticulously hand-woven by skilled artisans.</p>
            </div>

            <div className="text-lg sm:text-xl md:text-2xl">
              <div className="flex items-center">
                <FaPalette size={40} className="text-blue-500 mr-3" />
                <span className="font-semibold">3. Unique Designs:</span>
              </div>
              <p className="pl-12 text-xl text-gray-300">Our designs are unique and exclusive, blending traditional techniques with modern aesthetics.</p>
            </div>

            <div className="text-lg sm:text-xl md:text-2xl">
              <div className="flex items-center">
                <FaRecycle size={40} className="text-green-500 mr-3" />
                <span className="font-semibold">4. Sustainability:</span>
              </div>
              <p className="pl-12 text-xl text-gray-300">We use sustainable practices in our manufacturing process, ensuring minimal environmental impact.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyJamiliCarptes;
