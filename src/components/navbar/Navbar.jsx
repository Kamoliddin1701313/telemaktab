"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

function Navbar() {
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

  const pathname = usePathname();

  // const router = useRouter();
  // const pageLinkButton = (link) => {
  //   router.push(`/${link}`);
  // };

  return (
    <div className="h-[60px] bg-[#0F1324] fixed z-10 w-full">
      <div className="max-w-[1280px] mx-auto h-full">
        <div className="flex items-center justify-between h-full">
          {pageLink?.map((value, index) => {
            const isActiveLink = pathname === `/${value.link}`;
            return (
              <Link
                href={`/${value.link}`}
                // onClick={() => pageLinkButton(value.link)}
                className={`${
                  isActiveLink
                    ? "border-[#00e5ff] border-b-[3px] text-[#00e5ff] bg-[#b6b6b640] rounded-[8px] navbarLink activeLink"
                    : "border-transparent navbarLink text-white"
                } h-[40px] relative flex items-center border-b-[3px] pb-[3px] hover:bg-[#b6b6b640] duration-300 ease-in px-4 font-semibold cursor-pointer rounded-[8px] hover:border-white hover:navbarLink hover:text-[#00e5ff]`}
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
