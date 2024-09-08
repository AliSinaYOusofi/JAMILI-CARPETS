import Image from 'next/image'
import React from 'react'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-5">
                <div>
                    <a className="flex-none text-xl font-semibold text-black focus:outline-none" href="#" aria-label="Brand">
                        <Image
                            src="/images/logo jamili.png"
                            alt="logo here"
                            width={70}
                            height={70}
                        />
                    </a>
                </div>

                <ul className="text-center">
                    <li className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300">
                        <a className="inline-flex gap-x-2 text-sm text-gray-500 hover:text-gray-800 focus:outline-none focus:text-gray-800" href="/">
                            Home
                        </a>
                    </li>
                    <li className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300">
                        <a className="inline-flex gap-x-2 text-sm text-gray-500 hover:text-gray-800 focus:outline-none focus:text-gray-800" href="/collection">
                            Collection
                        </a>
                    </li>
                    <li className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300">
                        <a className="inline-flex gap-x-2 text-sm text-gray-500 hover:text-gray-800 focus:outline-none focus:text-gray-800" href="/favourites">
                            Favourites
                        </a>
                    </li>
                </ul>

                <div className="flex justify-center space-x-6">
                    <a href="https://www.facebook.com/JamiliCarpet" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <FaFacebook className="text-gray-500 hover:text-gray-800" size={24} />
                    </a>
                    <a href="https://www.instagram.com/jamili_carpets" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <FaInstagram className="text-gray-500 hover:text-gray-800" size={24} />
                    </a>
                    <a href="https://wa.me/+93777697777" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                        <FaWhatsapp className="text-gray-500 hover:text-gray-800" size={24} />
                    </a>
                </div>
            </div>
        </footer>
    )
}
