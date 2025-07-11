'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function HappyBirthday() {
  const router = useRouter();

  return (
    <main className="bg-gradient-to-br from-purple-800 via-indigo-900 to-black min-h-screen flex flex-col items-center justify-center text-white p-6">
      <motion.div
        className="text-center max-w-2xl"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Happy Birthday, Moon 🌙
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl mb-8 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          On this special day, I want to remind you how much you mean to me.
          Every journal, every memory, every moment together—has been a
          beautiful chapter in our story. Here's to many more 💫
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push('/moon/calendar')}
          className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-2xl text-lg font-medium transition duration-300 shadow-lg"
        >
          📅 View Our Journal Calendar
        </motion.button>
      </motion.div>
    </main>
  );
}
