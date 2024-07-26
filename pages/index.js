// pages/index.js

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import SectionTitle from "../components/sectionTitle";
import Testimonials from "../components/testimonials";
import { db } from "../config/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import Layout from "../components/Layout";
import Hero from "../components/hero";


export async function getServerSideProps() {
  const docRef = doc(db, "about", "n7dovn7LdvUaSNjdmd6k");
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

export default function Home({ logoURL }) {
  return (
    <Layout logoURL={logoURL}>
      <Hero />
      <SectionTitle
        pretitle="Informasi Ibadah Rutin"
        title=" "
      />
      <Benefits data={benefitOne} />
      {/* <Benefits imgPos="right" data={benefitTwo} /> */}
      <SectionTitle
        pretitle="Video Khotbah Terbaru"
        title="Roh Kudus Mengubah Kehidupan"
      />
      <Video />
      <SectionTitle
        pretitle="Renungan"
        title=""
      />
      <Testimonials />
      {/* <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle> */}
      {/* <Faq /> */}
      {/* <Cta /> */}
    </Layout>
  );
}
