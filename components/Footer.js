import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-100 py-14">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="lg:w-1/3 mb-4">
            <div className="flex flex-col">
              <div className="w-full md:w-3/6 lg:w-full px-3">
                <div className="footer_logo">
                  <img
                    loading="lazy"
                    src="https://rafcart.programmingkit.xyz/assets/images/svg/logo.svg"
                    alt="easy shop"
                  />
                </div>
                <div className="mt-5 leading-6">
                  <p className="xl:max-w-7xl">
                    Lorem ipsum, or lipsum as it is sometimes kno wn, is dummy text used in laying
                    out print, gra phic or web designs the passage.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-3/6 lg:w-full px-3">
                <div className="mx-auto">
                  <h4 className="mt-6 mb-3.5 text-lg uppercase font-medium">Newsletter</h4>
                  <form className="flex">
                    <input
                      type="text"
                      placeholder="Your email address"
                      className="w-56 py-1.5 px-3.5 bg-transparent border"
                    />
                    <button
                      type="submit"
                      className="
                    min-w-24
                    py-1.5
                    px-2.5
                    border border-red-600
                    text-white
                    bg-red-600
                    uppercase
                  "
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 mb-3 mx-auto">
            <div className="flex flex-wrap">
              <div className="w-3/6 px-3">
                <div className="">
                  <h4 className="mt-2 mb-5 text-lg uppercase font-medium">My Account</h4>
                  <a href="account-order-history.html" className="block mb-3 leading-6">
                    Orders
                  </a>
                  <a href="wish-list.html" className="block mb-3 leading-6">
                    Wishlist
                  </a>
                  <a href="track-order.html" className="block mb-3 leading-6">
                    Track Order
                  </a>
                  <a href="#" className="block mb-3 leading-6">
                    Manage Account
                  </a>
                  <a href="return-order.html" className="block mb-3 leading-6">
                    Return Order
                  </a>
                </div>
              </div>
              <div className="w-3/6 px-3">
                <div className="">
                  <h4 className="mt-2 mb-5 text-lg uppercase font-medium">Information</h4>
                  <a href="about-us.html" className="block mb-3 leading-6">
                    About Us
                  </a>
                  <a href="return-policy.html" className="block mb-3 leading-6">
                    Return Policy
                  </a>
                  <a href="terms-condition.html" className="block mb-3 leading-6">
                    Terms & condition
                  </a>
                  <a href="privacy-policy.html" className="block mb-3 leading-6">
                    Privacy Policy
                  </a>
                  <a href="faq.html" className="block mb-3 leading-6">
                    FAQ
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 mx-auto">
            <div className="footer_download">
              <div className="flex flex-col">
                <div className="col-lg-6 w-full px-3">
                  <h4 className="mt-2 mb-5 text-lg uppercase font-medium">Contact</h4>
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
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </span>
                    7895 Dr New Albuquerue, NM 19800, <br />
                    United States Of America
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
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </span>
                    +566 477 256, +566 254 575
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
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"
                        />
                      </svg>
                    </span>
                    info@domain.com
                  </p>
                </div>
                <div className="flex mt-1.5 w-full px-3 space-x-4">
                  <a href="#" className="facebook"></a>
                  <a href="#" className="twitter"></a>
                  <a href="#" className="instagram">
                    <i className="lab la-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
