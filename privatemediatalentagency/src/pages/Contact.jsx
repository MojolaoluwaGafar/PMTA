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
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setError("Please fill in all fields before submitting.");
      return;
    }

    if (!isValidEmail(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      await axios.post("http://localhost:5100/api/contact", formData); // Removed `const res =`
      setSuccess("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error(
        "Error submitting form:",
        err.response?.data || err.message
      );
      setError(
        err.response?.data?.message ||
          "Failed to send message. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="min-h-screen bg-gray-800 text-white flex items-center justify-center py-12 px-4">
      <div className="max-w-lg w-full bg-black p-6 rounded-lg shadow-lg">
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
              required
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
              required
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
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 bg-gray-800 text-white rounded h-32"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded transition flex items-center justify-center"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        <p className="text-sm text-gray-300 mt-4">
          We are not an escort or private entertainment service. Private Media
          Talent Agency is a professional adult entertainment booking agency
          servicing the Adult Entertainment Industry. Our booking services are
          available only to established companies and producers. All escort or
          private introduction emails will be ignored. Licensed and Bonded
          Agency TA-LR-1000685444.
        </p>
      </div>
    </div>
  );
}
