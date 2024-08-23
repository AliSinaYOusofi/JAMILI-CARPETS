import React from 'react';
import { IoIosFlower } from "react-icons/io";
import { RiEmotionHappyLine } from "react-icons/ri";
import { GoPackage } from "react-icons/go";
import { FaMedal } from "react-icons/fa";
import ProudDivDynamic from './ProudDivDynamic';
import { useNextContext } from '@/Context/appContext';
import { getThemeStyles } from '@/Global/themesStyle';

export const proudPartDetails = [
    {
        amount: 444,
        description: "Experience",
        icon: <RiEmotionHappyLine size={30}/>
    },

    {
        amount: 10000,
        description: "Carpets sold",
        icon: <GoPackage size={30}/>
    },

    {
        amount: 40,
        description: "Happy clients",
        icon: <FaMedal size={30}/>
    },

]

const ProudPart: React.FC = () => {

    const {theme} = useNextContext()
    const style = getThemeStyles(theme)

    const flexCenter = " flex items-center justify-between"
    
    return (
        <div className={`${style.backgroundColor} flex px-20 items-center  justify-between ${style.textColor}`}>
            
            
            <div className="flex items-center gap-x-10">
                <IoIosFlower size={50}/>
                <h1 className="text-[40px]"> We are proud Of </h1>
            </div>
            
            <div className={`${flexCenter}`}>

                {
                    proudPartDetails.map( item => {
                        return (
                            <div className="">
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

