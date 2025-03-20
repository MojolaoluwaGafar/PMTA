import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setError("Please fill in all fields before submitting.");
      return;
    }

    console.log("Form Submitted:", formData);
    setError("");
  };

  return (
    <div className="min-h-screen bg-[url(https://www.rexporn.sex/static/big-ass-busty-pornstar-dominates-younger-shy-guy.jpg)] text-white flex items-center justify-center py-12 px-4">
      <div className="max-w-lg w-full bg-gray-500 p-6 rounded-lg shadow-lg lg:mt-20">
        <h2 className="text-2xl font-bold text-center mb-2">Contact Us</h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-300 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 bg-gray-700 text-white rounded"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 bg-gray-700 text-white rounded"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-2 bg-gray-700 text-white rounded"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 bg-gray-700 text-white rounded h-32"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
