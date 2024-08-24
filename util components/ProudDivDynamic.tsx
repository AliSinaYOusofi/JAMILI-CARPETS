import { useNextContext } from '@/Context/appContext';
import React from 'react';
import { ReactElement } from 'react';

interface ProudDivDynamicProps {
  amount: string | number;
  description: string;
  icon: ReactElement;
}

const ProudDivDynamic: React.FC<ProudDivDynamicProps> = ({ amount, description, icon }) => {
  const { theme } = useNextContext();

  const containerStyles = !theme ? 'bg-gray-800 text-white' : 'bg-white text-gray-800';
  const descriptionStyles = !theme ? 'text-gray-400' : 'text-gray-500';

  return (
    <div className={`p-6 mx-2 my-2 rounded-lg shadow-md flex items-center gap-x-6 md:gap-x-4 ${containerStyles}`}>
      <div className="flex-shrink-0 text-primary">
        {icon}
      </div>

      <div className="ml-4 flex-1">
        <p className="text-lg sm:text-xl md:text-2xl font-semibold">
          {amount}+
        </p>
        <h3 className={`text-sm sm:text-base md:text-lg font-medium mt-1 ${descriptionStyles}`}>
          {description}
        </h3>
      </div>
    </div>
  );
};

export default ProudDivDynamic;
