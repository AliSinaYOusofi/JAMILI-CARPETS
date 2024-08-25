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

export const testimonials = [
  {
    comment: "This product is phenomenal! It has boosted our team's productivity significantly.",
    image: "https://img.freepik.com/free-psd/3d-illustration-business-man-with-glasses_23-2149436194.jpg?size=626&ext=jpg",
    name: "Alice Johnson",
    role: "Team Lead",
    rating: 5,
  },
  {
    comment: "Great customer support and reliable service. I highly recommend this company.",
    image: "https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833554.jpg?size=626&ext=jpg",
    name: "Michael Davis",
    role: "Project Manager",
    rating: 4.5,
  },
  {
    comment: "Using this service has been a game-changer for our business. Worth every penny!",
    image: "https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436191.jpg?size=626&ext=jpg",
    name: "Sara Wilson",
    role: "Business Analyst",
    rating: 5,
  },
  {
    comment: "The features are exactly what I was looking for. The interface is intuitive and easy to use.",
    image: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg?size=626&ext=jpg",
    name: "James Smith",
    role: "Product Designer",
    rating: 4,
  },

  {
    comment: "I love how responsive the team is. They really listen to feedback and make improvements.",
    image: "https://img.freepik.com/free-psd/3d-illustration-with-online-avatar_23-2151303097.jpg?size=626&ext=jpg",
    name: "Emily Brown",
    role: "UX Researcher",
    rating: 4.5,
  },
  
  {
    comment: "This tool has helped streamline our workflows and improved efficiency across the board.",
    image: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg",
    name: "David Lee",
    role: "Operations Manager",
    rating: 5,
  },
];

export default function Home() {
  const { theme } = useNextContext()
  const style = getThemeStyles()

  return (
    <div className={`${theme ? "bg-gray-100" : "bg-gray-900"} ${!theme ? "text-white" : "text-black"}`}>
      <Navbar />
      <HeroSection />
      <ProudPart />
      <WhyJamiliCarptes />

      <ShopByCategories />
      
      <h1 className="text-3xl sm:text-4xl  lg:text-5xl font-bold text-center mb-8 mt-20">
        What Our Happy Customers Say
      </h1>

      <div className="flex flex-wrap max-w-7xl mx-auto flex-col md:flex-row lg:flex-row mt-20 gap-y-10">
        {
          testimonials.map((item, index) => {
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
