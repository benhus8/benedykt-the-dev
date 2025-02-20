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
              <div className="px-20 pt-2 ">
                  <Me/>
              </div>
          </section>
          <section>
              <MySkills/>
          </section>
          <section>
              <MyProjects/>
          </section>
          <section>
              <Career/>
          </section>
          <section>
              <Contact/>
          </section>
      </Transition>
  );
}
