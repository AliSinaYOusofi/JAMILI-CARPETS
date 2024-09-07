import React from 'react';
import { IoIosFlower } from "react-icons/io";
import { RiEmotionHappyLine } from "react-icons/ri";
import { GoPackage } from "react-icons/go";
import { FaMedal } from "react-icons/fa";
import ProudDivDynamic from './ProudDivDynamic';
import { useNextContext } from '@/Context/appContext';
import { getThemeStyles } from '@/Global/themesStyle';
import { FaM } from 'react-icons/fa6';

export const proudPartDetails = [
    {
        amount: 20,
        description: "Experience",
        icon: <FaMedal size={40}/>
    },

    {
        amount: 10000,
        description: "Carpets sold",
        icon: <GoPackage size={40}/>
    },

    {
        amount: 40,
        description: "Happy clients",
        icon: <RiEmotionHappyLine size={40}/>
    },

]

const ProudPart: React.FC = () => {

    const {theme} = useNextContext()

    const flexCenter = " flex flex-col md:flex-row lg:flex-rwo items-center justify-between"
    
    return (
        <div className={`flex flex-col md:flex-col  md:px-20 py-10 items-center   justify-between ${theme ? "bg-gray-100" : "bg-gray-900"} ${!theme ? "text-white" : "text-black"}`}>
            
            <div className="flex  items-center gap-x-4 font-bold">
                <IoIosFlower className="text-2xl md:text-5xl" size={50}/>
                <h1 className="text-pretty text-bold md:text-5xl text-3xl"> We are proud of </h1>
            </div>
            
            <div className={`${flexCenter} mt-10`}>

                {
                    proudPartDetails.map( item => {
                        return (
                            <div key={item.amount} className="">
                                <ProudDivDynamic
                                    amount={item.amount}
                                    description={item.description}
                                    icon={item.icon}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ProudPart;

