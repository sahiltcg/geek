import Image from "next/image";
import Head from "next/head";
import Script from "next/script";

export default function Home() {
  return (
    <>
    {/* <Script onload="{}"></Script> */}
    <div>
    </div>
    <Script
        id="example-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            alert('Hello from Next.js script!');
          `,
        }}
      />
    </>
  );
}
