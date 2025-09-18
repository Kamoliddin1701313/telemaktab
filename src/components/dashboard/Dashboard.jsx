"use client";

import React, { useEffect, useState } from "react";
import { FiSmartphone } from "react-icons/fi";
import { GoGlobe } from "react-icons/go";
import { PiLaptopDuotone } from "react-icons/pi";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

function Dashboard() {
  const pageLink = [
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
  ];

  const route = useRouter();

  const text = ["t", "e", "l", "e", "m", "a", "k", "t", "a", "b"];

  const symbols = [
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
  ];

  const [floating, setFloating] = useState([]);

  useEffect(() => {
    const COUNT = 80;
    const items = Array.from({ length: COUNT }).map(() => ({
      id: Math.random().toString(36).slice(2, 9),
      char: symbols[Math.floor(Math.random() * symbols.length)],
      left: Math.random() * 100,
      top: Math.random() * 100,
      dur: 8 + Math.random() * 22,
      delay: -Math.random() * 6,
      scale: 0.8 + Math.random() * 1.8,
      rot: -45 + Math.random() * 90,
      opacity: 0.15 + Math.random() * 0.4,
    }));
    setFloating(items);
  }, []);

  const linkPageButton = (id) => {
    route.push(`${id}`);
  };

  return (
    <div className="w-full h-screen top-0 left-0 fixed bg-[#092F53] z-0">
      {floating?.map((value, index) => (
        <motion.div
          key={value.id} // id ishlatish yaxshiroq
          style={{
            left: `${value.left}%`,
            top: `${value.top}%`,
            fontSize: `${10 + value.scale * 20}px`,
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

      <div className="flex bg-transparent justify-between items-center w-full max-w-[1280px] mx-auto mt-[8%]">
        <div className="flex flex-col gap-8">
          {pageLink?.slice(0, 4).map((value, index) => {
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
                  className={`w-[110px] h-[110px] rounded-full cursor-pointer text-white flex items-center justify-center text-center px-2 leading-5 ${value.bg}`}
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

        <div className="w-[70%]">
          <div className="flex items-center mx-auto w-3/5">
            {text?.map((value, index) => {
              const delays = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];
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
                  className="text-[72px] mx-auto font-bold uppercase bg-gradient-to-bl from-[#14c3f3] via-[#b3b3b39d] to-[#ecf801] bg-clip-text text-transparent"
                >
                  {value}
                </motion.h1>
              );
            })}
          </div>

          <div className="my-10">
            <motion.h3
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="text-[28px] text-white"
            >
              Farzandingizdan telefonni tortib olmang — uni kelajakka
              yo‘naltiring!
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="text-white text-[18px] mt-2.5"
            >
              Telefon va kompyuter — nafaqat o‘yin, balki ta’lim vositasi.
            </motion.p>
          </div>

          <div className="flex justify-between items-center gap-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0, duration: 1 }}
              className="p-5 rounded-[20px] bg-[#0e4e8f] text-white"
            >
              <div className="flex items-center justify-center gap-1.5">
                <FiSmartphone className="text-[22px] text-blue-500" />
                <span>Raqamli ta’lim</span>
              </div>
              <p className="text-center mt-3">
                Telefon va kompyuterdan foydali foydalanishni o‘rganadi.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="p-5 rounded-[20px] bg-[#0e4e8f] text-white"
            >
              <div className="flex items-center justify-center gap-1.5">
                <PiLaptopDuotone className="text-[24px] text-blue-500" />
                <span>IT ko‘nikmalar</span>
              </div>
              <p className="text-center mt-3">
                Kelajak kasblari — dasturlash va texnologiyalarni egallash.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="p-5 rounded-[20px] bg-[#0e4e8f] text-white"
            >
              <div className="flex items-center justify-center gap-1.5">
                <GoGlobe className="text-[22px] text-blue-500" />
                <span>Onlayn qulaylik</span>
              </div>
              <p className="text-center mt-3">
                Uyda o‘tirib zamonaviy ta’lim olish imkoniyati.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col gap-8">
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
                  className={`w-[110px] h-[110px] rounded-full cursor-pointer text-white flex items-center justify-center text-center px-2 leading-5 ${value.bg}`}
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
