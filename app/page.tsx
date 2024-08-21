"use client"
import Navbar from "@/components/Navbar";
import { useNextContext } from "@/Context/appContext";
import Image from "next/image";

export default function Home() {
  const { theme } = useNextContext()
  
  return (
    <>
      <Navbar display={true}/>
    </>
  );
}
