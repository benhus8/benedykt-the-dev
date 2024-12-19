import Transition from "@/motion/Transition";
import { useTranslations } from 'next-intl';

export default function Home() {
    const t = useTranslations('Home.Hero');

    return (
        <Transition>
            <div className="flex justify-center items-center h-screen bg-gray-100">
                <div
                    className="p-6 bg-white rounded-lg shadow-lg"
                >
                    <h1 className="text-2xl font-bold text-gray-800">Witaj w Next.js!</h1>
                    <p className="mt-4 text-gray-600">{t('Subtitle')}</p>
                </div>
            </div>
        </Transition>
    );
}
