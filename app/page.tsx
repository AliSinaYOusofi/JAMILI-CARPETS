"use client"
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ShopByCategories from "@/components/ShopByCategories";
import WhyJamiliCarptes from "@/components/WhyJamiliCarptes";
import { useNextContext } from "@/Context/appContext";
import { getThemeStyles } from "@/Global/themesStyle";
import ProudPart from "@/util components/ProudPart";
import Testimonials from "@/util components/Testimonials";
import Image from "next/image";
import { useEffect } from "react";

const testi = [
  {
    comment: "This carpet is phenomenal! It has transformed the look and feel of our living room significantly.",
    image: "https://img.freepik.com/free-psd/3d-illustration-business-man-with-glasses_23-2149436194.jpg?size=626&ext=jpg",
    name: "Alice Johnson",
    role: "Homeowner",
    rating: 5,
  },
  {
    comment: "Great customer support and reliable service. I highly recommend this carpet company.",
    image: "https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833554.jpg?size=626&ext=jpg",
    name: "Michael Davis",
    role: "Interior Designer",
    rating: 4.5,
  },
  {
    comment: "Using this carpet has been a game-changer for our hotel. Worth every penny!",
    image: "https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436191.jpg?size=626&ext=jpg",
    name: "Sara Wilson",
    role: "Hotel Manager",
    rating: 5,
  },
  {
    comment: "The carpet styles are exactly what I was looking for. The texture is soft and easy to clean.",
    image: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg?size=626&ext=jpg",
    name: "James Smith",
    role: "Homeowner",
    rating: 4,
  },
  {
    comment: "I love how responsive the team is. They really listen to feedback and offer great carpet care advice.",
    image: "https://img.freepik.com/free-psd/3d-illustration-with-online-avatar_23-2151303097.jpg?size=626&ext=jpg",
    name: "Emily Brown",
    role: "Real Estate Agent",
    rating: 4.5,
  },
  {
    comment: "This carpet has helped reduce noise in our office and improved the overall ambiance.",
    image: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg",
    name: "David Lee",
    role: "Office Manager",
    rating: 5,
  },
];


import toast, { Toaster } from 'react-hot-toast';

export default function Home() {

  const { theme, setTheme } = useNextContext()
  const style = getThemeStyles()

  // fetch the current theme from localStorage

  return (
    <div className={`${theme ? "bg-gray-100" : "bg-gray-900"} ${!theme ? "text-white" : "text-black"}`}>
      <Toaster 
        toastOptions={{
          success: {
            style: {
              backgroundColor: theme ? "white" : "#1F2937"
            }
          },
          error: {
            style: {
              backgroundColor: theme ? "white" : "#1F2937"
            }
          }
        }}
      />
      <Navbar />
      <HeroSection />
      <ProudPart />
      <WhyJamiliCarptes />

      <ShopByCategories text={false}/>
      
      <h1 className="text-3xl sm:text-4xl  lg:text-5xl font-bold text-center mb-8 mt-20">
        What Our Happy Customers Say
      </h1>

      <div className="flex flex-wrap max-w-7xl mx-auto flex-col md:flex-row lg:flex-row mt-20 gap-y-10">
        {
          testi.map((item, index) => {
            return (
              <Testimonials key={index} {...item} />
            )
          })
        }
      </div>

      <Footer />
    </div>
  );
}
