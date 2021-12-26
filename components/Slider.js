import React, { useState } from "react";
import Image from "next/image";
import BtnSlider from "./BtnSlider";
import { v4 as uuidv4 } from "uuid";

function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);

  const dataSlider = [
    {
      id: uuidv4(),
      title: "Lorem ipsum",
      subTitle: "Lorem",
      img: "https://static.onlineshop.cz/data/a/webp/2885/sogo-ss-14565-easycook-sleva15.webp",
    },
    {
      id: uuidv4(),
      title: "Lorem ipsum",
      subTitle: "Lorem",
      img: "https://static.onlineshop.cz/data/a/webp/2960/xxl-vyprodej-startujeme-122021.webp",
    },
    {
      id: uuidv4(),
      title: "Lorem ipsum",
      subTitle: "Lorem",
      img: "https://static.onlineshop.cz/data/a/webp/2746/aeg-cashback-ziskejte-az-5-000-kc-zpet.webp",
    },
    {
      id: uuidv4(),
      title: "Lorem ipsum",
      subTitle: "Lorem",
      img: "https://static.onlineshop.cz/data/a/webp/2629/jura-kava-cerstve-namleta-nikoli-z-kapsle.webp",
    },
    {
      id: uuidv4(),
      title: "Lorem ipsum",
      subTitle: "Lorem",
      img: "https://static.onlineshop.cz/data/a/webp/1351/doprava-zdarma-na-velke-spotrebice-2021.webp",
    },
  ];

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="container-slider">
      {dataSlider.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
          >
            <Image
              width="1500"
              height="450"
              layout="responsive"
              src={obj.img}
            />
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />

      <div className="container-dots">
        {Array.from({ length: 5 }).map((item, index) => (
          <div
            key={index}
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
