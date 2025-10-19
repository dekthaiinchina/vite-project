import { FlaskConical, Sparkles, Rocket, Music2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';
import { useMemo, useRef, useState, useEffect } from 'react';

function App() {
  // 🌟 Stars
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

  // 🎵 Music setup
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const audio = new Audio('/audio/bgm.mp3');
    audio.loop = true;
    audio.volume = 0;
    audioRef.current = audio;

    audio.play().catch(() => {});

    const handleFirstInteraction = async () => {
      if (!audioRef.current || hasInteracted) return;
      try {
        await audioRef.current.play();
        fadeVolume(0.3, 1500);
        setIsPlaying(true);
        setHasInteracted(true);
        localStorage.setItem('musicPlaying', 'true');
      } catch (err) {
        console.warn('Autoplay blocked until user interacts.');
      }
    };

    window.addEventListener('click', handleFirstInteraction, { once: true });
    return () => window.removeEventListener('click', handleFirstInteraction);
  }, [hasInteracted]);

  const fadeVolume = (target: number, duration = 1000) => {
    if (!audioRef.current) return;
    const steps = 20;
    const stepTime = duration / steps;
    const diff = (target - volume) / steps;

    let current = volume;
    const fade = setInterval(() => {
      current += diff;
      if (!audioRef.current) {
        clearInterval(fade);
        return;
      }
      audioRef.current.volume = Math.max(0, Math.min(1, current));
      setVolume(audioRef.current.volume);

      if ((diff > 0 && current >= target) || (diff < 0 && current <= target)) {
        clearInterval(fade);
      }
    }, stepTime);
  };

  const toggleMusic = async () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      fadeVolume(0, 800);
      setTimeout(() => audioRef.current?.pause(), 800);
      setIsPlaying(false);
      localStorage.setItem('musicPlaying', 'false');
    } else {
      try {
        await audioRef.current.play();
        fadeVolume(0.3, 800);
        setIsPlaying(true);
        localStorage.setItem('musicPlaying', 'true');
      } catch {
        console.warn('Autoplay blocked — needs user gesture');
      }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative overflow-hidden min-h-screen flex items-center justify-center px-4 sm:px-6 transition-colors duration-500 select-none">

      {/* 🎥 Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/video/bg.mp4" type="video/mp4" />
      </video>

      {/* 🌌 Stars Overlay */}
      <div className="absolute inset-0 overflow-hidden z-10 pointer-events-none">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute bg-white/80 dark:bg-blue-300 rounded-full opacity-80 blur-[1px]"
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

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/30 dark:bg-black/50 z-20"></div>

      {/* 🎚️ Music Toggle */}
      <motion.button
        onClick={toggleMusic}
        className="absolute top-5 right-5 z-50 bg-white/80 dark:bg-gray-800/80 p-3 rounded-full shadow-md hover:scale-110 transition-transform"
        whileTap={{ scale: 0.9 }}
        title={isPlaying ? 'Pause Music' : 'Play Music'}
      >
        {isPlaying ? (
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Music2 className="w-5 h-5 text-blue-600 dark:text-blue-300" />
          </motion.div>
        ) : (
          <VolumeX className="w-5 h-5 text-gray-700 dark:text-gray-300" />
        )}
      </motion.button>

      {/* 🚀 Main Section */}
      <motion.section
        className="relative z-30 max-w-4xl text-center py-16 sm:py-20"
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
            <Rocket className="w-10 h-10 sm:w-12 sm:h-12 text-blue-400 dark:text-blue-300 transition-transform hover:scale-110" />
          </motion.div>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 px-2 drop-shadow-lg"
        >
          Welcome to our website
        </motion.h1>

        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-base sm:text-lg md:text-xl text-gray-100 mb-6 sm:mb-8 px-4 drop-shadow-md"
        >
          I'm Aum — a fullstack developer, game designer, cinematographer,
          photographer, and music producer based in the Bay Area. I love building
          creative communities and working on unique game projects.
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
          >
            <button className="w-full sm:w-auto bg-blue-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-base sm:text-lg hover:bg-blue-700 transition transform hover:scale-105 shadow-md hover:shadow-lg">
              <span className="inline-flex items-center gap-2">
                <FlaskConical className="w-5 h-5" /> GitHub
              </span>
            </button>
          </a>

          <a href="mailto:contactme@dekthaiinchina.com">
            <button className="w-full sm:w-auto bg-gray-200/80 dark:bg-gray-700/80 text-gray-900 dark:text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-base sm:text-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition transform hover:scale-105 shadow-md hover:shadow-lg">
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
