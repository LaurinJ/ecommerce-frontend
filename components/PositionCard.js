import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function PositionCard() {
  const router = useRouter();

  const path = router.asPath.replace("/", "").split("/");

  console.log(path);

  return (
    <div className="relative bg-gray-100 text-gray-500 text-sm shadow-lg z-10">
      <ul className="max-w-[1600px] mx-auto flex py-3 px-[40px] lg:px-[70px]">
        <Link href="/">
          <li className="px-3 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </li>
        </Link>
        {path.map((link) => {
          return (
            <>
              /
              <li className="px-3">
                <Link href={`/${link}`}>
                  <a>{link}</a>
                </Link>
              </li>
            </>
          );
        })}
        {/* /<li className="px-3 ">Zboží</li>/
        <li className="px-3">
          <Link href="/products">
            <a>Slevy / produkt</a>
          </Link>
        </li> */}
      </ul>
    </div>
  );
}

export default PositionCard;
