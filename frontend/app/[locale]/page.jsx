import Transition from "@/components/animated/Transition";
import { useTranslations } from 'next-intl';
import AboutMe from "./_components/AboutMe";

export default function Home() {
    const t = useTranslations('Home.Hero');

    return (
        <Transition>
            <AboutMe />
        </Transition>
    );
}
