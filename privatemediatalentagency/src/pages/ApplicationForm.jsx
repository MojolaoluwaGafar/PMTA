import { useState, useCallback } from "react";
import { Link } from "react-router";

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
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleFileChange = useCallback((e) => {
    const { name, files } = e.target;
    const file = files[0];

    if (!file) return;

    // Restrict file size to 5MB
    if (file.size > 5 * 1024 * 1024) {
      setError("File size must be less than 5MB.");
      return;
    }

    // Update form data
    setFormData((prev) => ({
      ...prev,
      [name]: file,
    }));

    // Clear previous errors
    setError("");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      setError("Please fill in all required fields.");
      return;
    }

    setSubmitted(true);
  };

  // File Upload Component
  const FileUpload = ({ label, name, accept }) => (
    <div className="mb-3">
      <label className="block font-semibold">{label}:</label>
      <input
        type="file"
        name={name}
        accept={accept}
        onChange={handleFileChange}
        className="w-full p-2 border border-gray-400 rounded text-black"
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
            <h2 className="text-xl text-green-500  font-semibold">
              Application Received!!!
            </h2>
            <p className="mt-2">
              Thank you for submitting your application! We will contact you if
              our adult entertainment associates are interested in working with
              you.
            </p>
            <p className="mt-2">
              In the meantime, we will automatically register you for an account
              on our webcam modeling platform so you can start making money
              online immediately.
            </p>
            <p className="mt-2">
              Due to the sheer number of applications we receive—several
              thousand per day—it may take a few days before you're contacted.
              So, don’t worry if you don’t immediately hear from an agent or
              representative.
            </p>
            <p className="mt-2 font-semibold text-red-400">
              Make sure to check your spam folder, as email providers often flag
              emails with the word “porn” as spam.
            </p>
            <p className="mt-2 font-semibold text-red-400">
              As of now we are only looking to represent Males that have been
              referred to us by other performers or producers. If that is you,
              <span className="text-blue-400">
                <Link to="/contact">Contact us</Link>
              </span>{" "}
              or send a mail to <span className="text-white">Privatemediatalentagency@gmail.com</span>{" "}
              , but be prepared to tell us who sent you.
            </p>
            <Link to="/">
              <button className="bg-blue-500 py-2 px-2 rounded-md">
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
              {/* Step 1: Personal Information */}
              {step === 1 && (
                <div>
                  <label className="block">Name:</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded text-gray-300"
                    required
                  />

                  <label className="block">Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded text-gray-300"
                    required
                  />

                  <label className="block">Phone:</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded text-gray-300"
                    required
                  />

                  <label className="block">Date of Birth:</label>
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded text-gray-300"
                  />

                  <label className="block">Gender</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded text-gray-300"
                  >
                    <option value="">select</option>
                    <option className="text-black" value="Male">
                      Male
                    </option>
                    <option className="text-black" value="Female">
                      Female
                    </option>
                  </select>

                  <label className="block">Ethnicity:</label>
                  <input
                    type="text"
                    name="ethnicity"
                    value={formData.ethnicity}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded text-gray-300"
                  />

                  <label className="block">Height (cm):</label>
                  <input
                    type="number"
                    name="height"
                    value={formData.height}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded text-gray-300"
                  />

                  <label className="block">Weight (kg):</label>
                  <input
                    type="number"
                    name="weight"
                    value={formData.weight}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded text-gray-300"
                  />

                  <label className="block">Body Type:</label>
                  <input
                    type="text"
                    name="bodyType"
                    value={formData.bodyType}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded text-gray-300"
                  />

                  <label className="block">Hair Color:</label>
                  <input
                    type="text"
                    name="hairColor"
                    value={formData.hairColor}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded text-gray-300"
                  />

                  <label className="block">Eye Color:</label>
                  <input
                    type="text"
                    name="eyeColor"
                    value={formData.eyeColor}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded text-gray-300"
                  />

                  <label className="block">Sexual Orientation:</label>
                  <select
                    name="sexualOrientation"
                    value={formData.sexualOrientation}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded text-gray-300"
                  >
                    <option className="text-black" value="">
                      Select
                    </option>
                    <option className="text-black" value="Straight">
                      Straight
                    </option>
                    <option className="text-black" value="Gay/Lesbian">
                      Gay/Lesbian
                    </option>
                    <option className="text-black" value="Bisexual">
                      Bisexual
                    </option>
                  </select>
                </div>
              )}

              {/* Step 2: Experience */}
              {step === 2 && (
                <div>
                  <label className="block">Experience:</label>
                  <textarea
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded text-gray-300"
                  />
                  <label className="block">Work Samples (Links):</label>
                  <input
                    type="text"
                    name="workSamples"
                    value={formData.workSamples}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded text-gray-300"
                  />

                  <label className="block">Social Media Links:</label>
                  <input
                    type="text"
                    name="socialMedia"
                    value={formData.socialMedia}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded text-gray-300"
                  />
                </div>
              )}

              {/* Step 3: File Uploads */}
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
                    accept="image/*,application/pdf"
                  />
                  <FileUpload label="Selfie" name="selfie" accept="image/*" />
                  <FileUpload
                    label="Body Shot (Front)"
                    name="frontBodyPic"
                    accept="image/*"
                  />
                  <FileUpload
                    label="Body Shot (Back)"
                    name="backBodyPic"
                    accept="image/*"
                  />
                  <FileUpload
                    label="Chest/Stomach"
                    name="chestStomach"
                    accept="image/*"
                  />
                  <FileUpload
                    label="Genitals (Pussy or Cock)"
                    name="genitals"
                    accept="image/*"
                  />
                  <FileUpload label="Ass Shot" name="assPic" accept="image/*" />
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-4">
                {step > 1 && (
                  <button
                    className="bg-blue-600 py-2 px-2 hover:bg-blue-900"
                    type="button"
                    onClick={() => setStep(step - 1)}
                  >
                    Back
                  </button>
                )}
                {step < 3 ? (
                  <button
                    className="bg-blue-600 py-2 px-2 hover:bg-blue-900"
                    type="button"
                    onClick={() => setStep(step + 1)}
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
