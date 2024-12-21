import CardSlider, {Card} from "@/components/animated/CardSlider";

function AsymmetricEnding() {
    return (
        <div className="w-full h-[100px]">
            <svg
                viewBox="0 0 1440 800"
                className="w-full h-full"
                preserveAspectRatio="none"
            >
                <path
                    d="M0 0 L1440 0 L1440 600 C1200 950 240 700 0 850 L0 0"
                    fill="#03624C"
                />
            </svg>
        </div>
    );
}

const cards = [
    { id: 1, title: "Java", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..." },
    { id: 2, title: "PYTHON", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..." },
    { id: 3, title: "JS", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..." },
];


export default function StackSection() {
    return (
        <div>
            <div className="w-full min-h-[300px] bg-primary-dark mt-10 flex flex-col sm:flex-row justify-between items-center p-10">
                <div className="pl-10">
                    <CardSlider/>
                </div>
                <div className="">
                    <CardSlider/>
                </div>
                <div className=" pr-20">
                    <CardSlider/>
                </div>
            </div>
            <AsymmetricEnding/>
        </div>
    )
}

