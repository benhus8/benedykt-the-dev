import Transition from "@/components/animated/Transition";
import { useTranslations } from 'next-intl';
import AboutMe from "./_components/AboutMe";
import StackSection from "@/app/[locale]/_components/Stack";

export default function Home() {
    const t = useTranslations('Home.Hero');

    return (
        <Transition>
            <div className="px-20 pt-2">
                <AboutMe />
            </div>
            <StackSection />
        </Transition>
    );
}
