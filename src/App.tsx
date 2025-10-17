import { FlaskConical, Sparkles, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import { useMemo } from 'react';

function App() {
  // ⭐ Generate consistent stars only once
  const stars = useMemo(
    () =>
      Array.from({ length: 40 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 5,
      })),
    []
  );

  // ✨ Animation preset
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen flex items-center justify-center px-4 sm:px-6 transition-colors duration-500">
      {/* 🌌 Twinkling Stars Background */}
      <div className="absolute inset-0 overflow-hidden">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute bg-white dark:bg-blue-300 rounded-full opacity-80"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: star.delay,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* 🚀 Main Content */}
      <motion.section
        className="relative z-10 max-w-4xl text-center py-16 sm:py-20"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="flex justify-center mb-6 sm:mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: [0.68, -0.55, 0.27, 1.55],
            }}
          >
            <Rocket className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 dark:text-blue-400 transition-transform hover:scale-110" />
          </motion.div>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4 sm:mb-6 px-2"
        >
          Welcome to our website
        </motion.h1>

        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 px-4"
        >
          I'm Aum - I'm a fullstack developer, game designer, film cinematographer, photography, music producer and foreign people in the bay area.
          I'm interested in development, moderation, and building thriving online communities.
          I work on random projects in my free time, a lot involving Game Development!
        </motion.p>

        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-2"
        >
          <a
            href="https://github.com/dekthaiinchina"
            target="_blank"
            rel="noopener noreferrer"
            title="Go to our GitHub"
          >
            <button
              aria-label="Go to our GitHub"
              className="w-full sm:w-auto bg-blue-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-base sm:text-lg hover:bg-blue-700 transition transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              <span className="inline-flex items-center gap-2">
                <FlaskConical className="w-5 h-5" /> GitHub
              </span>
            </button>
          </a>

          <a href="mailto:contactme@dekthaiinchina.com" title="Email us">
            <button
              aria-label="Email us"
              className="w-full sm:w-auto bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-base sm:text-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              <span className="inline-flex items-center gap-2">
                <Sparkles className="w-5 h-5" /> Contact us
              </span>
            </button>
          </a>
        </motion.div>
      </motion.section>
    </div>
  );
}

export default App;
