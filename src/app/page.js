'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import React from "react";
import "./globals.css";
import { Linkedin, Facebook, Github, Mail } from "lucide-react"; // icons for social links
import { X } from "lucide-react"; // black X icon
import Image from "next/image";
import { motion } from "framer-motion";

 const projects = [
    {
      src: "/aop.png",
      title: "ARSENAL OF PHONES",
      desc: "First practice project: a web app for phone shopping (2023).",
    },
    {
      src: "/byn.png",
      title: "Barangay Youth Network (BYN) HUB",
      desc: "A Youth Socio-Demographics Analysis System for Sangguniang Kabataan (SK) Federation.",
    },
    {
      src: "/arr.png",
      title: "ARETEX RISK RADAR",
      desc: "Predicting and Mapping High-Risk Areas Using Spatiotemporal Data.",
    },
    {
      src: "/arduino.jpg",
      title: "Water Irrigation Prototype (Arduino)",
      desc: "Automatic Water Irrigation System Using Arduino.",
    },
  ];

export default function Home() {
  return (
    <div>
{/* Home Section */}
<section
  id="home"
  className="flex flex-col items-center justify-center min-h-screen pb-9"
>
  {/* Header Section */}
  <motion.div
    className="flex flex-col items-start mt-20 mr-[60px] sm:mr-[30px] md:mr-[60px]"
    initial={{ x: -150, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 1, ease: "easeOut" }}
  >
    <h2 className="text-gray-600 font-semibold text-2xl sm:text-3xl md:text-4xl mr-4 sm:mr-6 md:mr-9">
      <span className="text-shadow-lg">Web App{" "}</span>
      <span className="text-blue-950 text-4xl sm:text-6xl md:text-7xl ml-3 sm:ml-4 md:ml-5 font-extrabold">
        DEVELOPER
      </span>
    </h2>
  </motion.div>

  {/* Portfolio Title */}
  <motion.h1
    className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-8 text-outline-depth text-center sm:text-right sm:ml-[150px] md:ml-[280px]"
    initial={{ x: 150, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
  >
    PORTFOLIO
  </motion.h1>

  {/* Content Section */}
  <motion.div
    className="grid grid-cols-1 sm:grid-cols-2 justify-center gap-6 sm:space-x-5"
    initial={{ y: 100, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
  >
    <p className="text-base sm:text-lg text-gray-600 text-center sm:mt-[50px] md:mt-[100px]">
      Explore my projects, learn about me, <br /> and get in touch!
    </p>
    <Image
      src="/p1.png"
      alt="Portfolio"
      width={400}
      height={400}
      className="w-48 sm:w-60 md:w-72 h-auto mb-8 shadow-lg rounded-lg mx-auto sm:mx-0"
    />
  </motion.div>

  {/* Footer */}
  <footer className="absolute inset-x-0 bottom-0 p-4">
    {/* Rotated Text (bottom-left) */}
    <motion.div
      className="absolute bottom-35 left-4 text-gray-500 transform rotate-45 origin-left"
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <p className="font-semibold text-blue-950 underline text-xs sm:text-sm md:text-sm lg:text-sm">
        FRESH GRAD * FRESH GRAD
      </p>
    </motion.div>

    {/* Social Icons (bottom-right) */}
    <motion.div
      className="absolute bottom-6 right-4 flex space-x-4 text-blue-950"
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0 }} // <- Fixed
      transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
    >
      <a
        href="https://www.linkedin.com/in/jonelle-manalastas-86937b36a/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-700 transition"
      >
        <Linkedin size={22} />
      </a>
      <a
        href="https://www.facebook.com/jonelle.manalastas.2025"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-400 transition"
      >
        <Facebook size={22} />
      </a>
      <a
        href="https://github.com/Joenll"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-gray-500 transition"
      >
        <Github size={22} />
      </a>
    </motion.div>
  </footer>
</section>


{/* Projects Section */}
<section
  id="projects"
  className="min-h-screen flex flex-col items-center border-t border-gray-500 relative"
>
  {/* Title under the border */}
  <header className="w-full grid grid-flow-col auto-cols-max justify-center items-center mt-6 overflow-hidden">
    {Array.from({ length: 20 }).map((_, i) => (
      <motion.div
        key={i}
        className="flex items-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: i * 0.05, duration: 0.6 }}
      >
        <h1 className="text-2xl font-bold whitespace-nowrap text-outline-depth2">
          WORKS
        </h1>
        <X size={22} className="text-gray-400 mx-2" />
      </motion.div>
    ))}
  </header>

  {/* Carousel with border around entire content */}
  <div className="w-full max-w-6xl mt-10 px-4 border border-gray-600 rounded-xl p-6 bg-[#FAF7F3]">
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{
        clickable: true,
        el: ".custom-pagination",
      }}
    >
      {projects.map((proj, i) => (
        <SwiperSlide
          key={i}
          className="flex flex-col items-center justify-center text-center p-8"
        >
          {/* Animated Image */}
          <motion.div
            className="w-full h-[260px] flex items-center justify-center mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Image
              src={proj.src}
              alt={proj.title}
              width={650}
              height={320}
              className="object-contain max-h-full rounded-3xl"
            />
          </motion.div>

          {/* Animated Text */}
          <motion.div
            className="flex flex-col items-center justify-center flex-grow"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <div className="px-4 py-2 rounded-lg font-sans font-extrabold text-lg mb-2 border border-gray-400 text-blue-950 cursor-default select-none">
              {proj.title}
            </div>
            <p className="text-base text-gray-600 mt-1 max-w-md">{proj.desc}</p>
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>

    {/* Pagination dots outside */}
    <div className="custom-pagination flex justify-center mt-6"></div>

    {/* Hint Text */}
    <motion.p
      className="text-sm text-gray-500 text-center mt-2"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      Swipe or use arrows to view more projects →
    </motion.p>
  </div>
</section>



{/* About Section */}
<section
  id="about"
  className="relative min-h-screen border-t border-gray-500 flex items-center justify-center"
  style={{
    background: "linear-gradient(to bottom, #FAF7F3 50%, #1f2937 50%)",
  }}
>
  {/* Grain overlay for gray part */}
  <div
    className="absolute bottom-0 w-full h-1/2 pointer-events-none"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
      backgroundRepeat: "repeat",
    }}
  ></div>

  {/* Container for About + Cards */}
  <div className="relative lg:absolute lg:top-1/2 lg:transform lg:-translate-y-1/2 flex flex-col lg:flex-row gap-8 items-start px-4 lg:px-16">

    {/* About Me Column */}
    <motion.div
      className="w-full lg:w-64 flex flex-col justify-center text-left lg:-translate-y-24"
      initial={{ x: -150, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4 lg:mb-6">About Me</h1>
      <p className="text-sm sm:text-md lg:text-md text-gray-600">
        My name is Jonelle Manalastas, and I&apos;m a 23-year-old aspiring developer that is passionate about technology and continuous learning. I&apos;ve worked in web and mobile development before, and I want to continue working on creative and meaningful projects.
      </p>
    </motion.div>

    {/* Cards Container */}
    <div className="flex flex-col sm:flex-row gap-6 lg:gap-8 mt-8 lg:mt-0">
      {/* Card 1 - Technical Skills */}
      <motion.div
        className="bg-[#FAF7F3] border border-gray-600 shadow-lg p-6 w-full sm:w-72 h-auto max-h-[500px] overflow-y-auto flex flex-col justify-start -translate-y-4 sm:-translate-y-8"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      >
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 text-center">Technical Skills</h2>
        <ul className="flex flex-col gap-2 text-gray-800 list-inside">
          <li className="flex items-start gap-2"><span className="text-blue-950">•</span> Frontend Developer: Responsive, user-friendly interfaces</li>
          <li className="flex items-start gap-2"><span className="text-blue-950">•</span> Programming Languages: JavaScript, C++, PHP, HTML & CSS</li>
          <li className="flex items-start gap-2"><span className="text-blue-950">•</span> Frameworks/Libraries: Vue.js, React.js, Next.js, Laravel, Flutter & Ionic</li>
          <li className="flex items-start gap-2"><span className="text-blue-950">•</span> Backend Experience: Next.js & Laravel for API integration and server-side functionality</li>
        </ul>
      </motion.div>

      {/* Card 2 - Tools & Platforms */}
      <motion.div
        className="bg-[#FAF7F3] border border-gray-600 shadow-lg p-6 w-full sm:w-72 h-auto max-h-[500px] overflow-y-auto flex flex-col justify-start translate-y-4 sm:translate-y-8"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
      >
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 text-center">Tools & Platforms</h2>
        <ul className="flex flex-col gap-2 text-gray-800 list-inside">
          <li className="flex items-start gap-2"><span className="text-blue-950">•</span> Microsoft Office, WPS Office</li>
          <li className="flex items-start gap-2"><span className="text-blue-950">•</span> Figma, Canva</li>
          <li className="flex items-start gap-2"><span className="text-blue-950">•</span> Git, GitHub, VS Code</li>
        </ul>
      </motion.div>

      {/* Card 3 - Soft Skills */}
      <motion.div
        className="bg-[#FAF7F3] border border-gray-600 shadow-lg p-6 w-full sm:w-72 h-auto max-h-[500px] overflow-y-auto flex flex-col justify-start -translate-y-4 sm:-translate-y-8"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
      >
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 text-center">Soft Skills</h2>
        <ul className="flex flex-col gap-2 text-gray-800 list-inside">
          <li className="flex items-start gap-2"><span className="text-blue-950">•</span> Flexible, hardworking, and eager to learn</li>
          <li className="flex items-start gap-2"><span className="text-blue-950">•</span> Good listener</li>
          <li className="flex items-start gap-2"><span className="text-blue-950">•</span> Responsible team member</li>
        </ul>
      </motion.div>
    </div>
  </div>
</section>

{/* Contact Section */}
<section
  id="contact"
  className="flex flex-col items-center justify-center min-h-screen border-t border-gray-500 pb-20"
>
  {/* Contact Title */}
  <motion.h1
    className="text-6xl sm:text-8xl md:text-9xl font-extrabold text-outline-depth text-center mb-12"
    initial={{ y: -100, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 1, ease: "easeOut" }}
  >
    CONTACT ME
  </motion.h1>

  {/* Contact Card */}
  <motion.div
    className="bg-[#FAF7F3] border border-gray-400 rounded-3xl shadow-lg p-10 flex flex-col items-center space-y-6 w-80 sm:w-96 md:w-1/3"
    initial={{ scale: 0.8, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
  >
    <h2 className="text-2xl font-semibold text-gray-800">Connect with me</h2>
    
    {/* Social Links */}
    <motion.div
      className="flex space-x-6 text-blue-950"
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
    >
      <a
        href="https://www.linkedin.com/in/jonelle-manalastas-86937b36a/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-700 transition"
      >
        <Linkedin size={28} />
      </a>
      <a
        href="https://www.facebook.com/jonelle.manalastas.2025"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-400 transition"
      >
        <Facebook size={28} />
      </a>
      <a
        href="https://github.com/Joenll"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-gray-500 transition"
      >
        <Github size={28} />
      </a>
    </motion.div>

    {/* Email */}
    <motion.p
      className="flex items-center text-gray-600 text-center space-x-2"
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
    >
      <Mail size={20} />
      <span className="font-medium">manalastasjonelle@gmail.com</span>
    </motion.p>
  </motion.div>
</section>


{/* Footer */}
<footer className="relative bg-gray-800 text-white py-6 flex justify-center items-center">
  {/* Grain overlay */}
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
      backgroundRepeat: "repeat",
    }}
  ></div>

  <p className="text-center text-sm sm:text-base relative z-10">© 2025 Jonelle.</p>
</footer>



    </div>
  );
}
