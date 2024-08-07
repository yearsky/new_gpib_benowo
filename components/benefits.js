// Benefits.js
import Image from "next/image";
import React, { useState,useEffect } from "react";
import Container from "./container";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomDot from "./customDots"; // Import the custom dot component
import announceImg from "../public/img/announce.png";
import { db } from "../config/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { NewspaperIcon } from "@heroicons/react/outline";

export default function Benefits(props) {
  const [data, setData] = useState([]);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [oldSlide, setOldSlide] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "Ibadah"));
      const fetchedData = querySnapshot.docs.map(doc => doc.data());
      setData(fetchedData);
    };
    fetchData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 2500,
    autoplay:true,
    slidesToShow: 4,
    slidesToScroll: 4,
    vertical: true,
    appendDots: (dots) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "10px",
        }}
      >
        {dots}
      </div>
    ),
    customPaging: (i) => (
      <CustomDot index={i} activeSlide={Math.floor(activeSlide / 4)} oldSlide={oldSlide} />
    ),
    beforeChange: (current, next) => {
      setOldSlide(current);
      setActiveSlide(next);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          vertical: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          dots:false
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          dots:true
        },
      },
    ],
  };

  return (
    <>
      <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ">
        <div
          className={`flex items-center justify-center w-full lg:w-1/2 ${
            props.imgPos === "right" ? "lg:order-1" : ""
          }`}
        >
          <div>
            <Image
              src={announceImg}
              width="521"
              height="482"
              alt="Benefits"
              layout="intrinsic"
              placeholder="blur"
            />
          </div>
        </div>

        <div
          className={`flex flex-wrap items-center w-full lg:w-1/2 ${
            props.imgPos === "right" ? "lg:justify-end" : ""
          }`}
        >
          <div>
            <div className="flex flex-col w-full mt-4">
              <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
                {data.title}
              </h3>

              <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                {data.desc}
              </p>
            </div>

            <div className="w-full mt-5">
              <Slider {...settings}>
              {data.map((item, index) => (
                  <Benefit
                    key={index}
                    title={item.type}
                    icon={item.logo ? <img src={item.logo[0].downloadURL} alt={item.type} /> : <NewspaperIcon />}
                  >
                    {item.times}
                  </Benefit>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

function Benefit(props) {
  return (
    <>
      <div className="flex items-start mt-8 space-x-3">
        <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-11 h-11 ">
          {React.cloneElement(props.icon, {
            className: "w-7 h-7 text-indigo-50",
          })}
        </div>
        <div>
          <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
            {props.title}
          </h4>
          <p className="mt-1 text-gray-500 dark:text-gray-400">
            {props.children}
          </p>
        </div>
      </div>
    </>
  );
}
