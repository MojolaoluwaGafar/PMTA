import { Link } from "react-router";

export default function HeroSection() {
    return (
      <div className="bg-[url(https://live.staticflickr.com/8219/8410945580_8516801903_z.jpg)] bg-cover bg-center h-[80vh] pt-[20%]">
        <div className="pt-[50%] w-full lg:w-[500px] mx-auto">
          <h1 className="text-center font-bold text-white text-2xl lg:text-5xl">
            Adult Talent Agency <br /> for Pornstars, Influencers, and Models
          </h1>
          <Link
            className="flex justify-center items center pt-3 text-md"
            to="/application"
          >
            <button className="bg-teal-400 hover:bg-teal-900 py-2 px-4 text-white rounded-sm ">
              Apply Now
            </button>
          </Link>
        </div>
      </div>
    );
}