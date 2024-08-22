import { useNextContext } from '@/Context/appContext';
import { getThemeStyles } from '@/Global/themesStyle';
import React from 'react';

interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = () => {
    const { theme } = useNextContext();
    const style = getThemeStyles(theme);

    return (
        <div className={`max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 ${style.backgroundColor}`}>
            <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
                <div className="lg:col-span-3">
                    <h1 className={`block text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl ${style.textColor}`}>
                        Luxurious hand-woven carpets 
                    </h1>
                    <p className={`mt-3 text-lg ${style.textColor}`}>
                        Introducing a new way for your brand to reach the creative community.
                    </p>

                    <div className="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
                        <div className="w-full sm:w-auto">
                            <label htmlFor="hero-input" className="sr-only">Search</label>
                            <input
                                type="text"
                                id="hero-input"
                                name="hero-input"
                                className={`py-3 px-4 block w-full min-w-80 border-gray-200 rounded-md text-sm  ${style.textColor} disabled:opacity-50 disabled:pointer-events-none`}
                                placeholder="Enter work email"
                            />
                        </div>
                        <a
                            className={`w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent  disabled:opacity-50 disabled:pointer-events-none`}
                            href="#"
                        >
                            Request demo
                        </a>
                    </div>
                </div>

                <div className="lg:col-span-4 mt-10 lg:mt-0">
                    <img
                        className="w-full rounded-xl"
                        src="https://images.unsplash.com/photo-1665686376173-ada7a0031a85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=700&q=80"
                        alt="Hero Image"
                    />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
