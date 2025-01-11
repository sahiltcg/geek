import Image from "next/image";
import Head from "next/head";
import Script from "next/script";

export default function Home() {
  return (
    <>
    {/* <Script onload="{}"></Script> */}
    <div className="flex items-center justify-center h-screen bg-slate-900">
      <h1 className="text-center text-sky-400 text-2xl self-center">I'm building this NextJS App</h1>
    </div>
    </>
  );
}
