"use client";

import { motion } from "framer-motion";
import Link from "next/link";


const HeroSectionBG = () => {
  return (
    <section className="relative space-y-6 pb-12 pt-10 md:pb-16 md:pt-14 lg:py-36 overflow-hidden mt-10">
      {/* Background Glow Effect */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-72"
      >
        <motion.div
          initial={{ opacity: 0.3, scale: 1 }}
          animate={{ opacity: 0.7, scale: 1.1 }}
          transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
          style={{
            clipPath:
              "polygon(50% 0%, 61% 19%, 100% 23%, 77% 50%, 100% 77%, 61% 81%, 50% 100%, 39% 81%, 0% 77%, 23% 50%, 0% 23%, 39% 19%)",
          }}
          className="relative left-1/2 aspect-[1100/600] w-[38rem] -translate-x-1/2 rotate-[20deg] bg-gradient-to-bl from-[#ff00ff] via-[#00eaff] to-[#ff00ff] opacity-50 drop-shadow-2xl sm:w-[72rem]"
        />
      </div>

      {/* Content Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="container mx-auto flex max-w-[64rem] flex-col items-center gap-5 text-center relative isolate"
      >
        {/* Banner Text */}
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="rounded-2xl bg-muted px-5 py-2 text-sm font-medium border shadow-xl backdrop-blur-md"
        >
          🚀 Hey, Welcome to Tutor LMS!
        </motion.span>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-heading text-4xl font-extrabold sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-br from-white to-gray-300 bg-clip-text drop-shadow-md text-black"
        >
          Educate. Elevate. Empower.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="max-w-[42rem] leading-relaxed text-lg sm:text-xl text-black opacity-90 sm:leading-8 my-2"
        >
          “One lesson, many paths — that’s where real learning lives.”
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex items-center gap-4 flex-wrap justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/courses"
              className="px-6 py-3 text-md font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl shadow-lg transition-transform duration-300"
            >
              Explore Courses
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href=""
              className="px-6 py-3 text-md font-semibold border border-white text-black rounded-xl shadow-lg backdrop-blur-md hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Become An Instructor
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSectionBG