// components/Layout.js

import Head from "next/head";
import Navbar from "./navbar";
import Footer from "./footer";
import PopupWidget from "./popupWidget";

const Layout = ({ children, logoURL }) => {
  return (
    <>
      <Head>
        <title>GPIB Benowo Surabaya</title>
        <meta
          name="description"
          content="Website Resmi Jemaat GPIB Benowo Surabaya"
        />
        <link rel="icon" href={logoURL} />
      </Head>
      <div className="lg:p-10">
        <Navbar logoURL={logoURL} />
        {children}
        <Footer logoURL={logoURL} />
        <PopupWidget />
      </div>
    </>
  );
};

export default Layout;
