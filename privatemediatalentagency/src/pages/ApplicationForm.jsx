import { useState, useCallback } from "react";
import { Link } from "react-router-dom"; // Fixed incorrect import

function ApplicationForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    weight: "",
    height: "",
    ethnicity: "",
    bodyType: "",
    eyeColor: "",
    hairColor: "",
    sexualOrientation: "",
    experience: "",
    workSamples: "",
    socialMedia: "",
    profilePic: null,
    idProof: null,
    selfie: null,
    frontBodyPic: null,
    backBodyPic: null,
    chestStomach: null,
    genitals: null,
    assPic: null,
  });

  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = useCallback((e) => {
  const { name, value } = e.target;
  setFormData(prev => {
    const updatedData = { ...prev, [name]: value.trim() };
    console.log("Updated formData:", updatedData);
    return updatedData;
  });
}, []);


  const handleFileChange = useCallback((e) => {
      const { name, value, type, files } = e.target;
    const file = files[0];

    if (!file) return;

    // Restrict file size to 5MB
    if (file.size > 5 * 1024 * 1024) {
      setError("File size must be less than 5MB.");
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]:  type === "file" ? files[0] : value,
    }));

    setError(""); // Clear previous errors
  }, []);

  /** Step Validation */
  const validateStep = () => {
    setError(""); // Reset errors before checking

    if (step === 1) {
      if (
        !formData.name.trim() ||
        !formData.email.trim() ||
        !formData.phone.trim() ||
        !formData.dob ||
        !formData.gender ||
        !formData.ethnicity ||
        !formData.height ||
        !formData.weight ||
        !formData.bodyType ||
        !formData.eyeColor ||
        !formData.hairColor ||
        !formData.sexualOrientation
      ) {
        setError("Please fill in all required fields in Step 1.");
        return false;
      }
    }

    if (step === 2) {
      if (
        !formData.experience.trim() ||
        !formData.workSamples.trim() ||
        !formData.socialMedia.trim()
      ) {
        setError("Please fill in all required fields in Step 2.");
        return false;
      }
    }

    if (step === 3) {
      if (
        !formData.profilePic ||
        !formData.idProof ||
        !formData.selfie ||
        !formData.frontBodyPic ||
        !formData.backBodyPic ||
        !formData.chestStomach ||
        !formData.genitals ||
        !formData.assPic
      ) {
        setError("Please upload all required images before submitting.");
        return false;
      }
    }

    return true; // Step is valid
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateStep()) return;
     const formDataToSend = new FormData();
  Object.entries(formData).forEach(([key, value]) => {
    if (value) {
      formDataToSend.append(key, value);
    }
  });

  try {
    const response = await fetch("https://pmta.onrender.com/api/submit", {
      method: "POST",
      body: formDataToSend, // ✅ No need for Content-Type
    });

    const result = await response.json();
    console.log("Response:", result);
  } catch (error) {
    console.error("Submission error:", error);
  }

    setSubmitted(true);
  };

  /** File Upload Component */
  const FileUpload = ({ label, name, accept }) => (
    <div className="mb-3">
      <label className="block font-semibold">{label}:</label>
      <input
        type="file"
        name={name}
        accept={accept}
        onChange={handleFileChange}
        className="w-full p-2 border border-gray-400 rounded"
      />
      {formData[name] && (
        <div className="mt-2">
          {formData[name].type.startsWith("image/") ? (
            <img
              src={URL.createObjectURL(formData[name])}
              alt={name}
              className="w-20 h-20 object-cover rounded mt-1"
            />
          ) : (
            <p className="text-sm text-gray-400">{formData[name].name}</p>
          )}
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-800 text-white flex items-center justify-center py-12 px-4">
      <div className="max-w-lg w-full bg-black p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-4">
          Talent Application
        </h2>

        {submitted ? (
          <div className="text-center p-4">
            <h2 className="text-xl text-green-500 font-semibold">
              Application Received!!!
            </h2>
            <p className="mt-2">
              Thank you for submitting your application! We will contact you if
              our adult entertainment associates are interested in working with
              you.
            </p>
            <p className="mt-2">
              Make sure to check your spam folder, as email providers often flag
              emails with the word “porn” as spam.
            </p>
            <Link to="/">
              <button className="bg-blue-500 py-2 px-2 rounded-md mt-4">
                Back to Home
              </button>
            </Link>
          </div>
        ) : (
          <>
            {error && (
              <div className="text-red-500 text-center mb-4">{error}</div>
            )}

            {/* Step Indicator */}
            <div className="flex justify-between mb-4">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`w-10 h-10 flex items-center justify-center rounded-full text-sm ${
                    step === s ? "bg-blue-500" : "bg-gray-600"
                  }`}
                >
                  {s}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {step === 1 && (
                <div>
                  <label className="block">Name:</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 bg-gray-800 text-white rounded"
                    required
                  />
                  <label className="block">Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 bg-gray-800 text-white rounded"
                    required
                  />
                  <label className="block">Phone:</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-2 bg-gray-800 text-white rounded"
                    required
                  />

                  <label className="block">Date of Birth:</label>
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    className="w-full p-2 bg-gray-800 text-white rounded"
                  />

                  <label className="block">Gender:</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full p-2 bg-gray-800 text-white rounded"
                  >
                    <option value="">Select Gender</option>
                    <option className="text-black" value="Male">
                      Male
                    </option>
                    <option className="text-black" value="Female">
                      Female
                    </option>
                  </select>

                  <label className="block">Height (cm):</label>
                  <input
                    type="number"
                    name="height"
                    value={formData.height}
                    onChange={handleChange}
                    className="w-full p-2 bg-gray-800 text-white rounded"
                  />

                  <label className="block">Weight (kg):</label>
                  <input
                    type="number"
                    name="weight"
                    value={formData.weight}
                    onChange={handleChange}
                    className="w-full p-2 bg-gray-800 text-white rounded"
                  />

                  <label className="block">Body Type:</label>
                  <select
                    name="bodyType"
                    value={formData.bodyType}
                    onChange={handleChange}
                    className="w-full p-2 bg-gray-800 text-white rounded"
                  >
                    <option value="">Select</option>
                    <option className="text-black" value="Slim">
                      Slim
                    </option>
                    <option className="text-black" value="Athletic">
                      Athletic
                    </option>
                    <option className="text-black" value="Muscular">
                      Muscular
                    </option>
                    <option className="text-black" value="Curvy">
                      Curvy
                    </option>
                    <option className="text-black" value="Plus Size">
                      Plus Size
                    </option>
                    <option className="text-black" value="Other">
                      Other
                    </option>
                  </select>

                  <label className="block">Ethnicity:</label>
                  <select
                    name="ethnicity"
                    value={formData.ethnicity}
                    onChange={handleChange}
                    className="w-full p-2 bg-gray-800 text-white rounded"
                  >
                    <option value="">Select</option>
                    <option className="text-black" value="asian">
                      Asian
                    </option>
                    <option className="text-black" value="black">
                      Black
                    </option>
                    <option className="text-black" value="white">
                      White
                    </option>
                    <option className="text-black" value="hispanic or latino">
                      Hispanic or Latino
                    </option>
                    <option className="text-black" value="native american">
                      Native American
                    </option>
                    <option className="text-black" value="Other">
                      Other
                    </option>
                  </select>

                  <label className="block">Eye Color:</label>
                  <select
                    name="eyeColor"
                    value={formData.eyeColor}
                    onChange={handleChange}
                    className="w-full p-2 bg-gray-800 text-white rounded"
                  >
                    <option value="">Select</option>
                    <option className="text-black" value="Brown">
                      Brown
                    </option>
                    <option className="text-black" value="Blue">
                      Blue
                    </option>
                    <option className="text-black" value="Green">
                      Green
                    </option>
                    <option className="text-black" value="Hazel">
                      Hazel
                    </option>
                    <option className="text-black" value="Gray">
                      Gray
                    </option>
                    <option className="text-black" value="Other">
                      Other
                    </option>
                  </select>

                  <label className="block">Hair Color:</label>
                  <select
                    name="hairColor"
                    value={formData.hairColor}
                    onChange={handleChange}
                    className="w-full p-2 bg-gray-800 text-white rounded"
                  >
                    <option value="">Select</option>
                    <option className="text-black" value="Black">
                      Black
                    </option>
                    <option className="text-black" value="Brown">
                      Brown
                    </option>
                    <option className="text-black" value="Blonde">
                      Blonde
                    </option>
                    <option className="text-black" value="Red">
                      Red
                    </option>
                    <option className="text-black" value="Gray">
                      Gray
                    </option>
                    <option className="text-black" value="Other">
                      Other
                    </option>
                  </select>

                  <label className="block">Sexual Orientation:</label>
                  <select
                    name="sexualOrientation"
                    value={formData.sexualOrientation}
                    onChange={handleChange}
                    className="w-full p-2 bg-gray-800 text-white rounded"
                  >
                    <option value="">Select</option>
                    <option className="text-black" value="Straight">
                      Straight
                    </option>
                    <option className="text-black" value="Gay/Lesbian">
                      Gay/Lesbian
                    </option>
                    <option className="text-black" value="Bisexual">
                      Bisexual
                    </option>
                    <option className="text-black" value="Other">
                      Other
                    </option>
                  </select>
                </div>
              )}

              {step === 2 && (
                <div>
                  <label className="block">Experience:</label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full p-2 bg-gray-800 text-white rounded"
                  >
                    <option value="">Select</option>
                    <option value="None">None</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Professional">Professional</option>
                  </select>

                  <label className="block mt-2">Work Sample (links):</label>
                  <textarea
                    name="workSamples" // Fixed name attribute
                    value={formData.workSamples || ""} // Ensure it's not undefined
                    onChange={handleChange}
                    className="w-full p-2 bg-gray-800 text-white rounded"
                  />

                  <label className="block mt-2">Social Media (links):</label>
                  <textarea
                    name="socialMedia" // Fixed name attribute
                    value={formData.socialMedia || ""} // Ensure it's not undefined
                    onChange={handleChange}
                    className="w-full p-2 bg-gray-800 text-white rounded"
                  />
                </div>
              )}

              {step === 3 && (
                <div>
                  <FileUpload
                    label="Profile Picture"
                    name="profilePic"
                    accept="image/*"
                  />
                  <FileUpload
                    label="ID Proof"
                    name="idProof"
                    accept="image/*"
                  />
                  <FileUpload label="Selfie" name="selfie" accept="image/*" />
                  <FileUpload
                    label="Front Body Picture"
                    name="frontBodyPic"
                    accept="image/*"
                  />
                  <FileUpload
                    label="Back Body Picture"
                    name="backBodyPic"
                    accept="image/*"
                  />
                  <FileUpload
                    label="Chest & Stomach"
                    name="chestStomach"
                    accept="image/*"
                  />
                  <FileUpload
                    label="Genitals"
                    name="genitals"
                    accept="image/*"
                  />
                  <FileUpload
                    label="Ass Picture"
                    name="assPic"
                    accept="image/*"
                  />
                </div>
              )}

              <div className="flex justify-between mt-4">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="bg-blue-600 py-2 px-2"
                  >
                    Back
                  </button>
                )}
                {step < 3 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="bg-blue-600 py-2 px-2"
                  >
                    Next
                  </button>
                ) : (
                  <button type="submit" className="bg-green-500 py-2 px-4">
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
