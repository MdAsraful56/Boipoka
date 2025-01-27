import bannerImg from "../../assets/Banner.png"

const Banner = () => {
    return (
        <div className="flex flex-col lg:flex-row lg:px-24 px-5  items-center mt-10">
            <div className="lg:w-[70%] w-full space-y-4">
                <h1 className="text-5xl font-semibold">&quot;
                    Life is Insufficient <br />
                    <span className="text-blue-500">Without Books.</span>
                    &quot;</h1>
                <button className="btn text-white py-5 px-5 bg-[#23BE0A] rounded-lg">View The List</button>
            </div>
            <div className="lg:w-[30%] w-full">
                <img src={bannerImg} alt="" className="w-72" />
            </div>
        </div>
    );
};

export default Banner;