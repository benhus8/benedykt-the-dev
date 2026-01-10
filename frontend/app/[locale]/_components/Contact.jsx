"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Copy, Check, Linkedin, ArrowRight, Github } from "lucide-react";

export const Contact = () => {
  const t = useTranslations("contact");
  const [isCopied, setIsCopied] = useState(false);
  const email = "benedykt.huszcza@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section className="relative w-full py-24 px-4 md:px-8 bg-primary-darkest overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary-light/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative group rounded-3xl p-1"
        >
          {/* Gradient Border */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-light/50 via-primary-base/50 to-primary-light/50 rounded-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 blur-sm" />

          {/* Card Content */}
          <div className="relative bg-[#050505]/80 backdrop-blur-2xl rounded-[22px] p-8 md:p-16 text-center border border-white/5 overflow-hidden shadow-2xl">
            {/* Subtle Texture */}
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay pointer-events-none" />

            {/* Internal Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-gradient-to-b from-primary-light/5 to-transparent blur-[60px] opacity-60" />

            <h2 className="text-3xl md:text-6xl font-black mb-6 tracking-tight relative z-10">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-white via-primary-light to-primary-white bg-300% animate-gradient">
                {t("title")}
              </span>
            </h2>

            <p className="text-secondary-grayLight text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed relative z-10">
              {t("subtitle")}
            </p>

            {/* Email Copy Box */}
            <div className="relative max-w-lg mx-auto mb-12 group/email">
              <div
                onClick={handleCopy}
                className="flex items-center justify-between gap-4 p-4 md:p-5 rounded-2xl bg-black/40 border border-primary-white/10 hover:border-primary-light/30 transition-all duration-300 cursor-pointer shadow-lg"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-10 h-10 rounded-full bg-primary-light/10 flex items-center justify-center text-primary-light">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-lg md:text-xl text-primary-white font-mono truncate">
                    {email}
                  </span>
                </div>

                <div className="relative">
                  <AnimatePresence mode='wait'>
                    {isCopied ? (
                      <motion.div
                        key="check"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        className="text-primary-light"
                      >
                        <Check className="w-6 h-6" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="copy"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        className="text-secondary-gray group-hover/email:text-primary-white transition-colors"
                      >
                        <Copy className="w-6 h-6" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <AnimatePresence>
                {isCopied && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute -top-12 left-1/2 -translate-x-1/2 bg-primary-light text-black font-bold text-sm py-1 px-3 rounded-full shadow-lg"
                  >
                    {t("copied")}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Social Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <a
                href="https://www.linkedin.com/in/benedykt-huszcza-478b69289/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary-light text-black font-bold text-lg flex items-center justify-center gap-2 hover:bg-primary-white transition-colors duration-300 shadow-[0_0_20px_rgba(0,223,129,0.3)] hover:shadow-[0_0_30px_rgba(0,223,129,0.5)]"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="https://github.com/benhus8"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary-white/5 border border-primary-white/10 text-primary-white font-bold text-lg flex items-center justify-center gap-2 hover:bg-primary-white/10 transition-colors duration-300"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
