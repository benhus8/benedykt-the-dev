"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const pageVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
      delay: 0.3,
    },
  },
};

export default function NotFoundPage() {
  const router = useRouter();

  const handleGoHome = () => {
    router.push("/");
  };

  return (
    <html>
      <body>
        <div className="flex flex-col justify-center items-center min-h-screen bg-primary-darkest text-primary-white text-center px-6">
          <motion.h1
            className="text-6xl sm:text-8xl md:text-9xl font-bold"
            initial="hidden"
            animate="visible"
            variants={pageVariants}
          >
            404
          </motion.h1>
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl font-semibold mt-4"
            initial="hidden"
            animate="visible"
            variants={pageVariants}
          >
            Oops! Page not found.
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg md:text-xl mt-2 mb-8"
            initial="hidden"
            animate="visible"
            variants={pageVariants}
          >
            It seems like the page you're looking for doesn't exist.
          </motion.p>
          <motion.button
            onClick={handleGoHome}
            className="px-6 py-2 sm:px-8 sm:py-3 bg-primary-light text-primary-darkest font-semibold rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 15,
              delay: 0.6,
            }}
          >
            Go back to Home
          </motion.button>
        </div>
      </body>
    </html>
  );
}
