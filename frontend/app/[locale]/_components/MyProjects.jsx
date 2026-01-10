"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, ArrowUpRight } from "lucide-react";

export const MyProjects = () => {
  const t = useTranslations("myProjects");

  const projects = [
    {
      id: "genAI",
      image: "/images/gen_ai_project.png",
      technologies: ["Python", "FastAPI", "React", "Docker", "AWS", "PostgreSQL"],
      colSpan: "md:col-span-2"
    },
    {
      id: "resume",
      image: "/images/ideas_projct.png",
      technologies: ["Next.js", "TailwindCSS", "Docker"],
      colSpan: "md:col-span-1"
    },
    {
      id: "vesselRecognition",
      image: "/images/vessel_project.png",
      technologies: ["Python", "PyTorch"],
      colSpan: "md:col-span-1"
    },
    {
      id: "speedDating",
      image: "/images/speed_dating_project.png",
      technologies: ["Python", "Django", "Next.js", "Docker"],
      colSpan: "md:col-span-2"
    },
  ];

  return (
    <section className="relative w-full py-24 px-4 md:px-8 bg-primary-darkest overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-primary-dark/20 rounded-full blur-[120px] -translate-x-1/2" />

      <div className="container mx-auto relative z-10 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 space-y-4 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-7xl font-black mb-6 tracking-tight">
            <span className="text-primary-white">{t("selected")}</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-primary-base">
              {t("title")}
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index, t }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative h-[400px] rounded-3xl overflow-hidden bg-secondary-darkest/50 border border-primary-white/10 ${project.colSpan}`}
    >
      {/* Image with zoom effect */}
      <div className="absolute inset-0 z-0">
        <Image
          src={project.image}
          alt={t(`projects.${project.id}.title`)}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-darkest via-primary-darkest/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end">

        {/* Floating Arrow Icon */}
        <a
          href={t(`projects.${project.id}.link`)}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-8 right-8 w-12 h-12 bg-primary-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-primary-white/20 opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-primary-light hover:border-primary-light hover:text-black cursor-pointer"
        >
          <ArrowUpRight className="text-current w-6 h-6" />
        </a>

        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-3xl font-bold text-primary-white mb-3 leading-tight">
            {t(`projects.${project.id}.title`)}
          </h3>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-semibold text-primary-light bg-primary-light/10 border border-primary-light/20 rounded-full backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Button */}
          <a
            href={t(`projects.${project.id}.link`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary-white font-medium group/link"
          >
            <span className="border-b border-primary-light/0 group-hover/link:border-primary-light transition-all duration-300">
              {t("viewProject")}
            </span>
            <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};
