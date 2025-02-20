export default function Footer() {
    return (
        <footer className="flex flex-col items-center justify-center bg-black text-white text-center">
            <div className="w-[100px] flex flex-row items-center justify-between mt-8">
                <img
                    src="/github.svg"
                    alt="Arrow"
                    className="w-[24px] h-[24px] mt-2"
                />
                <img
                    src="/linkdin.svg"
                    alt="Arrow"
                    className="w-[24px] h-[24px] mt-2"
                />
            </div>
            <p className="text-lg font-semiBold mt-4">{'benedykt.huszcza.dev'}</p>
            <div className="w-[500px] flex flex-row items-center justify-center mt-2 gap-20 text-lg">
                <p>Skills</p>
                <p>Projects</p>
                <p>Career</p>
                <p>Contact me</p>
            </div>
            <p className="text-sm font-light mt-4 mb-8">{`Designed and created by Benedytkt Huszcza @${new Date().getFullYear()}`}</p>
        </footer>
    )
}