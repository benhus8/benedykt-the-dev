import Transition from "@/components/animated/Transition";
import { useTranslations } from "next-intl";
import Me from "./_components/Me";
import { MySkills } from "@/app/[locale]/_components/MySkills";
import { MyProjects } from "@/app/[locale]/_components/MyProjects";
import { Career } from "@/app/[locale]/_components/Career";
import { Contact } from "@/app/[locale]/_components/Contact";

export default function Home() {
  const t = useTranslations("Home.Hero");

  return (
    <Transition>
      <section>
        <div>
          <Me />
        </div>
      </section>
      <section id="skills" className="scroll-mt-20">
        <MySkills />
      </section>
      <section id="projects" className="scroll-mt-20">
        <MyProjects />
      </section>
      <section id="career" className="scroll-mt-20">
        <Career />
      </section>
      <section id="contact" className="scroll-mt-20">
        <Contact />
      </section>
    </Transition>
  );
}
