import React from 'react'
import { carpetCategories } from '@/carpet categories/carpetCategories'
import Categories from '@/util components/Categories'

export default function ShopByCategories() {
    return (
        <div>
            <h1 className="text-3xl sm:text-4xl  lg:text-5xl font-bold text-center mb-8  mt-32">
                Shop By <span className="text-orange-500"> Categories </span>
            </h1>

            <div className="flex mx-auto max-w-7xl gap-x-10 gap-y-10 justify-center items-center flex-wrap">
                {
                    carpetCategories.map( ( item, index ) => {
                        return (
                            <div>
                                <Categories link={item.name} name={item.name} image={item.images[0]}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
