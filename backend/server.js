require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const nodemailer = require("nodemailer");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const app = express();
app.use(express.json());
app.use(cors());

// ✅ Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ MongoDB Connection Error:", err));

// ✅ Multer setup for file uploads
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage });

// ✅ Define Mongoose Schema & Model for Applications
const applicationSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  dob: String,
  gender: String,
  weight: String,
  height: String,
  ethnicity: String,
  bodyType: String,
  eyeColor: String,
  hairColor: String,
  sexualOrientation: String,
  experience: String,
  workSamples: String,
  socialMedia: String,
  profilePic: String,
  idProof: String,
  selfie: String,
  frontBodyPic: String,
  backBodyPic: String,
  chestStomach: String,
  genitals: String,
  assPic: String,
  submittedAt: { type: Date, default: Date.now },
});

const Application = mongoose.model("Application", applicationSchema);

// ✅ Nodemailer Configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// ✅ Send Email Function
const sendEmail = async (subject, text) => {
  try {
    await transporter.sendMail({
      from: `"PMTA Admin" <${process.env.EMAIL}>`,
      to: process.env.EMAIL,
      subject,
      text,
    });
    console.log("✅ Email sent successfully!");
  } catch (error) {
    console.error("❌ Error sending email:", error);
  }
};

// ✅ Contact Form Submission Route
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    await sendEmail(
      `New Contact Form Message from ${name}`,
      `
      Name: ${name}
      Email: ${email}
      Subject: ${subject}
      Message: ${message}
    `
    );

    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("❌ Error:", error);
    res.status(500).json({ error: "Failed to send message" });
  }
});

// ✅ Application Form Submission Route (With File Upload)
app.post(
  "/api/submit",
  upload.fields([
    { name: "profilePic" },
    { name: "idProof" },
    { name: "selfie" },
    { name: "frontBodyPic" },
    { name: "backBodyPic" },
    { name: "chestStomach" },
    { name: "genitals" },
    { name: "assPic" },
  ]),
  async (req, res) => {
    try {
      console.log("🚀 Received application data:", req.body);

      const {
        name,
        email,
        phone,
        dob,
        gender,
        weight,
        height,
        ethnicity,
        bodyType,
        eyeColor,
        hairColor,
        sexualOrientation,
        experience,
        workSamples,
        socialMedia,
      } = req.body;

      if (!name || !email || !phone) {
        return res
          .status(400)
          .json({ error: "Name, Email, and Phone are required" });
      }

      // ✅ Store file paths
      const fileUrls = {};
      if (req.files) {
        Object.keys(req.files).forEach((key) => {
          fileUrls[key] = `/uploads/${req.files[key][0].filename}`;
        });
      }

      // ✅ Save application to MongoDB
      const newApplication = new Application({
        name,
        email,
        phone,
        dob,
        gender,
        weight,
        height,
        ethnicity,
        bodyType,
        eyeColor,
        hairColor,
        sexualOrientation,
        experience,
        workSamples,
        socialMedia,
        ...fileUrls,
      });

      console.log("📝 Saving application:", newApplication);
      await newApplication.save();
      console.log("✅ Application saved to MongoDB!");

      // ✅ Send Email Notification
      let emailBody = `
New application submitted:

Name: ${name}
Email: ${email}
Phone: ${phone}
DOB: ${dob || "N/A"}
Gender: ${gender || "N/A"}
Weight: ${weight || "N/A"}
Height: ${height || "N/A"}
Ethnicity: ${ethnicity || "N/A"}
Body Type: ${bodyType || "N/A"}
Eye Color: ${eyeColor || "N/A"}
Hair Color: ${hairColor || "N/A"}
Sexual Orientation: ${sexualOrientation || "N/A"}
Experience: ${experience || "N/A"}
Work Samples: ${workSamples || "N/A"}
Social Media: ${socialMedia || "N/A"}

Uploaded Files:
${Object.entries(fileUrls)
  .map(([key, url]) => `${key}: ${url}`)
  .join("\n")}
`;

      await sendEmail("New Application Form Submission", emailBody);
      res.json({
        message: "Application submitted and email sent successfully!",
      });
    } catch (error) {
      console.error("❌ Error:", error);
      res.status(500).json({ message: "Error processing application" });
    }
  }
);

// ✅ Fetch all applications
app.get("/api/applications", async (req, res) => {
  try {
    const applications = await Application.find();
    res.json(applications);
  } catch (error) {
    res.status(500).json({ error: "Error fetching applications" });
  }
});

// ✅ Default Route
app.get("/", (req, res) => {
  res.send("✅ PMTA API is running...");
});

// ✅ Start Server
const PORT = process.env.PORT || 5100;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
