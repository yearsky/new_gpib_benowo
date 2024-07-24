import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import PopupWidget from "../components/popupWidget";

import { db } from "../config/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

export async function getServerSideProps() {
  const docRef = doc(db, "about", "zzzzzzzzzzzzzzzzzzzy");
  const docSnap = await getDoc(docRef);

  let logoURL = '';

  if (docSnap.exists()) {
    const data = docSnap.data();
    if (data.logo && data.logo.length > 0) {
      logoURL = data.logo[0].downloadURL;
    }
  }

  return {
    props: {
      logoURL,
    },
  };
}

export default function Home({logoURL}) {
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

      <Navbar logoURL={logoURL} />
      <Hero />
      <SectionTitle
        pretitle="Informasi"
        title=" ">
      </SectionTitle>
      <Benefits data={benefitOne} />
      {/* <Benefits imgPos="right" data={benefitTwo} /> */}
      <SectionTitle
        pretitle="Video Khotbah Terbaru"
        title="Roh Kudus Mengubah Kehidupan">
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Renungan"
        title="">
      </SectionTitle>
      <Testimonials />
      {/* <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle> */}
      {/* <Faq /> */}
      {/* <Cta /> */}
      <Footer logoURL={logoURL} />
      <PopupWidget />
    </>
  );
}
