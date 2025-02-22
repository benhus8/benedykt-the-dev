"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Contact = () => {
  const t = useTranslations("contact");

  return (
    <div className="relative bg-primary-darkest min-h-[350px] z-10 overflow-hidden px-4 py-10">
      <div className="w-full flex flex-col justify-center items-center py-5 mt-5 mb-10">
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-primary-white font-bold text-4xl text-center">
          {t("title")}
        </p>
        <p className="text-white text-lg font-semiBold px-4 sm:px-32 text-center break-words mt-2 mb-5">
          {t("subtitle")}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <EmailIcon />
          <div className="flex items-center flex-col sm:flex-row text-center sm:text-left">
            <p className="text-primary-light font-bold text-2xl">
              {t("email.prefix")}
            </p>
            <p className="text-primary-white font-bold text-lg pt-2 sm:pt-0 sm:pl-2">
              {t("email.suffix")}
            </p>
          </div>
        </div>
        <p className="text-primary-white font-semiBold text-lg mt-5 text-center break-words">
          {t("socialMedia")}
        </p>
        <button
          className="w-32 h-10 bg-gradient-to-r from-primary-light to-primary-white text-black font-bold text-lg rounded-lg px-4 mt-5 transition-transform duration-300 ease-out hover:scale-105"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/benedykt-huszcza-478b69289/",
              "_blank",
            )
          }
        >
          {t("button")}
        </button>
      </div>

      {/* GLOW */}
      <div className="absolute inset-0 flex items-center justify-center -z-10 mt-[50px]">
        <div className="w-80 h-80 bg-green-500 rounded-full blur-3xl opacity-15"></div>
      </div>
    </div>
  );
};

const EmailIcon = () => {
  const t = useTranslations("contact");
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("benedykt.huszcza@gmail.com");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="relative">
      <img
        src="/email_icon.svg"
        alt="Email"
        className="w-[45px] h-[45px] mt-2 cursor-pointer transition-transform duration-300 hover:scale-110"
        onClick={copyToClipboard}
      />

      <AnimatePresence>
        {isCopied && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute top-[-50px] left-1/2 transform -translate-x-1/2 bg-black text-white text-sm rounded-lg py-2 px-4 shadow-md"
          >
            {t("copied")}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
