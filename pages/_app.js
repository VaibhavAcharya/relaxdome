import Head from "next/head";
import GoogleFonts from "next-google-fonts";

import "./../styles/tailwind.css";

import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="A short description of this site."
        />

        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        
        <GoogleFonts href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;900&display=swap" />

        <title>Relaxdome</title>
      </Head>
      <div className="font-poppins text-base font-normal px-8 sm:px-32 lg:px-56 py-4 space-y-8">
        <div className="bg-blue-100 p-2 text-center font-black">
          🚧 Development in progress.
        </div>
        <Navbar />
        <main className="">
          <Component { ...pageProps } />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
