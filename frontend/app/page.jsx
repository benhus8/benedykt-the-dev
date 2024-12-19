import Transition from "@/motion/Transition";


export default function Home() {
    return (
        <Transition>
            <div className="flex justify-center items-center h-screen bg-gray-100">
                <div
                    className="p-6 bg-white rounded-lg shadow-lg"
                >
                    <h1 className="text-2xl font-bold text-gray-800">Witaj w Next.js!</h1>
                    <p className="mt-4 text-gray-600">{'xd1'}</p>
                </div>
            </div>
        </Transition>
    );
}
