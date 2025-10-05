"use client";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { HiMenuAlt3 } from "react-icons/hi";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

function Navbar() {
  const [openIcon, setOpenIcon] = useState(false);
  const pageLink = [
    { id: 1, name: "Bosh sahifa", link: "" },
    { id: 2, name: "Matematika", link: "mathematics" },
    { id: 3, name: "Fizika", link: "physics" },
    { id: 4, name: "Biologiya", link: "biology" },
    { id: 5, name: "Kimyo", link: "chemistry" },
    { id: 6, name: "Astronomiya Geografiya", link: "astronomy" },
    { id: 7, name: "Tarix", link: "history" },
    { id: 8, name: "Ona tili Adabiyot", link: "native-language" },
    { id: 9, name: "Chet tillar", link: "foreign-languages" },
    { id: 10, name: "Biz haqimizda", link: "about" },
  ];

  const menuBtn = () => {
    setOpenIcon((prev) => !prev);
  };

  const pathname = usePathname();

  return (
    <div className="h-[60px] bg-[#0F1324] fixed z-10 w-full">
      <div className="max-w-[1280px] mx-auto h-full max-xl:px-5 max-lg:flex max-lg:items-center">
        <div className="flex items-center justify-between h-full max-lg:hidden">
          {pageLink?.map((value, index) => {
            const isActiveLink = pathname === `/${value.link}`;
            return (
              <Link
                prefetch
                href={`/${value.link}`}
                className={`${
                  isActiveLink
                    ? "border-[#00e5ff] border-b-[3px] text-[#00e5ff] bg-[#b6b6b640] rounded-[8px] navbarLink activeLink"
                    : "border-transparent navbarLink text-white"
                } h-[40px] relative flex items-center border-b-[3px] pb-[3px] hover:bg-[#b6b6b640] px-4 font-semibold cursor-pointer rounded-[8px] hover:border-[#00e5ff] hover:navbarLink hover:text-[#00e5ff] max-xl:text-[14px] max-xl:pb-0 max-xl:px-2 max-lg:w-full`}
                key={index}
              >
                {value?.name}
              </Link>
            );
          })}
        </div>

        <Link
          href="/"
          className="hidden max-lg:block text-white cursor-pointer bg-[#b6b6b640] px-4 py-2 rounded-[8px]"
        >
          Bosh sahifa
        </Link>

        <button
          onClick={menuBtn}
          className="hidden max-lg:block cursor-pointer ml-auto"
        >
          {openIcon ? (
            <IoClose className="text-white text-[26px]" />
          ) : (
            <HiMenuAlt3 className="text-white text-[26px]" />
          )}
        </button>

        <div
          className={`hidden max-lg:block bg-[#0F1324] px-5 absolute top-[60px] h-screen w-full ${
            openIcon
              ? "right-0 duration-500 ease-in"
              : "-right-[100%] duration-200 ease-in"
          }`}
        >
          {pageLink?.map((value, index) => {
            const isActiveLink = pathname === `/${value.link}`;
            return (
              <Link
                prefetch
                href={`/${value.link}`}
                onClick={() => setOpenIcon(false)}
                className={`${
                  isActiveLink
                    ? "border-[#00e5ff] border-b-[3px] text-[#00e5ff] bg-[#b6b6b640] rounded-[8px]"
                    : "border-transparent text-white"
                } h-[48px] mt-2.5 relative flex items-center border-b-[3px] pb-[3px] hover:bg-[#b6b6b640] px-4 font-semibold cursor-pointer rounded-[8px] hover:border-[#00e5ff] hover:text-[#00e5ff] text-[14px] w-full`}
                key={index}
              >
                {value?.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
