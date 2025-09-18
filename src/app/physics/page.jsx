"use client";
import { motion } from "framer-motion";

import {
  FaBookOpen,
  FaChalkboardTeacher,
  FaBolt,
  FaMagnet,
  FaAtom,
  FaMicroscope,
  FaGlobe,
} from "react-icons/fa";

const classes = Array.from({ length: 12 }, (_, i) => ({
  title: `${i + 1}-sinf`,
  desc: `Matematika darslari: ${i + 1}-sinf uchun maxsus materiallar.`,
  icon: <FaBookOpen />,
}));

const categories = [
  {
    title: "Olimpiada masalalari",
    desc: "Qiyin va qiziqarli masalalar to‘plami.",
    icon: <FaBolt />,
  },
  {
    title: "Qiziqarli fizika",
    desc: "O‘yinlar va noodatiy topshiriqlar.",
    icon: <FaMagnet />,
  },
  {
    title: "Fizika tarixi",
    desc: "Buyuk matematiklar va ularning kashfiyotlari.",
    icon: <FaAtom />,
  },
  {
    title: "Olovli intervyular",
    desc: "Matematika bo‘yicha motivatsion suhbatlar.",
    icon: <FaMicroscope />,
  },
  {
    title: "Yangiliklar",
    desc: "So‘nggi ilmiy yangiliklar va tadbirlar.",
    icon: <FaGlobe />,
  },
];

function Physics() {
  return (
    <div className="">
      <div className="bg-[linear-gradient(180deg,#f6fbff_0%,#eef6ff_100%)]">
        <section className="max-w-[1280px] mx-auto">
          <div className="flex items-start justify-between py-20 gap-10">
            <motion.div
              className="flex flex-col gap-5"
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h1 className="text-[44px] text-[#0f3b82] font-semibold leading-11">
                Fizika — tabiat qonunlari ilmi!
              </h1>

              <p className="text-[18px]">
                Fizika sizga tabiat hodisalarini tushunish imkonini
                beradi.Harakat, elektr,atom va koinot sirlarini shu yerda
                o'rganasiz
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
                <FaChalkboardTeacher className="text-blue-800 text-[24px]" />
                <div>
                  <p className="text-black font-bold text-[20px] leading-4">
                    80+
                  </p>
                  <p className="text-[#030303c7] font-semibold">
                    Interaktiv tajribalar
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="w-2/5 bg-[#042018] p-3 rounded-[20px] shadow-[0_10px_30px_rgba(4,32,18,0.35)]"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            >
              <svg
                className="flex flex-col text-white gap-5"
                viewBox="0 0 300 200"
              >
                <text x="10" y="40" fontSize="20" fill="rgba(255,255,255,0.85)">
                  F=ma
                </text>

                <text x="10" y="80" fontSize="18" fill="rgba(255,255,255,0.7)">
                  E=mc²
                </text>

                <text x="10" y="120" fontSize="18" fill="rgba(255,255,255,0.6)">
                  V=IR
                </text>

                <text x="10" y="160" fontSize="16" fill="rgba(255,255,255,0.5)">
                  λ = h/p
                </text>
              </svg>
            </motion.div>
          </div>
        </section>
      </div>

      {/* SINFLAR */}
      <section className="max-w-[1280px] mx-auto py-16">
        <h2 className="text-[42px] text-[#0f3b82] font-medium text-center">
          Sinflar
        </h2>

        <div className="flex items-center justify-between">
          {classes.map((c, i) => (
            <motion.div
              key={i}
              className="my-8"
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
        <div className="grid grid-cols-5 justify-between mt-7 gap-3">
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

export default Physics;
