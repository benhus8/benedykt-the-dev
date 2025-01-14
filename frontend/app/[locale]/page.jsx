import Transition from "@/components/animated/Transition";
import { useTranslations } from "next-intl";
import { useTranslations } from 'next-intl';
import Me from "./_components/Me";
import StackSection from "@/app/[locale]/_components/Stack";

export default function Home() {
  const t = useTranslations("Home.Hero");

  return (
    <Transition>
      <section>
        <div className="px-20 pt-2">
          <Me />
        </div>
      </section>
      <section id="stack">
        <StackSection />
      </section>
    </Transition>
  );
}
