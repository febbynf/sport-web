import { FaArrowRight, FaFire, FaPlay

} from "react-icons/fa";

const Hero = () => {
    return <section className="bg-gray-50 xl:h-[1064px] bg-[url(/assets/img/hero/bg.png)]
    bg-no-repeat bg-[60%] md:bg-right-bottom xl:bg-right">
        <div className="container mx-auto flex items-center h-full">
            <div className="relative flex flex-col xl:flex-row items-center w-full">
                <div className="w-full max-w-[760px] mb-24 md:mb-0">

                    <div className="flex items-center gap-4 mb-12">
                        <div className="bg-accent text-primary flex items-center gap-2 py-2 px-4 rounded-full">
                            <FaFire />
                            <p className="font-semibold">New</p>
                        </div>
                        <p>Premium Sports Apparel for Peak Performance</p>
                    </div>

                    <h1 className="h1 mb-[40px]">Unleash <br /> Your Inner <br /> Athlete</h1>

                    <div className="flex flex-col xl:flex-row gap-10 mb-32 md:mb-0">
                        <button className="btn btn-accent">
                            <div className="flex items-center gap-4">
                                <span>Explore Collection</span>
                                <FaArrowRight />
                            </div>
                        </button>
                        <button className="h-[56px] font-medium text-primary flex items-center justify-center cursor-pointer">
                            <div className="flex items-center gap-4">
                                <span>Watch Video</span>
                                <div className="bg-white text-primary rounded-full border-10 border-gray-200 p-4">
                                    <FaPlay />
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
                <div className="relative xl:absolute xl:right-[100px] xl:-top-7">
                    <img src="/assets/img/hero/running.png" alt="" />
                </div>

            </div>
        </div>
    </section>;
};

export default Hero;