"use client";
import { motion } from "framer-motion";
import teacher1 from "../../../public/images/teacher.webp";
import Image from "next/image";

import {
  FaBookOpen,
  FaLandmark,
  FaMonument,
  FaCrown,
  FaScroll,
  FaGlobe,
} from "react-icons/fa";
import { useMemo } from "react";

function History() {
  const classes = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        title: `${i + 1}-sinf`,
        desc: `Matematika darslari: ${i + 1}-sinf uchun maxsus materiallar.`,
        icon: <FaBookOpen />,
      })),
    []
  );

  const categories = useMemo(
    () => [
      {
        title: "Qadimgi sivilizatsiyalar",
        desc: "Misr, Bobil, Xitoy va boshqa qadimgi davlatlar.",
        icon: <FaMonument />,
      },
      {
        title: "O‘rta asrlar",
        desc: "Saltanatlar, madaniyat va ilm-fan taraqqiyoti.",
        icon: <FaCrown />,
      },
      {
        title: "Yangi davr",
        desc: "Renessans, buyuk kashfiyotlar va inqiloblar.",
        icon: <FaScroll />,
      },
      {
        title: "XX asr",
        desc: "Ikki jahon urushi, mustaqillik harakatlari.",
        icon: <FaLandmark />,
      },
      {
        title: "Jahon tarixi",
        desc: "Davlatlararo munosabatlar va global tarixiy jarayonlar.",
        icon: <FaGlobe />,
      },
    ],
    []
  );

  const animationText = useMemo(
    () => [
      {
        text: "Misr Piramidalari (~2600 BC)",
        y: 30,
        size: 16,
        opacity: 0.85,
      },
      {
        text: "Spartak qo‘zg‘oloni (73–71 BC)",
        y: 70,
        size: 16,
        opacity: 0.7,
      },
      {
        text: "Rim imperiyasi qulash davri (476 AD)",
        y: 110,
        size: 14,
        opacity: 0.6,
      },
      {
        text: "Buyuk geografik kashfiyotlar davri (XV–XVI asr)",
        y: 150,
        size: 14,
        opacity: 0.5,
      },
    ],
    []
  );

  return (
    <div>
      <div className="bg-[linear-gradient(180deg,#f6fbff_0%,#eef6ff_100%)] h-[500px]">
        <section className="max-w-[1280px] mx-auto">
          <div className="flex items-start justify-between py-20 gap-10">
            <motion.div
              className="flex flex-col gap-5 relative"
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h1 className="text-[40px] text-[#0f3b82] font-semibold leading-11">
                Tarix — O‘tmishdan saboq
              </h1>

              <p className="text-[18px]">
                Tarix insoniyatning o‘tmishi, buguni va kelajagini tushunishga
                yordam beradi. Bu yerda siz dunyo tarixining eng muhim davrlari
                haqida ma’lumot olasiz.
              </p>

              <div className="flex items-center gap-5">
                <button className="h-[48px] border-none cursor-pointer rounded-[36px] text-white bg-blue-800 text-center px-8 shadow-[0_0_10px_blue]">
                  Darslarni boshlash
                </button>
                <button className="h-[48px] border-none cursor-pointer font-medium rounded-[36px] text-black bg-white text-center px-8 shadow-[0_0_10px_black]">
                  Tez test
                </button>
              </div>

              <div className="flex gap-2.5 items-start">
                <FaLandmark className="text-blue-800 text-[24px]" />
                <div>
                  <p className="text-black font-bold text-[20px] leading-4">
                    5000+
                  </p>
                  <p className="text-[#030303c7] font-semibold">
                    Yillik tarixiy voqealar
                  </p>
                </div>
              </div>

              <Image
                src={teacher1}
                alt="teacher"
                width={320}
                // height={300}
                className="absolute -right-[5%] top-[30%]"
              />
            </motion.div>

            <motion.div
              className="w-3/5 bg-[#042018] relative p-3 rounded-[20px] shadow-[0_10px_30px_rgba(4,32,18,0.35)]"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            >
              <svg
                className="flex flex-col text-white h-[280px]"
                viewBox="0 0 350 200"
                preserveAspectRatio="xMinYMin meet"
              >
                {animationText?.map((item, textIndex) => (
                  <motion.text
                    key={textIndex}
                    x="10"
                    y={item.y}
                    fontSize={item.size}
                    fill={`rgba(255,255,255,${item.opacity})`}
                    textAnchor="start"
                  >
                    {item.text.split("").map((char, i) => (
                      <motion.tspan
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: textIndex * 1 + i * 0.12,
                        }}
                      >
                        {char}
                      </motion.tspan>
                    ))}
                  </motion.text>
                ))}
              </svg>
            </motion.div>
          </div>
        </section>
      </div>

      {/* SINFLAR */}
      <section className="max-w-[1280px] mx-auto pt-8">
        <h2 className="text-[38px] text-[#0f3b82] font-semibold text-center">
          Sinflar
        </h2>

        <div className="flex items-center justify-between">
          {classes.map((c) => (
            <motion.div
              key={c.title}
              className="mt-6 mb-8"
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <button
                className="w-[80px] shadow-[0_0_20px_rgba(0,0,0,0.4),-5px_-5px_20px_rgba(51, 51, 51, 0.4)] h-[80px] hover:scale-105 bg-[#f5f5f5] cursor-pointer rounded-full
                     border-[6px] border-[rgba(15,23,42,0.04)]
                     transition-all duration-300 ease-in
                     hover:border-[#83838377]
                     hover:shadow-[inset_0_0_20px_rgba(0,0,0,0.3)]"
              >
                {c.title}
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ASOSIY YO‘NALISHLAR */}
      <section className="max-w-[1280px] mx-auto pb-16">
        <h2 className="text-[38px] text-[#0f3b82] font-semibold text-center">
          Asosiy yo‘nalishlar
        </h2>
        <div className="grid grid-cols-5 justify-between mt-10 gap-3">
          {categories.map((c, i) => (
            <motion.article
              key={i}
              className="p-4 border-[3px] border-[rgba(15,23,42,0.12)]  shadow-[0_5px_15px_rgba(16,24,40,0.12),0_-5px_15px_rgba(16,24,40,0.12)] rounded-[12px] flex flex-col gap-3 justify-between"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
            >
              {/* Ikonka chapda */}
              <div className="flex items-start gap-3">
                <div className="w-[50px] h-[50px] flex items-center justify-center rounded-[12px] bg-[#e9f3ff] shrink-0">
                  <span className="text-blue-700 text-[24px]">{c.icon}</span>
                </div>

                {/* Matn o‘ng tarafda */}
                <div className="overflow-hidden">
                  <h3 className="text-[18px] font-sans font-semibold leading-5">
                    {c.title}
                  </h3>
                  <p className="font-sans font-semibold text-[#171717c9] leading-5">
                    {c.desc}
                  </p>
                </div>
              </div>

              <button className="text-blue-600 cursor-pointer hover:underline">
                Ko‘proq o‘rganish
              </button>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default History;


