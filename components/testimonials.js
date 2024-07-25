import Image from "next/image";
import React,{useState,useEffect} from "react";
import Container from "./container";

import { db } from "../config/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export default function Testimonials() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "renungan"));
      const fetchedData = querySnapshot.docs.map(doc => doc.data());
      setData(fetchedData);
    };
    fetchData();
  }, []);


  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
      {data.map((item, index) => (
        <div key={index} className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p
              className="text-2xl leading-normal"
              dangerouslySetInnerHTML={{ __html: item.ayat.replace(/<Mark>/g, "<mark>").replace(/<\/Mark>/g, "</mark>") }}
            />
            <p className="text-2xl leading-normal">
              <mark>{item.pasal}</mark>
            </p>
          </div>
        </div>
      ))}
       
      </div>
    </Container>
  );
}


function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}
