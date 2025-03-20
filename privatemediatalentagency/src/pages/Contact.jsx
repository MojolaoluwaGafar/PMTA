import axios from "axios";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
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

    try {
      await axios.post("http://localhost:5100/api/contact", formData); // No need to assign res
      setSuccess("Message sent successfully!");
      setError("");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error(
        "Error submitting form:",
        err.response?.data || err.message
      ); // Logs actual error
      setError("Failed to send message. Please try again.");
      setSuccess("");
    }
  };


  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center py-12 px-4">
      <div className="max-w-lg w-full bg-gray-700 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-2">Contact Us</h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {success && (
          <p className="text-green-500 text-center mb-4">{success}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-300 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 bg-gray-800 text-white rounded"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 bg-gray-800 text-white rounded"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-2 bg-gray-800 text-white rounded"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 bg-gray-800 text-white rounded h-32"
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
