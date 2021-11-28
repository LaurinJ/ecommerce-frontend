import React, { useState } from "react";
import Image from "next/image";

function ImagesView({ imgurl, images }) {
  const [img, setImg] = useState(`${process.env.IMG_LINK}${imgurl}`);

  const changeImg = (img) => {
    setImg(img);
  };

  return (
    <div className="flex flex-col w-full">
      <div className="w-full block">
        <Image width="6600" height="5000" src={img} />
      </div>
      <div className="w-full">
        <ul className="flex space-x-2 h-24 overflow-hidden">
          <li key="50" className="cursor-pointer">
            <Image
              layout="fixed"
              width="150"
              height="90"
              src={`${process.env.IMG_LINK}${imgurl}`}
              onClick={() => {
                changeImg(`${process.env.IMG_LINK}${imgurl}`);
              }}
            />
          </li>
          {images.map((img, i) => {
            return (
              <li key={i} className="cursor-pointer">
                <Image
                  layout="fixed"
                  width="150"
                  height="90"
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
