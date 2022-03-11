import React from "react";
import Link from "next/link";
import Image from "next/image";
import NewsLetterForm from "./form/NewsLetterForm";

function Footer() {
  return (
    <footer className="bg-gray-100 pt-14">
      <div className="mx-auto max-w-[1430px] px-7">
        <div className="flex flex-wrap">
          {/* logo, newsletter */}
          <div className="w-full mb-4">
            <div className="flex flex-wrap justify-between">
              <div className="w-full lg:w-4/6 px-2">
                <div>
                  <Image
                    src="/bigbuy.jpg"
                    width={150}
                    height={50}
                    alt="BigBuy.cz"
                  />
                </div>
                <div className="mt-5 leading-6">
                  <p className="xl:max-w-7xl">
                    Lorem ipsum, or lipsum as it is sometimes kno wn, is dummy
                    text used in laying out print, gra phic or web designs the
                    passage.Lorem ipsum, or lipsum as it is sometimes kno wn, is
                    dummy text used in laying out print, gra phic or web designs
                    the passage.
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-2/6 px-2">
                <NewsLetterForm />
              </div>
            </div>
          </div>
          {/* social media */}
          <div className="w-full flex space-x-2 justify-center items-center my-3">
            {/* <div className="w-9 h-9 rounded-full border bg-blue-500"> */}
            <div className="">
              <img src="https://img.icons8.com/color/48/000000/facebook-new.png" />
            </div>
            <div className="">
              <img src="https://img.icons8.com/fluency/48/000000/instagram-new.png" />
            </div>
            <div className="">
              <img src="https://img.icons8.com/ios-glyphs/40/000000/twitter--v1.png" />
            </div>
            {/* <div className="w-9 h-9 rounded-full border bg-blue-500"></div> */}
          </div>
          {/* links */}
          {/* <div className="w-full flex space-x-2 justify-center mt-3 mb-6"> */}
          <ul className="w-full flex flex-wrap justify-center my-3 text-lg text-gray-700">
            <li className="px-2 mr-2 hover:text-blue-700 cursor-pointer">
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className="px-2 mr-2 hover:text-blue-700 cursor-pointer">
              <Link href="/info">
                <a>Jak nakupovat</a>
              </Link>
            </li>
            <li className="px-2 mr-2 hover:text-blue-700 cursor-pointer">
              <Link href="/info">
                <a>Obchodní podmínky</a>
              </Link>
            </li>
            <li className="px-2 mr-2 hover:text-blue-700 cursor-pointer">
              <Link href="/contact">
                <a>Kontaktujte nás</a>
              </Link>
            </li>
          </ul>
          {/* </div> */}
          <p className="w-full mb-20 lg:mb-2 text-center text-gray-500">
            Company name 2022
          </p>
          {/* <div className="w-full lg:w-1/3 mb-4">
            <div className="flex flex-wrap justify-between">
              <div className="w-full md:w-2/4 lg:w-full px-3">
                <div className="footer_logo">
                  <img
                    loading="lazy"
                    src="https://i.cdn.nrholding.net/document/44720530"
                    alt="easy shop"
                  />
                </div>
                <div className="mt-5 leading-6">
                  <p className="xl:max-w-7xl">
                    Lorem ipsum, or lipsum as it is sometimes kno wn, is dummy
                    text used in laying out print, gra phic or web designs the
                    passage.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-2/4 lg:w-full px-3">
                <NewsLetterForm />
              </div>
            </div>
          </div> */}
          {/* links */}
          {/* <div className="w-full md:w-2/4 lg:w-1/3 mb-3 mx-auto">
            <div className="flex flex-wrap ">
              <div className="w-2/4 px-3 ">
                <div className="flex flex-col items-center">
                  <h4 className="mt-2 mb-5 text-lg uppercase font-medium">
                    Můj účet
                  </h4>
                  <div>
                    <a
                      href="account-order-history.html"
                      className="block mb-3 leading-6"
                    >
                      Objednávky
                    </a>
                    <a href="wish-list.html" className="block mb-3 leading-6">
                      Wishlist
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-2/4 px-3">
                <div className="flex flex-col ">
                  <h4 className="mt-2 mb-5 text-lg uppercase font-medium">
                    Informace
                  </h4>
                  <div>
                    <a href="about-us.html" className="block mb-3 leading-6">
                      Jak nakupovat
                    </a>
                    <a
                      href="return-policy.html"
                      className="block mb-3 leading-6"
                    >
                      Obchodní podmínky
                    </a>
                    <a
                      href="terms-condition.html"
                      className="block mb-3 leading-6"
                    >
                      Kontaktujte nás
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* contact */}
          {/* <div className="w-full md:w-2/4 lg:w-1/3 mx-auto">
            <div className="">
              <div className="flex flex-col">
                <div className="w-full px-3">
                  <h4 className="mt-2 mb-5 text-lg uppercase font-medium">
                    Contact
                  </h4>
                  <p className="mb-3.5 leading-6 pl-8 relative">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 absolute top-0 left-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </span>
                    7895 Dr New Albuquerue
                  </p>
                  <p className="mb-3.5 leading-6 pl-8 relative">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 absolute top-0 left-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </span>
                    +566 477 256
                  </p>
                  <p className="mb-3.5 leading-6 pl-8 relative">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 absolute top-0 left-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"
                        />
                      </svg>
                    </span>
                    bigbuy@domain.com
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
