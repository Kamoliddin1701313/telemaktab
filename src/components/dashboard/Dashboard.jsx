"use client";

import React, { useEffect, useMemo, useState } from "react";
import { FiSmartphone } from "react-icons/fi";
import { GoGlobe } from "react-icons/go";
import { PiLaptopDuotone } from "react-icons/pi";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

function Dashboard() {
  const pageLink = useMemo(
    () => [
      {
        id: 1,
        name: "Matematika",
        bg: "bg-red-600",
        shadow: "#ff0000",
        link: "mathematics",
      },
      {
        id: 2,
        name: "Fizika",
        bg: "bg-teal-600",
        shadow: "#008080",
        link: "physics",
      },
      {
        id: 3,
        name: "Biologiya",
        bg: "bg-[#d7d703ff]",
        shadow: "#d7d703ff",
        link: "biology",
      },
      {
        id: 4,
        name: "Kimyo",
        bg: "bg-[#44339be8]",
        shadow: "#44339be8",
        link: "chemistry",
      },
      {
        id: 5,
        name: "Astronomiya Geografiya",
        bg: "bg-blue-600",
        shadow: "#0000ff",
        link: "astronomy",
      },
      {
        id: 6,
        name: "Tarix",
        bg: "bg-[#19b319]",
        shadow: "#19b319",
        link: "history",
      },
      {
        id: 7,
        name: "Ona tili Adabiyot",
        bg: "bg-[#f63d5b]",
        shadow: "#f63d5b",
        link: "native-language",
      },
      {
        id: 8,
        name: "Chet tillar",
        bg: "bg-[#fa7414f3]",
        shadow: "#fa7414f3",
        link: "foreign-languages",
      },
    ],
    []
  );

  const route = useRouter();

  const text = useMemo(
    () => ["t", "e", "l", "e", "m", "a", "k", "t", "a", "b"],
    []
  );

  const symbols = useMemo(
    () => [
      "√",
      "∑",
      "∫",
      "π",
      "∞",
      "≈",
      "≥",
      "≤",
      "∂",
      "∆",
      "θ",
      "λ",
      "σ",
      "β",
      "µ",
      "φ",
      "ψ",
      "E=mc²",
      "a²+b²=c²",
    ],
    []
  );

  const [floating, setFloating] = useState([]);

  const COUNT = 60;

  const items = useMemo(
    () =>
      Array.from({ length: COUNT }).map(() => ({
        id: Math.random().toString(36).slice(2, 9),
        char: symbols[Math.floor(Math.random() * symbols.length)],
        left: Math.random() * 100,
        top: Math.random() * 100,
        dur: 8 + Math.random() * 22,
        delay: -Math.random() * 6,
        scale: 0.8 + Math.random() * 1.8,
        rot: -45 + Math.random() * 90,
        opacity: 0.15 + Math.random() * 0.4,
      })),
    [symbols]
  );

  useEffect(() => {
    setFloating(items);
  }, []);

  const linkPageButton = (id) => {
    route.push(`${id}`);
  };

  return (
    <div className="w-full min-h-screen top-0 left-0 fixed bg-[#092F53] z-0 max-lg:static overflow-hidden ">
      <div className="max-lg:hidden">
        {floating?.map((value, index) => (
          <motion.div
            key={value.id} // id ishlatish yaxshiroq
            style={{
              left: `${value.left}%`,
              top: `${value.top}%`,
              fontSize: `${value.scale * 20}px`,
              opacity: value.opacity,
              transform: `rotate(${value.rot}deg)`,
              position: "absolute",
              color: `rgba(255, 255, 255, ${value.opacity})`,
              textShadow: `
        0 0 5px rgba(255, 255, 255, 0.227),
        0 0 10px rgba(255, 255, 255, 0.258),
        0 0 15px rgba(255, 255, 255, 0.288),
        0 0 20px rgba(0, 150, 255, 0.6)
      `,
            }}
            className="max-lg:!text-[20px]"
            animate={{
              x: [0, (Math.random() > 0.5 ? 1 : -1) * 200],
              y: [0, (Math.random() > 0.5 ? 1 : -1) * 200],
              rotate: [value.rot, value.rot + 360],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: value.dur,
              ease: "easeInOut",
              delay: value.delay,
            }}
          >
            {value.char}
          </motion.div>
        ))}
      </div>

      <div className="flex bg-transparent justify-between items-start w-full max-w-[1280px] mx-auto mt-[8%] max-xl:px-5 max-xl:mt-[12%] max-md:mt-[6%] max-lg:flex-col max-lg:items-center max-lg:gap-10 max-lg:mt-0 max-lg:pb-10">
        <div className="flex flex-col gap-8 max-lg:order-2 max-lg:w-full max-lg:flex-row max-lg:flex-wrap max-lg:justify-center">
          {pageLink?.slice(0, 4).map((value, index) => {
            const delays = [0.1, 0.5, 1, 2];

            return (
              <motion.div
                key={value.id}
                initial={{ y: -500, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: delays[index],
                  duration: 1,
                  ease: "easeOut",
                }}
              >
                <motion.button
                  onClick={() => linkPageButton(value.link)}
                  className={`w-[110px] h-[110px] rounded-full cursor-pointer text-white flex items-center justify-center text-center px-2 leading-5 ${value.bg} max-xl:w-[100px] max-xl:h-[100px] max-xl:text-[14px]`}
                  animate={{
                    scale: [1, 1.15, 1],
                    boxShadow: [
                      `0 0 20px ${value.shadow}`,
                      `0 0 50px ${value.shadow}`,
                      `0 0 20px ${value.shadow}`,
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {value.name}
                </motion.button>
              </motion.div>
            );
          })}
        </div>

        <div className="w-[70%] max-lg:w-full max-lg:order-1">
          <div className="flex items-center mx-auto w-3/5 max-md:w-4/5 max-sm:w-full">
            {text?.map((value, index) => {
              return (
                <motion.h1
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: index * 0.4,
                    duration: 1.6,
                    ease: "easeOut",
                  }}
                  key={index}
                  className="text-[72px] mx-auto font-bold uppercase bg-gradient-to-bl from-[#14c3f3] via-[#b3b3b39d] to-[#ecf801] bg-clip-text text-transparent max-xl:text-[52px] max-md:text-[42px] max-md:text-center"
                >
                  {value}
                </motion.h1>
              );
            })}
          </div>

          <div className="my-10 max-xl:text-center max-xl:leading-9">
            <motion.h3
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="text-[28px] text-white max-md:text-[22px]"
            >
              Farzandingizdan telefonni tortib olmang — uni kelajakka
              yo‘naltiring!
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="text-white text-[18px] mt-2.5 max-sm:text-[16px]"
            >
              Telefon va kompyuter — nafaqat o‘yin, balki ta’lim vositasi.
            </motion.p>
          </div>

          <div className="grid grid-cols-4 justify-between gap-4 max-xl:gap-3 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0, duration: 1 }}
              className="p-5 rounded-[20px] bg-[#0e4e8f] text-white max-xl:p-3.5"
            >
              <div className="text-center">
                <span>Biz bilan bog'laning</span>
              </div>
              <div className="flex flex-col gap-2 mt-3 max-xl:text-[15px]">
                <a href="tel:+9989909557602">Tel : +998 90 955 76 02</a>
                <a href="https://t.me/T_Zohidjon25" target="_blank">
                  Telegram : Zohidjon
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0, duration: 1 }}
              className="p-5 rounded-[20px] bg-[#0e4e8f] text-white max-xl:p-3.5"
            >
              <div className="flex items-center justify-center gap-1.5">
                <FiSmartphone className="text-[22px] text-blue-500" />
                <span>Raqamli ta’lim</span>
              </div>
              <p className="text-center mt-3 max-xl:text-[15px] max-xl:text-left">
                Telefon va kompyuterdan foydali foydalanishni o‘rganadi.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="p-5 rounded-[20px] bg-[#0e4e8f] text-white max-xl:p-3.5"
            >
              <div className="flex items-center justify-center gap-1.5">
                <PiLaptopDuotone className="text-[24px] text-blue-500" />
                <span>IT ko‘nikmalar</span>
              </div>
              <p className="text-center mt-3 max-xl:text-[15px] max-xl:text-left">
                Kelajak kasblari — dasturlash va texnologiyalarni egallash.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="p-5 rounded-[20px] bg-[#0e4e8f] text-white max-xl:p-3.5"
            >
              <div className="flex items-center justify-center gap-1.5">
                <GoGlobe className="text-[22px] text-blue-500" />
                <span>Onlayn qulaylik</span>
              </div>
              <p className="text-center mt-3 max-xl:text-[15px] max-xl:text-left">
                Uyda o‘tirib zamonaviy ta’lim olish imkoniyati.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col gap-8 max-lg:order-3 max-lg:w-full max-lg:flex-row max-lg:flex-wrap max-lg:justify-center">
          {pageLink?.slice(4).map((value, index) => {
            const delays = [0.1, 0.5, 1, 2]; // ketma-ket tushish kechikishlari

            return (
              <motion.div
                key={value.id}
                initial={{ y: -500, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: delays[index],
                  duration: 1,
                  ease: "easeOut",
                }}
              >
                <motion.button
                  onClick={() => linkPageButton(value.link)}
                  className={`w-[110px] h-[110px] rounded-full cursor-pointer text-white flex items-center justify-center text-center px-2 leading-5 ${value.bg} max-xl:w-[100px] max-xl:h-[100px] max-xl:text-[14px]`}
                  animate={{
                    scale: [1, 1.15, 1],
                    boxShadow: [
                      `0 0 20px ${value.shadow}`,
                      `0 0 50px ${value.shadow}`,
                      `0 0 20px ${value.shadow}`,
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {value.name}
                </motion.button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
