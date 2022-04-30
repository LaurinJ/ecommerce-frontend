import React, { useState } from "react";
import Image from "next/image";

function ImagesView({ imgurl, images }) {
  const [img, setImg] = useState(`${process.env.BACKEND_SERVER_LINK}${imgurl}`);

  const changeImg = (img) => {
    setImg(img);
  };

  return (
    <div className="flex flex-col w-full">
      <div className="w-full block">
        <Image width="663" height="583" src={img} />
        {/* <Image width="6600" height="5800" src={img} /> */}
      </div>
      <div className="w-full">
        {/* <ul className="flex space-x-2 h-24 overflow-hidden"> */}
        <ul className="flex gap-3 overflow-x-auto snap-x snap-madatory h-28 overflow-y-hidden">
          <li key="50" className="cursor-pointer border snap-center">
            <Image
              layout="fixed"
              width="150"
              height="110"
              src={`${process.env.IMG_LINK}${imgurl}`}
              onClick={() => {
                changeImg(`${process.env.IMG_LINK}${imgurl}`);
              }}
            />
          </li>
          {images.map((img, i) => {
            return (
              <li key={i} className="cursor-pointer border snap-center">
                <Image
                  layout="fixed"
                  width="150"
                  height="110"
                  src={`${process.env.IMG_LINK}${img}`}
                  onClick={() => {
                    changeImg(`${process.env.IMG_LINK}${img}`);
                  }}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ImagesView;
