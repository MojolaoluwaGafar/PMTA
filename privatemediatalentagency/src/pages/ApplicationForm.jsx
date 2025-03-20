import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ApplicationForm() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    experience: "",
    workSamples: "",
    profilePic: null,
    idProof: null,
  });
  const [profilePicPreview, setProfilePicPreview] = useState(null);
  const [idProofPreview, setIdProofPreview] = useState(null);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const file = files[0];
    setFormData((prev) => ({ ...prev, [name]: file }));

    // Show a preview for image uploads
    if (file && name === "profilePic") {
      setProfilePicPreview(URL.createObjectURL(file));
    } else if (file && name === "idProof") {
      setIdProofPreview(URL.createObjectURL(file));
    }
  };

  const nextStep = () => {
    if (step === 1) {
      if (
        !formData.name ||
        !formData.email ||
        !formData.phone ||
        !formData.age
      ) {
        setError("Please provide all required details before proceeding.");
        return;
      }
    }
    setError("");
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setError("");
    setStep((prev) => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      navigate("/");
    }, 3000); // Redirect to homepage after 3 seconds
  };

  return (
    <div className="min-h-screen bg-[url(https://www.porn-star.com/tgpx/downloads/6597-250333.jpg)] bg-co text-white flex items-center justify-center py-12 px-4">
      <div className="max-w-lg w-full bg-gray-500 p-6 rounded-lg shadow-lg lg:mt-20">
        <h2 className="text-2xl font-bold text-center mb-4">
          Talent Application
        </h2>

        {/* Success Message */}
        {submitted ? (
          <div className="text-green-500 text-center mb-4">
            Your details have been submitted successfully! Redirecting to
            homepage...
          </div>
        ) : (
          <>
            {/* Error Message */}
            {error && (
              <div className="text-red-500 text-center mb-4">{error}</div>
            )}

            {/* Step Indicator */}
            <div className="flex justify-between mb-4">
              {[1, 2, 3, 4].map((s) => (
                <div
                  key={s}
                  className={`w-10 h-10 flex items-center justify-center rounded-full text-sm ${
                    step === s ? "bg-green-500" : "bg-gray-600"
                  }`}
                >
                  {s}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* STEP 1 - Personal Info */}
              {step === 1 && (
                <>
                  <div>
                    <label className="block text-gray-300 mb-1">
                      Full Name
                    </label>
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
                    <label className="block text-gray-300 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-2 bg-gray-700 text-white rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-1">Age</label>
                    <input
                      type="number"
                      name="age"
                      min="18"
                      max="70"
                      value={formData.age}
                      onChange={handleChange}
                      className="w-full p-2 bg-gray-700 text-white rounded"
                    />
                  </div>
                </>
              )}

              {/* STEP 2 - Experience */}
              {step === 2 && (
                <>
                  <div>
                    <label className="block text-gray-300 mb-1">
                      Experience Level
                    </label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      className="w-full p-2 bg-gray-700 text-white rounded"
                    >
                      <option value="">Select</option>
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Experienced">Experienced</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-1">
                      Work Samples (Links)
                    </label>
                    <input
                      type="text"
                      name="workSamples"
                      value={formData.workSamples}
                      onChange={handleChange}
                      className="w-full p-2 bg-gray-700 text-white rounded"
                    />
                  </div>
                </>
              )}

              {/* STEP 3 - Upload Files */}
              {step === 3 && (
                <>
                  <div>
                    <label className="block text-gray-300 mb-1">
                      Profile Picture
                    </label>
                    <input
                      type="file"
                      name="profilePic"
                      onChange={handleFileChange}
                      className="w-full p-2 bg-gray-700 text-white rounded"
                    />
                    {profilePicPreview && (
                      <img
                        src={profilePicPreview}
                        alt="Profile Preview"
                        className="mt-2 w-24 h-24 object-cover rounded-lg"
                      />
                    )}
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-1">ID Proof</label>
                    <input
                      type="file"
                      name="idProof"
                      onChange={handleFileChange}
                      className="w-full p-2 bg-gray-700 text-white rounded"
                    />
                    {idProofPreview && (
                      <img
                        src={idProofPreview}
                        alt="ID Proof Preview"
                        className="mt-2 w-24 h-24 object-cover rounded-lg"
                      />
                    )}
                  </div>
                </>
              )}

              {/* STEP 4 - Review & Submit */}
              {step === 4 && (
                <div>
                  <h3 className="text-lg font-semibold">Review Your Details</h3>
                  <p className="text-gray-300">Name: {formData.name}</p>
                  <p className="text-gray-300">Email: {formData.email}</p>
                  <p className="text-gray-300">Phone: {formData.phone}</p>
                  <p className="text-gray-300">Age: {formData.age}</p>
                  <p className="text-gray-300">
                    Experience: {formData.experience}
                  </p>
                  <p className="text-gray-300">
                    Work Samples: {formData.workSamples}
                  </p>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-4">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="bg-gray-500 text-white py-2 px-4 rounded"
                  >
                    Back
                  </button>
                )}
                {step < 4 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="bg-green-500 text-white py-2 px-4 rounded"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="bg-green-500 text-white py-2 px-4 rounded"
                  >
                    Submit
                  </button>
                )}
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default ApplicationForm;
