"use client";
import { motion } from "framer-motion";
import teacher1 from "../../../public/images/teacher.webp";

import {
  FaBookOpen,
  FaMicroscope,
  FaDna,
  FaSeedling,
  FaLeaf,
  FaHeartbeat,
} from "react-icons/fa";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

function Biology() {
  const [isMd, setIsMd] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMd(window.innerWidth >= 768); // md breakpoint
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        title: "Hujayra va DNK",
        desc: "Mikroskop ostidagi hayot sirlari.",
        icon: <FaMicroscope />,
      },
      {
        title: "Genetika",
        desc: "Irsiyat va nasl haqida qiziqarli ma’lumotlar.",
        icon: <FaDna />,
      },
      {
        title: "O‘simliklar olami",
        desc: "Fotosintez va o‘simliklarning ahamiyati.",
        icon: <FaSeedling />,
      },
      {
        title: "Hayvonot dunyosi",
        desc: "Turli hayvonlarning yashash tarzi.",
        icon: <FaLeaf />,
      },
      {
        title: "Inson organizmi",
        desc: "Organlar, tizimlar va sog‘lom turmush.",
        icon: <FaHeartbeat />,
      },
    ],
    []
  );

  const animationText = useMemo(
    () => [
      {
        text: "DNA → RNA → Protein (Markaziy dogma)",
        y: 30,
        size: isMd ? 16 : 10,
        opacity: 0.85,
      },
      {
        text: "Fotosintez: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂",
        y: 70,
        size: isMd ? 16 : 10,
        opacity: 0.7,
      },
      {
        text: "ATP = hujayraning energiya valyutasi",
        y: 110,
        size: isMd ? 14 : 10,
        opacity: 0.6,
      },
      {
        text: "Mitosis: Prophase → Metaphase → Anaphase",
        y: 150,
        size: isMd ? 14 : 10,
        opacity: 0.5,
      },
    ],
    []
  );

  return (
    <div>
      <div className="bg-[linear-gradient(180deg,#f6fbff_0%,#eef6ff_100%)] h-[500px] max-xl:px-5 max-lg:h-auto max-lg:min-h-[500px]">
        <section className="max-w-[1280px] mx-auto">
          <div className="flex items-start justify-between pt-20 gap-6 max-lg:flex-col max-lg:py-10">
            <motion.div
              className="flex flex-col gap-5 relative"
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h1 className="text-[40px] text-[#0f3b82] font-semibold leading-11 max-xl:text-[32px] max-sm:leading-9 max-sm:text-[28px]">
                Biologiya — hayot ilmi!
              </h1>

              <p className="text-[18px]">
                Bu yerda biologiyani qiziqarli va tushunarli usulda o‘rganasiz.
                Darslarimiz interaktiv, tajribaviy va o‘quvchilar uchun qulay.
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
                <FaBookOpen className="text-blue-800 text-[24px]" />
                <div>
                  <p className="text-black font-bold text-[20px] leading-4">
                    90+
                  </p>
                  <p className="text-[#030303c7] font-semibold">
                    Interaktiv mashg‘ulotlar
                  </p>
                </div>
              </div>

              <Image
                src={teacher1}
                alt="teacher"
                width={320}
                // height={300}
                className="absolute -right-[5%] top-[30%] max-lg:top-[120%] max-lg:-left-[5%] max-md:-left-[16%] max-sm:hidden"
              />
            </motion.div>

            <motion.div
              className="w-3/5 bg-[#042018] relative p-3 rounded-[20px] shadow-[0_10px_30px_rgba(4,32,18,0.35)] max-xl:w-2/5 max-lg:w-3/5 max-lg:ml-auto max-sm:w-full max-lg:overflow-hidden"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            >
              <div className="w-full max-md:overflow-hidden">
                <svg
                  className="flex flex-col text-white h-[280px]"
                  viewBox="0 0 350 200"
                  preserveAspectRatio="xMinYMin meet"
                >
                  {animationText?.map((item, textIndex) => (
                    <motion.text
                      key={textIndex}
                      x="5"
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
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* SINFLAR */}
      <section className="max-w-[1280px] mx-auto pt-8 max-xl:px-5">
        <h2 className="text-[42px] text-[#0f3b82] font-medium text-center max-lg:text-[32px]">
          Sinflar
        </h2>

        {/* salom */}
        <div className="flex items-center justify-between max-lg:overflow-auto max-lg:gap-3">
          {classes.map((c, i) => (
            <motion.div
              key={i}
              className="mt-6 mb-8 max-lg:my-4"
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <button
                className="w-[80px] h-[80px] max-lg:w-[70px] max-lg:h-[70px] shadow-[0_0_20px_rgba(0,0,0,0.4),-5px_-5px_20px_rgba(51, 51, 51, 0.4)] hover:scale-105 bg-[#f5f5f5] cursor-pointer rounded-full
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
        {/* salom */}
      </section>

      {/* ASOSIY YO‘NALISHLAR */}
      <section className="max-w-[1280px] mx-auto pb-16 max-xl:px-5">
        <h2 className="text-[38px] text-[#0f3b82] font-semibold text-center max-lg:text-[32px] max-lg:mt-3">
          Asosiy yo‘nalishlar
        </h2>

        <div className="grid grid-cols-5 justify-between mt-10 gap-3 max-lg:mt-8 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
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

export default Biology;
