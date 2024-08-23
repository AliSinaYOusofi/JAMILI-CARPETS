"use client"
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import { useNextContext } from "@/Context/appContext";
import ProudPart from "@/util components/ProudPart";
import Image from "next/image";

export default function Home() {
  const { theme } = useNextContext()
  
  return (
    <>
      <Navbar display={true}/>
      <HeroSection />
      <ProudPart />
    </>
  );
}
