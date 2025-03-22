const API_URL = "http://localhost:5100/api/apply"; // Change to deployed URL later

export const submitApplication = async (formData) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      body: formData, // Must be FormData for file uploads
    });

    if (!response.ok) throw new Error("Failed to submit application");

    return await response.json();
  } catch (error) {
    console.error("Error:", error);
    return { error: error.message };
  }
};
