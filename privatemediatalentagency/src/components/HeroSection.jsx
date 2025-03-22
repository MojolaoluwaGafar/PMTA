import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <div className="bg-[url(https://live.staticflickr.com/8219/8410945580_8516801903_z.jpg)] bg-cover bg-center h-[80vh] flex flex-col justify-center items-center text-center px-4">
      <h1 className="font-bold text-white text-2xl lg:text-5xl">
        Adult Talent Agency <br /> for Pornstars, Influencers, and Models
      </h1>
      <Link to="/application" className="mt-4">
        <button className="bg-blue-600 hover:bg-blue-900 py-2 px-4 text-white rounded-sm">
          Apply Now
        </button>
      </Link>
    </div>
  );
}
