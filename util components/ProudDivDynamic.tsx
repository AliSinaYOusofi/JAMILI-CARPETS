import { useNextContext } from '@/Context/appContext';
import { getThemeStyles } from '@/Global/themesStyle';
import React from 'react';
import { ReactElement } from 'react';

interface ProudDivDynamicProps {
  amount: string | number;
  description: string;
  icon: ReactElement;
}

const ProudDivDynamic: React.FC<ProudDivDynamicProps> = ({ amount, description: header, icon }) => {
    
    const  {theme} = useNextContext()
    const style = getThemeStyles(theme)

    return (
        <div className={`${theme ? "bg-whtie" : "bg-gray-600"} p-4 rounded-lg shadow-md flex items-center gap-x-8`}>
            
            <div className="ml-4">
                <h3 className="text-lg font-bold ">{header}</h3>
                <p className="text-xl">{amount}</p>
            </div>

            <div className="flex-shrink-0">
                {icon}
            </div>
        </div>
    );
};

export default ProudDivDynamic;
