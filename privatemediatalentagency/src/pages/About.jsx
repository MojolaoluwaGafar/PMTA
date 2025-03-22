import { useState } from "react";
import { Plus, Minus } from "lucide-react";


export default function About() {
  const features = [
    {
      title: "Exclusive Talent Representation",
      content:
        "We represent a select group of high-quality performers to ensure top-tier bookings and career growth.",
    },
    {
      title: "Higher Pay, Fewer Shoots",
      content:
        "Our models earn more and work less, focusing only on premium bookings with top studios.",
    },
    {
      title: "Career Development",
      content:
        "We help you build a lasting brand, from exposure to press coverage and premium collaborations.",
    },
    {
      title: "Privacy & Discretion",
      content:
        "We offer opportunities for performers who wish to remain anonymous with private, secure bookings.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFeature = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-900 text-white">
      {/* Header Section */}
      <header className="text-center text-2xl font-semibold py-5 w-full bg-gradient-to-r from-blue-900 to-blue-300">
        About Private Media <br /> Talent Agency
      </header>

      {/* Content Section */}
      <div className="max-w-3xl mx-auto px-6 py-10 space-y-6">
        <p>
          <span className="font-bold">PMTA</span> is not your typical porn
          agency. Private Media is about{" "}
          <span className="font-semibold text-blue-400">
            Quality over Quantity
          </span>
          . This keeps our talent happy, in demand, and well-paid. We are a
          fully licensed and bonded talent agency serving the USA, UK, and
          Canada.
        </p>

        <p>
          We work for our talent, with our talent—not only securing the{" "}
          <span className="font-semibold">best rates and best bookings</span>{" "}
          but also helping them achieve their goals within the industry.
        </p>

        <p>
          Above all we conduct ourselves in a business-like and professional
          manner, our main concern is your Health Wealth and Well-Being.
        </p>

        {/* Accordion Section - What Makes Us Different */}
        <div className="mt-10">
          <h2 className="text-3xl font-bold text-center text-blue-400">
            What Makes Us Different
          </h2>
          <p className="text-gray-300 text-center mt-2">
            We go beyond just booking jobs — we elevate your career.
          </p>

          <div className="mt-6 space-y-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800 p-4 rounded-lg cursor-pointer transition-all"
                onClick={() => toggleFeature(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-blue-300">
                    {feature.title}
                  </h3>
                  {openIndex === index ? (
                    <Minus className="w-6 h-6 text-white" />
                  ) : (
                    <Plus className="w-6 h-6 text-white" />
                  )}
                </div>
                {openIndex === index && (
                  <p className="mt-2 text-gray-400">{feature.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Final Section */}
        <h2 className="text-xl font-semibold text-blue-400">Join Us</h2>
        <p>
          If you're ready to be a top model, actor, or influencer, this could be
          one of the{" "}
          <span className="font-semibold">highest-paying & most exciting</span>{" "}
          careers available today.
        </p>
        <p>
          If you are between{" "}
          <span className="font-semibold">18 and 70 years old</span>, apply now
          to start your adult career with us!
        </p>
        <p className="text-center font-semibold text-lg">
          📩 Email us today to get started! 
          Privatemediatalentagency@gmail.com
        </p>
      </div>
    </div>
  );
}
