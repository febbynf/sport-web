import Topbar from "@/components/Topbar";
import Header from "@/components/Header";
import Latest from "@/components/Latest";

const Home = () => {
    return (
        <div className="w-full max-w-[1440px] mx-auto overflow-hidden bg-white">
            <Topbar />
            <Header />
            <Latest />
            <div className="h-[4000px]">

            </div>

        </div>
    );
};

export default Home;