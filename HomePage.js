import React from "react";
import { motion } from "framer-motion";

const shows = [
  {
    title: "The Fire Oracle",
    description: "An immersive journey into ancient legends and fire rituals.",
    duration: "90 minutes",
    dates: "Apr 12 - May 10",
    poster: "https://via.placeholder.com/300x400?text=Fire+Oracle"
  },
  {
    title: "Whispers of the Mountain",
    description: "A mystical tale told through sound and silence.",
    duration: "80 minutes",
    dates: "Apr 15 - May 12",
    poster: "https://via.placeholder.com/300x400?text=Mountain+Whispers"
  },
  {
    title: "The Time Weaver",
    description: "Bending time through music and storytelling.",
    duration: "85 minutes",
    dates: "Apr 18 - May 20",
    poster: "https://via.placeholder.com/300x400?text=Time+Weaver"
  },
  {
    title: "Night of Legends",
    description: "A powerful rooftop experience under the stars.",
    duration: "100 minutes",
    dates: "Apr 22 - May 25",
    poster: "https://via.placeholder.com/300x400?text=Night+of+Legends"
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white font-sans p-6">
      <motion.h1
        className="text-4xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Welcome to The House of Legends
      </motion.h1>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
      >
        {shows.map((show, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <img src={show.poster} alt={show.title} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{show.title}</h2>
              <p className="text-sm text-gray-300 mb-1">{show.description}</p>
              <p className="text-sm">Duration: {show.duration}</p>
              <p className="text-sm">Dates: {show.dates}</p>
              <button className="mt-4 w-full bg-indigo-600 hover:bg-indigo-500 transition-colors text-white py-2 rounded-xl text-sm font-semibold">
                Choose this Show
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}