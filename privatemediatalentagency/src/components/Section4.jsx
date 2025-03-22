import { SiGoogleforms } from "react-icons/si";
import { Link } from "react-router-dom";

export default function Section4() {
  const steps = [
    {
      title: "COMPLETE THE FORM",
      description:
        "Provide your personal information, photos, and any relevant experience.",
    },
    {
      title: "WAIT FOR EVALUATION",
      description:
        "The agency will review your application and evaluate whether you meet the requirements.",
    },
    {
      title: "INITIAL INTERVIEW",
      description: "If you are selected, you will have an initial interview.",
    },
    {
      title: "HEALTH TESTS",
      description: "Perform necessary medical tests.",
    },
    {
      title: "JOB ASSIGNMENT",
      description: "Start receiving job opportunities with reliable producers.",
    },
  ];

  return (
    <div className="bg-black flex flex-col items-center text-center text-white py-10 px-4">
      <h1 className="text-4xl font-semibold leading-[45px] px-2">
        DO YOU WANT TO START YOUR CAREER <br /> IN THE ADULT ENTERTAINMENT
        INDUSTRY?
      </h1>
      <p className="py-4 text-xl">How to Apply?</p>

      {steps.map((step, index) => (
        <div key={index} className="mt-6 group">
          {/* SVG Gradient Definition */}
          <svg width="0" height="0">
            <defs>
              <linearGradient
                id={`gradient-${index}`}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop stopColor="#2563EB" offset="0%" />
                <stop stopColor="#10B981" offset="50%" />
              </linearGradient>
            </defs>
          </svg>

          {/* Icon with Gradient and Hover Effect */}
          <div className="flex items-center justify-center">
            <svg width="80px" height="80px" viewBox="0 0 24 24">
              <path
                d={SiGoogleforms().props.children[0].props.d} // Extracts the icon's path dynamically
                fill={`url(#gradient-${index})`}
                className="transition-all duration-300 group-hover:fill-white"
              />
            </svg>
          </div>

          {/* Step Title */}
          <p className="mt-2 font-bold text-lg">{step.title}</p>
          {/* Step Description */}
          <p className="text-gray-300 text-sm max-w-lg">{step.description}</p>
        </div>
      ))}

      {/* CTA Button */}
      <div className="mt-8">
        <Link to="/application">
          <button className="bg-blue-600 hover:bg-blue-900 text-white font-semibold px-6 py-3 rounded-lg transition">
            ADULT CASTING ONLINE
          </button>
        </Link>
      </div>
    </div>
  );
}
