import Image from "next/image";
import Navbar from "@/components/Navbar";
// import Head from "next/head";
// import Script from "next/script";

export default function Home() {
  return (
    <>
    {/* <Script onload="{}"></Script> */}
    <div className="h-screen bg-gray-950">
      <Navbar />
    </div>
    </>
  );
}
