import AnimatedLine from "@/components/animated/AnimatedLine";
import { useTranslations } from 'next-intl';

export default function Header() {
    const t = useTranslations('Header');

    return (
        <header className="p-4 bg-primary-darkest">
            <div className="flex justify-center">
                <nav className="w-1/2">
                    <div className="flex justify-between mr-2 ml-2">
                        <NavItem text={t('about-me')}/>
                        <NavItem text={t('stack')} />
                        <NavItem text={t('experience')}/>
                        <NavItem text={t('contact-me')}/>
                    </div>
                    <AnimatedLine className="mb-0 mt-1 left-0 h-0.25 bg-primary-white rounded-lg" />
                </nav>
            </div>

        </header>
    );
}

function NavItem({ text }) {
    return (
        <h1 className="font-light text-lg text-primary-white hover:text-primary-light cursor-pointer transition-all duration-300">
            {text}
        </h1>
    );
}