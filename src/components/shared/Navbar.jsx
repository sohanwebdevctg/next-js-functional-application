"use client";
import Image from "next/image";
import Logo from "../../../public/logo/logo.png";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { MdPerson } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
  // pathname
  const pathname = usePathname();

  // toggle button
  const [open, setOpen] = useState(false);

  // window scroll
  const [scrollData, setScrollData] = useState(false);

  // scroll event function
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 180) {
        setScrollData(true);
      } else {
        setScrollData(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //cartData set in state
  //cartData set in state
  const [cartData, setCartData] = useState([]);

  //get cartData from localStorage
  useEffect(() => {
    const data = localStorage.getItem("cartData");

    //check this parse
    if (data) {
      const parseData = JSON.parse(data);
      setCartData(parseData);
    }
  }, []);

  return (
    <>
      {/* content section start */}
      {/* desktop section start */}
      <div
        className={`${
          scrollData
            ? "fixed top-0 right-0 left-0 z-10 duration-300 bg-[#F5F5F5] shadow-lg"
            : "sticky duration-300 z-0 bg-white"
        } hidden md:block h-20 w-full`}
      >
        <div className="container h-full w-full mx-auto md:px-5 lg:px-10 xl:px-12">
          <div className="md:flex md:justify-between md:items-center h-full">
            {/* logo section start */}
            <Image
              src={Logo}
              alt="logo"
              className="md:w-[10%] lg:w-[9%] xl:w-[10%] 2xl:w-[11%] md:h-8 lg:h-8 xl:h-10 2xl:h-12"
            ></Image>
            {/* logo section end */}
            {/* link section start */}
            <ul className="flex items-center justify-center gap-8">
              <li>
                <Link
                  className={`link ${
                    pathname === "/"
                      ? "md:text-xs lg:text-[13px] xl:text-sm 2xl:text-lg font-bold"
                      : "md:text-xs lg:text-[13px] xl:text-sm 2xl:text-lg"
                  }`}
                  href="/"
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  className={`link ${
                    pathname === "/shop"
                      ? "md:text-xs lg:text-[13px] xl:text-sm 2xl:text-lg font-bold"
                      : "md:text-xs lg:text-[13px] xl:text-sm 2xl:text-lg"
                  }`}
                  href="/shop"
                >
                  SHOP
                </Link>
              </li>
              <li>
                <Link
                  className={`link ${
                    pathname === "/about"
                      ? "md:text-xs lg:text-[13px] xl:text-sm 2xl:text-lg font-bold"
                      : "md:text-xs lg:text-[13px] xl:text-sm 2xl:text-lg"
                  }`}
                  href="/about"
                >
                  ABOUT
                </Link>
              </li>
              <li>
                <Link
                  className={`link ${
                    pathname === "/contact"
                      ? "md:text-xs lg:text-[13px] xl:text-sm 2xl:text-lg font-bold"
                      : "md:text-xs lg:text-[13px] xl:text-sm 2xl:text-lg"
                  }`}
                  href="/contact"
                >
                  CONTACT
                </Link>
              </li>
              <li>
                <Link
                  className={`link ${
                    pathname === "/blog"
                      ? "md:text-xs lg:text-[13px] xl:text-sm 2xl:text-lg font-bold"
                      : "md:text-xs lg:text-[13px] xl:text-sm 2xl:text-lg"
                  }`}
                  href="/blog"
                >
                  BLOG
                </Link>
              </li>
            </ul>
            {/* link section end */}
            {/* icon section start */}
            <ul className="flex items-center justify-end gap-5">
              <li className="md:text-sm lg:text-base xl:text-[16px] 2xl:text-xl relative">
                <Link href="/cart">
                  <FaShoppingCart></FaShoppingCart>
                </Link>
                <div className="badge absolute -top-5 -right-5 text-xs">{cartData.length}</div>
              </li>
              <li className="md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                <Link href="/profile">
                  <MdPerson></MdPerson>
                </Link>
              </li>
            </ul>
            {/* icon section end */}
          </div>
        </div>
      </div>
      {/* desktop section end */}
      {/* mobile section start */}
      <div
        className={`${
          scrollData
            ? "fixed top-0 right-0 left-0 z-30 duration-300 bg-[#F5F5F5] shadow-lg"
            : "sticky duration-300 z-30 bg-white"
        } h-20 block md:hidden`}
      >
        <div className="flex justify-between items-center px-4 sm:px-8 h-full">
          {/* logo section start */}
          <Image
            src={Logo}
            alt="logo"
            className="w-[22%] sm:w-[18%]  h-9"
          ></Image>
          {/* logo section end */}
          {/* toggle section start */}
          <div>
            {open ? (
              <IoClose
                onClick={() => setOpen(!open)}
                className="text-lg sm:text-xl"
              ></IoClose>
            ) : (
              <GiHamburgerMenu
                onClick={() => setOpen(!open)}
                className="text-lg sm:text-xl"
              ></GiHamburgerMenu>
            )}
          </div>
          {/* toggle section end */}
        </div>
        {/* toggle div start */}
        <div
          className={`${open ? "top-[80px]" : "-top-[100%]"} ${
            scrollData
              ? "bg-[#F5F5F5] bg-opacity-90"
              : " bg-white bg-opacity-90"
          } duration-500 z-50 fixed  w-full h-full pt-5`}
        >
          {/* link section start */}
          <ul className="text-center space-y-5">
            <li>
              <Link
                className={`link ${
                  pathname === "/"
                    ? "text-sm sm:text-base font-bold"
                    : "text-sm sm:text-base"
                }`}
                href="/"
                onClick={() => setOpen(false)}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                className={`link ${
                  pathname === "/shop"
                    ? "text-sm sm:text-base font-bold"
                    : "text-sm sm:text-base"
                }`}
                href="/shop"
                onClick={() => setOpen(false)}
              >
                SHOP
              </Link>
            </li>
            <li>
              <Link
                className={`link ${
                  pathname === "/about"
                    ? "text-sm sm:text-base font-bold"
                    : "text-sm sm:text-base"
                }`}
                href="/about"
                onClick={() => setOpen(false)}
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                className={`link ${
                  pathname === "/contact"
                    ? "text-sm sm:text-base font-bold"
                    : "text-sm sm:text-base"
                }`}
                href="/contact"
                onClick={() => setOpen(false)}
              >
                CONTACT
              </Link>
            </li>
            <li>
              <Link
                className={`link ${
                  pathname === "/blog"
                    ? "text-sm sm:text-base font-bold"
                    : "text-sm sm:text-base"
                }`}
                href="/blog"
                onClick={() => setOpen(false)}
              >
                BLOG
              </Link>
            </li>
          </ul>
          {/* link section end */}
          {/* icon section start */}
          <ul className="flex items-center justify-center gap-6 mt-5">
            <li className="text-lg relative">
              <Link href="/cart" onClick={() => setOpen(false)}>
                <FaShoppingCart></FaShoppingCart>
                <div className="badge absolute -top-5 -right-5 text-xs">{cartData.length}</div>
              </Link>
            </li>
            <li className="text-lg">
              <Link href="/profile" onClick={() => setOpen(false)}>
                <MdPerson></MdPerson>
              </Link>
            </li>
          </ul>
          {/* icon section end */}
        </div>
        {/* toggle div end */}
      </div>
      {/* mobile section end */}
      {/* content section end */}
    </>
  );
};

export default Navbar;
