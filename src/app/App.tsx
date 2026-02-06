import { motion } from "motion/react";
import { Heart } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function App() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [musicStarted, setMusicStarted] = useState(false);

  useEffect(() => {
    // Intentar reproducir automáticamente
    const playAudio = async () => {
      if (audioRef.current) {
        try {
          audioRef.current.volume = 0.5;
          await audioRef.current.play();
          setMusicStarted(true);
        } catch (error) {
          console.log("Autoplay bloqueado, esperando interacción del usuario");
        }
      }
    };

    setTimeout(playAudio, 500);
  }, []);

  // Función para iniciar música con interacción del usuario
  const handleStartMusic = async () => {
    if (audioRef.current && !musicStarted) {
      try {
        audioRef.current.volume = 0.5;
        await audioRef.current.play();
        setMusicStarted(true);
      } catch (error) {
        console.error("Error al reproducir música:", error);
      }
    }
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-red-50"
      onClick={handleStartMusic}
    >
      {/* Audio Background Music */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
      >
        <source src="/music/musica-romantica.mp3" type="audio/mpeg" />
      </audio>

      {/* Fondo decorativo con corazones flotantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ 
              y: "100vh", 
              x: `${Math.random() * 100}vw`,
              opacity: 0.2
            }}
            animate={{ 
              y: "-10vh",
              x: `${Math.random() * 100}vw`,
              rotate: 360
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: i * 2,
              ease: "linear"
            }}
          >
            <Heart 
              className="text-rose-400" 
              size={20 + Math.random() * 30}
              fill="currentColor"
            />
          </motion.div>
        ))}
      </div>

      {/* Tarjeta principal */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-2xl mx-4"
      >
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-12 border border-rose-100">
          {/* Corazón decorativo superior */}
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <Heart 
                className="text-red-500" 
                size={64}
                fill="currentColor"
              />
              <motion.div
                className="absolute inset-0"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Heart 
                  className="text-red-400" 
                  size={64}
                  fill="currentColor"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Título principal */}
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-center mb-12"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            <span className="text-5xl md:text-6xl lg:text-7xl text-rose-600">
              ¿Quieres ser mi
            </span>
            <br />
            <span className="text-6xl md:text-7xl lg:text-8xl text-red-500">
              San Valentín?
            </span>
          </motion.h1>

          {/* Separador decorativo */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 60 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="h-[2px] bg-gradient-to-r from-transparent to-rose-300"
            />
            <Heart className="text-rose-400" size={16} fill="currentColor" />
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 60 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="h-[2px] bg-gradient-to-l from-transparent to-rose-300"
            />
          </div>

          {/* Detalles del evento */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="space-y-6"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <div className="text-center">
              <p className="text-gray-500 text-sm uppercase tracking-widest mb-2">
                Fecha
              </p>
              <p className="text-2xl text-gray-800" style={{ fontFamily: "'Playfair Display', serif" }}>
                Sábado, 14 de Febrero
              </p>
            </div>

            <div className="text-center">
              <p className="text-gray-500 text-sm uppercase tracking-widest mb-2">
                Hora
              </p>
              <p className="text-2xl text-gray-800" style={{ fontFamily: "'Playfair Display', serif" }}>
                16:30
              </p>
            </div>

            <div className="text-center">
              <p className="text-gray-500 text-sm uppercase tracking-widest mb-2">
                Lugar
              </p>
              <p className="text-3xl text-rose-600 italic" style={{ fontFamily: "'Playfair Display', serif" }}>
                Sorpresa
              </p>
            </div>
          </motion.div>

          {/* Mensaje final decorativo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-600 italic" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Prepárate para una tarde especial
            </p>
            <div className="flex justify-center gap-2 mt-4">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut"
                  }}
                >
                  <Heart 
                    className="text-rose-400" 
                    size={14}
                    fill="currentColor"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Sombra decorativa */}
        <div className="absolute -inset-1 bg-gradient-to-r from-rose-400 to-red-400 rounded-3xl blur-2xl opacity-20 -z-10" />
      </motion.div>
    </div>
  );
}