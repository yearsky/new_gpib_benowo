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

const About = ({ logoURL }) => {
  return (
    <Layout logoURL={logoURL}>
      <div className="container mx-auto p-8">
        <p className="text-3xl font-bold mb-4 text-center leading-10">
          PHMJ Masa Tugas 2022-2027 <br /> di GPIB Jemaat <Mark>Benowo</Mark>{" "}
          Surabaya
        </p>
        <div className="min-h-screen grid md:grid-cols-4 gap-y-5 items-center gap-x-5">
          <div className="max-w-xs container bg-white rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <div>
              <span className="text-white text-xs font-bold rounded-lg bg-green-500 inline-block mt-4 ml-4 py-1.5 px-4 cursor-pointer">
                Ketua Majelis Jemaat
              </span>
              <h1 className="text-xl mt-2 ml-4 font-bold text-gray-800 cursor-pointer hover:text-gray-900 transition duration-100">
                Pdt. Stefanus Ruben Djo
              </h1>
            </div>
            <img
              className="w-full cursor-pointer rounded-xl p-2"
              src="https://images.unsplash.com/photo-1525268771113-32d9e9021a97?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt=""
            />
           
          </div>
          <div className="max-w-xs container bg-white rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <div>
              <span className="text-white text-xs font-bold rounded-lg bg-green-500 inline-block mt-4 ml-4 py-1.5 px-4 cursor-pointer">
                Ketua Majelis Jemaat
              </span>
              <h1 className="text-xl mt-2 ml-4 font-bold text-gray-800 cursor-pointer hover:text-gray-900 transition duration-100">
                Pdt. Stefanus Ruben Djo
              </h1>
            </div>
            <img
              className="w-full cursor-pointer rounded-xl p-2"
              src="https://images.unsplash.com/photo-1525268771113-32d9e9021a97?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt=""
            />
           
          </div>
          <div className="max-w-xs container bg-white rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <div>
              <span className="text-white text-xs font-bold rounded-lg bg-green-500 inline-block mt-4 ml-4 py-1.5 px-4 cursor-pointer">
                Ketua Majelis Jemaat
              </span>
              <h1 className="text-xl mt-2 ml-4 font-bold text-gray-800 cursor-pointer hover:text-gray-900 transition duration-100">
                Pdt. Stefanus Ruben Djo
              </h1>
            </div>
            <img
              className="w-full cursor-pointer rounded-xl p-2"
              src="https://images.unsplash.com/photo-1525268771113-32d9e9021a97?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt=""
            />
          </div>
          <div className="max-w-xs container bg-white rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <div>
              <span className="text-white text-xs font-bold rounded-lg bg-green-500 inline-block mt-4 ml-4 py-1.5 px-4 cursor-pointer">
                Ketua Majelis Jemaat
              </span>
              <h1 className="text-xl mt-2 ml-4 font-bold text-gray-800 cursor-pointer hover:text-gray-900 transition duration-100">
                Pdt. Stefanus Ruben Djo
              </h1>
            </div>
            <img
              className="w-full cursor-pointer rounded-xl p-2"
              src="https://images.unsplash.com/photo-1525268771113-32d9e9021a97?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt=""
            />
          </div>
          
        </div>
      </div>
    </Layout>
  );
};

export default About;
