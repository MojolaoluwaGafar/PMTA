import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

// Step 1: Personal Info
const PersonalInfo = ({ formData, handleChange }) => (
  <>
    {["name", "email", "phone", "age"].map((field) => (
      <div key={field}>
        <label className="block text-gray-300 mb-1">
          {field.charAt(0).toUpperCase() + field.slice(1)}
        </label>
        <input
          type={
            field === "email" ? "email" : field === "age" ? "number" : "text"
          }
          name={field}
          value={formData[field]}
          onChange={handleChange}
          className="w-full p-2 bg-gray-700 text-white rounded"
        />
      </div>
    ))}
  </>
);

// Step 2: Experience
const Experience = ({ formData, handleChange }) => (
  <>
    <div>
      <label className="block text-gray-300 mb-1">Experience Level</label>
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
      <label className="block text-gray-300 mb-1">Work Samples (Links)</label>
      <input
        type="text"
        name="workSamples"
        value={formData.workSamples}
        onChange={handleChange}
        className="w-full p-2 bg-gray-700 text-white rounded"
      />
    </div>
  </>
);

// Generic File Input Component
const FileInput = ({ label, name, handleFileChange, fileName }) => (
  <div>
    <label className="block text-gray-300 mb-1">{label}</label>
    <input
      type="file"
      name={name}
      onChange={handleFileChange}
      className="w-full p-2 bg-gray-700 text-white rounded"
    />
    {fileName && (
      <p className="text-sm text-gray-400 mt-1">Selected: {fileName}</p>
    )}
  </div>
);

// Step 3: Upload Files
const UploadFiles = ({ formData, handleFileChange }) => (
  <>
    <FileInput
      label="Profile Picture"
      name="profilePic"
      handleFileChange={handleFileChange}
      fileName={formData.profilePic?.name}
    />
    <FileInput
      label="ID Proof"
      name="idProof"
      handleFileChange={handleFileChange}
      fileName={formData.idProof?.name}
    />
  </>
);

// Step 4: Review
const Review = ({ formData }) => (
  <div>
    <h3 className="text-lg font-semibold">Review Your Details</h3>
    {Object.entries(formData).map(([key, value]) => (
      <p key={key} className="text-gray-300">
        {key.charAt(0).toUpperCase() + key.slice(1)}:{" "}
        {typeof value === "object" && value ? value.name : value}
      </p>
    ))}
  </div>
);

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
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleFileChange = useCallback((e) => {
    const { name, files } = e.target;
    const file = files[0];
    if (!file) return;

    setFormData((prev) => ({ ...prev, [name]: file }));
  }, []);

  const nextStep = () => {
    if (
      step === 1 &&
      (!formData.name || !formData.email || !formData.phone || !formData.age)
    ) {
      setError("Please provide all required details before proceeding.");
      return;
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
    setTimeout(() => navigate("/"), 3000);
  };

  return (
    <div className="min-h-screen bg-[url(https://cdn77-pic.xvideos-cdn.com/videos/thumbs169poster/6a/a8/24/6aa82438e3e4fb953f73469685ae1065/6aa82438e3e4fb953f73469685ae1065.30.jpg)] bg-cover bg-center text-white flex items-center justify-center py-12 px-4">
      <div className="max-w-lg w-full bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-4">
          Talent Application
        </h2>

        {submitted ? (
          <div className="text-green-500 text-center mb-4">
            Your details have been submitted successfully! Redirecting to
            homepage...
          </div>
        ) : (
          <>
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
              {step === 1 && (
                <PersonalInfo formData={formData} handleChange={handleChange} />
              )}
              {step === 2 && (
                <Experience formData={formData} handleChange={handleChange} />
              )}
              {step === 3 && (
                <UploadFiles
                  formData={formData}
                  handleFileChange={handleFileChange}
                />
              )}
              {step === 4 && <Review formData={formData} />}

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
