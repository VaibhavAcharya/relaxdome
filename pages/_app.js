import Head from "next/head";

import "./../styles/tailwind.css";

// Create group (chat rooms), invite people, talk and destroy group after one hour of inactivity.
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

        <title>Untitled</title>
      </Head>
      <div className="font-sans">
        <Component { ...pageProps } />
      </div>
    </>
  );
}

export default MyApp;
