"use client";
import { motion } from "framer-motion";
import team1 from "../../../public/images/team1.webp";
import team2 from "../../../public/images/team2.webp";
import team3 from "../../../public/images/team3.webp";
import {
  FaHandsHelping,
  FaLaptopCode,
  FaRocket,
  FaUsers,
} from "react-icons/fa";
import Image from "next/image";
import { useMemo } from "react";
import { useRouter } from "next/navigation";

function About() {
  const items = useMemo(
    () => [
      {
        icon: <FaUsers />,
        title: "Professional jamoa",
        desc: "O‘z sohasida tajribaga ega ustozlar.",
      },
      {
        icon: <FaLaptopCode />,
        title: "IT va Ta’lim",
        desc: "Dasturlash, matematika va zamonaviy fanlar.",
      },
      {
        icon: <FaRocket />,
        title: "Kelajak kasblari",
        desc: "O‘quvchilarni XXI asr ko‘nikmalariga tayyorlaymiz.",
      },
      {
        icon: <FaHandsHelping />,
        title: "Doimiy qo‘llab-quvvatlash",
        desc: "Har bir o‘quvchiga individual yondashuv.",
      },
    ],
    []
  );

  const router = useRouter();

  const contactPageBtn = () => {
    router.push("/contact");
  };

  return (
    <div className="bg-[#F9F9F9]">
      <div className="bg-[linear-gradient(120deg,#1e3a8a,#3b82f6,#60a5fa)] rounded-b-[100px]">
        <section className="max-w-[1280px] mx-auto py-12">
          <motion.div
            className="flex flex-col gap-5 w-3/5 mx-auto"
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-[44px] font-semibold text-center text-white">
              Biz haqimizda
            </h1>
            <p className="text-[24px] font-semibold text-center text-white leading-8">
              Biz — zamonaviy ta’limni yoshlar hayotiga olib kirayotgan
              jamoamiz. Maqsadimiz — farzandlarimizni texnologiya va bilim
              orqali kelajakka yo‘naltirish.
            </p>
          </motion.div>
        </section>
      </div>

      <section className="max-w-[1280px] mx-auto py-12 text-center">
        <motion.h2
          className="text-[36px] font-bold text-[#1a237e] mb-3.5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Bizning missiyamiz
        </motion.h2>
        <motion.p
          className="text-[#374151] font-medium italic text-[20px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          “Farzandingizdan telefonni tortib olmang — uni kelajakka
          yo‘naltiring!”
        </motion.p>
      </section>

      <section className="max-w-[1280px] mx-auto pb-12 flex flex-col gap-3">
        <div>
          <p className="text-[20px] font-semibold text-[#374151]">
            {" "}
            ✨ Telemaktab — Bizning kurslarimiz
          </p>
          <p>
            📚 Telemaktab sizga zamonaviy ta’lim muhitida o‘quvchilar uchun eng
            kerakli fanlarni qulay va samarali shaklda o‘rganish imkonini taqdim
            etadi. Bizning asosiy maqsadimiz — bolalarning bilimga bo‘lgan
            qiziqishini kuchaytirish va ularni kelajakka tayyorlash.
          </p>
        </div>

        <div>
          <p> ✨ Ingliz tili</p>
          <p>
            🔹 Amaliy suhbatlar, interaktiv mashg‘ulotlar va zamonaviy
            metodikalar.
          </p>
          <p>
            🔹 Farzandingiz ingliz tilida erkin so‘zlashi va xalqaro
            imtihonlarga tayyor bo‘lishi uchun mustahkam poydevor.
          </p>
        </div>

        <div>
          <p> ✨ Matematika</p>
          <p>
            🔹 Mantiqiy fikrlashni rivojlantirish va hisoblash ko‘nikmalarini
            mustahkamlash.
          </p>
          <p>
            🔹 O‘quvchilarni nafaqat maktab darslariga, balki olimpiadalar va
            test imtihonlariga tayyorlash.
          </p>
        </div>

        <div>
          <p> ✨ Fizika</p>
          <p>
            🔹 Tajribalar va hayotiy misollar orqali fizikaning murakkab
            tushunchalarini sodda va qiziqarli tarzda.
          </p>
          <p>
            🔹 Farzandingiz ilm-fan olamiga qadam qo‘yadi va tabiat
            qonuniyatlarini amalda bilib oladi.
          </p>
        </div>

        <div>
          <p> ✨ Rus tili</p>
          <p>
            🔹 To‘g‘ri talaffuz, grammatikani chuqur o‘rganish va suhbatlashish
            ko‘nikmalarini shakllantirish.
          </p>
          <p>
            🔹 O‘quvchilar rus tilida erkin muloqot qilishi va kitob
            mutolaasidan zavq olishi uchun sharoit yaratiladi.
          </p>
        </div>

        <div>
          <p> 🌟 Telemaktabda har bir kurs:</p>
          <p>1{")"} Interaktiv darslar</p>
          <p>2{")"} Qiziqarli topshiriqlar</p>
          <p>3{")"} Tajribali ustozlar</p>
          <p>4{")"} Onlayn va oflayn qulayliklar bilan ta’minlangan.</p>
          <p>
            Biz bilan bilim sari qadam tashlang — kelajak sizning qo‘lingizda!
            🚀
          </p>
        </div>
      </section>

      <section className="bg-white py-15">
        <div className="flex items-center gap-5 max-w-[1280px] mx-auto">
          {items?.map((item, i) => (
            <motion.div
              key={i}
              className="py-[32px] bg-[#000000c8] px-[24px] rounded-[20px] flex flex-col text-center shadow-[0px_4px_12px_rgba(0,0,0,0.06)] text-white"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
            >
              <div className="flex justify-center text-[32px] text-blue-600 mb-5">
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto py-12 text-center">
        <h2 className="text-[36px] font-bold text-[#1a237e] mb-3.5">
          Bizning jamoa
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-8">
          {[
            { name: "Yahyo", role: "Founder & Mentor", img: team1 },
            { name: "Dilshod", role: "Frontend Developer", img: team2 },
            { name: "Aziza", role: "Content Creator", img: team3 },
          ].map((member, i) => (
            <motion.div
              key={i}
              className="py-8 rounded-2xl shadow-md bg-white"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <Image
                src={member.img}
                alt={member.name}
                className="h-[120px] w-[120px] mx-auto rounded-full object-cover border-[4px] border-[#3b82f6]"
              />
              <h3 className="mt-4 text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-[linear-gradient(-120deg,#133db1,#3b82f6)] py-15">
        <div className="max-w-[1280px] mx-auto">
          <motion.div
            className="flex flex-col justify-center"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[36px] font-bold text-white text-center mb-2.5">
              Biz bilan bog‘laning
            </h2>

            <p className="text-[22px] font-semibold text-white text-center">
              O‘quvchilar uchun eng yaxshi ta’limni birgalikda yarataylik!
            </p>

            <motion.button
              onClick={contactPageBtn}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="relative h-[48px] px-5 rounded-[25px] mt-5 cursor-pointer w-[160px] text-white text-[18px] mx-auto
             bg-gradient-to-r from-indigo-600 to-blue-500
             bg-[length:200%_200%] bg-left transition-all
             hover:bg-right"
            >
              Bog‘lanish
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default About;


