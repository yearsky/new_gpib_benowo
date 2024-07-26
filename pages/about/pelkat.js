// pages/about/about.js

import React from "react";
import Link from "next/link";
import { db } from "../../config/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import Layout from "../../components/Layout";
import Mark from "../../components/mark";

export async function getServerSideProps() {
  const docRef = doc(db, "about", "n7dovn7LdvUaSNjdmd6k");
  const docSnap = await getDoc(docRef);

  let logoURL = "";

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

const Pelkat = ({ logoURL }) => {
  return (
    <Layout logoURL={logoURL}>
    </Layout>
  );
};

export default Pelkat;
