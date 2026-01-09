"use client";
import { useTranslations } from "next-intl";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Briefcase, Calendar, Building2, Code2, Wrench, ChevronRight } from "lucide-react";

export const Career = () => {
  const t = useTranslations("career");

  // Data structure kept from original, but we might want to move this to a separate file or keep here if small
  const chapters = [
    {
      id: "current",
      year: "2025",
      month: "03",
      position: "Junior Software Engineer",
      company: "Software Mind",
      technologies: [
        { name: "Typescript", tools: ["React"] },
        { name: "Java", tools: ["SpringBoot", "JOOQ"] },
        { name: "Python", tools: ["Chainlit", "Langchain", "Pydantic"] },
        { name: "Cloud", tools: ["Azure OpenAI ", "Azure Search Service"] },
      ],
      tools: ["Jenkins", "Octopus Deploy", "Jira", "Bitbucket"],
    },
    {
      id: "prev1",
      year: "2023",
      month: "07",
      position: "Fullstack Developer",
      company: "Prognosis z.o.o",
      technologies: [{ name: "Typescript", tools: ["React", "TanstackQuery"] }],
      tools: ["WebStorm"],
    },
    {
      id: "prev2",
      year: "2022",
      month: "07",
      position: "Backend Developer",
      company: "Prognosis z.o.o",
      technologies: [
        { name: "Java", tools: ["SpringBoot", "Hibernate", "JPA", "Scheduler", "Feign"] },
        { name: "Python", tools: ["FastAPI", "Alembic", "Pydantic", "Dotenv"] },
        { name: "PostgreSQL", tools: [] },
      ],
      tools: ["IntelliJ IDEA", "Docker", "RabbitMQ", "Keycloak", "Consul", "Traefik"],
    },
  ];

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 90%", "end 50%"],
  });

  return (
    <section ref={containerRef} className="relative w-full py-16 px-4 md:px-8 bg-primary-darkest overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary-light/10 rounded-full blur-[100px] translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            <span className="text-primary-white">{t("prefix")}</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-primary-base">
              {t("title")}
            </span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-primary-white/10 -translate-x-1/2 md:-translate-x-px">
            <motion.div
              style={{ scaleY: scrollYProgress, transformOrigin: "top" }}
              className="absolute inset-0 w-full bg-gradient-to-b from-primary-light via-primary-base to-primary-dark w-full"
            />
          </div>

          <div className="space-y-8 md:space-y-16">
            {chapters.map((chapter, index) => (
              <TimelineItem key={index} chapter={chapter} index={index} t={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({ chapter, index, t }) => {
  const isEven = index % 2 === 0;
  const [expandedTechIndex, setExpandedTechIndex] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${isEven ? 'md:flex-row-reverse' : ''}`}
    >
      {/* Timeline Node */}
      <div className="absolute left-[20px] md:left-1/2 top-0 w-10 h-10 rounded-full bg-primary-darkest border-4 border-primary-dark flex items-center justify-center z-20 -translate-x-1/2 shadow-[0_0_20px_rgba(0,223,129,0.3)]">
        <div className="w-3 h-3 bg-primary-light rounded-full animate-pulse" />
      </div>

      {/* Content Spacer for layout balance */}
      <div className="hidden md:block w-1/2" />

      {/* Card Content */}
      <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
        <div className="relative group">
          {/* Glassmorphic Card */}
          <div className="absolute inset-0 bg-secondary-darkest/40 backdrop-blur-xl rounded-2xl -z-10 border border-primary-white/5 group-hover:border-primary-light/30 transition-all duration-300 transform group-hover:-translate-y-1" />

          <div className="p-6 md:p-8">
            {/* Header */}
            <div className={`flex flex-col gap-2 mb-6 ${isEven ? 'md:items-end' : 'md:items-start'}`}>
              <div className="inline-flex items-center gap-2 text-primary-light font-bold bg-primary-light/10 px-3 py-1 rounded-full text-sm border border-primary-light/20">
                <Calendar className="w-4 h-4" />
                <span>{chapter.month}.{chapter.year}</span>
                {index === 0 && (
                  <>
                    <span className="w-1 h-1 rounded-full bg-current" />
                    <span>{t("current")}</span>
                  </>
                )}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-primary-white mt-2 mb-1">
                {chapter.position}
              </h3>
              <div className="flex items-center gap-2 text-secondary-grayLight text-lg">
                <Building2 className="w-4 h-4" />
                <span>{chapter.company}</span>
              </div>
            </div>

            {/* Technologies Section */}
            <div className="space-y-4">
              <div className={`flex items-center gap-2 text-primary-white/80 font-semibold mb-2 ${isEven ? 'md:justify-end' : ''}`}>
                <Code2 className="w-4 h-4 text-primary-light" />
                <span>{t("tech")}</span>
              </div>
              <div className={`flex flex-wrap gap-2 ${isEven ? 'md:justify-end' : ''}`}>
                {chapter.technologies.map((tech, i) => (
                  <TechItem
                    key={i}
                    tech={tech}
                    isExpanded={expandedTechIndex === i}
                    onToggle={() => setExpandedTechIndex(expandedTechIndex === i ? null : i)}
                  />
                ))}
              </div>

              {/* Tools Section */}
              {chapter.tools && chapter.tools.length > 0 && (
                <>
                  <div className={`flex items-center gap-2 text-primary-white/80 font-semibold mb-2 mt-4 ${isEven ? 'md:justify-end' : ''}`}>
                    <Wrench className="w-4 h-4 text-primary-light" />
                    <span>{t("tools")}</span>
                  </div>
                  <div className={`flex flex-wrap gap-2 ${isEven ? 'md:justify-end' : ''}`}>
                    {chapter.tools.map((tool, i) => (
                      <span key={i} className="px-3 py-1 text-xs md:text-sm text-secondary-gray bg-transparent border border-secondary-gray/20 rounded-lg hover:border-primary-light/30 hover:text-primary-light transition-colors">
                        {tool}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const TechItem = ({ tech, isExpanded, onToggle }) => {
  const hasTools = tech.tools && tech.tools.length > 0;
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside (optional enhancement)
  // useEffect(...) logic could be added here

  return (
    <div className="relative">
      <button
        onClick={() => hasTools && onToggle()}
        className={`group flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-medium rounded-full border transition-all duration-300 relative overflow-hidden ${isExpanded
          ? 'bg-primary-light/10 border-primary-light text-primary-light shadow-[0_0_15px_rgba(0,223,129,0.2)]'
          : 'bg-primary-white/5 border-primary-white/10 text-secondary-lightest hover:bg-primary-white/10 hover:border-primary-white/30 hover:text-primary-white'
          } ${!hasTools ? 'cursor-default' : 'cursor-pointer'}`}
      >
        <span className="relative z-10">{tech.name}</span>
        {hasTools && (
          <ChevronRight className={`w-3.5 h-3.5 transition-transform duration-300 relative z-10 ${isExpanded ? 'rotate-90' : ''}`} />
        )}

        {/* Button Hover Glow */}
        {!isExpanded && <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-white/5 to-transparent -translate-x-full group-hover:animate-shimmer" />}
      </button>

      {/* Expanded Tools */}
      <AnimatePresence>
        {isExpanded && hasTools && (
          <motion.div
            ref={dropdownRef}
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="absolute top-full left-0 mt-3 z-30 min-w-[180px]"
          >
            <div className="bg-[#0a0a0a]/90 backdrop-blur-2xl border border-primary-white/10 rounded-2xl p-2 shadow-2xl relative overflow-hidden">
              {/* Subtle Grid Background */}
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05] pointer-events-none" />

              {/* Inner Glow */}
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-primary-light/20 blur-xl rounded-full pointer-events-none" />

              <div className="relative z-10 flex flex-col gap-1">
                {tech.tools.map((tool, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="px-3 py-2 text-sm text-secondary-grayLight hover:text-primary-white hover:bg-primary-white/5 rounded-lg transition-colors cursor-default flex items-center gap-2 group/tool"
                  >
                    <div className="w-1 h-1 rounded-full bg-primary-light/40 group-hover/tool:bg-primary-light transition-colors" />
                    {tool}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
