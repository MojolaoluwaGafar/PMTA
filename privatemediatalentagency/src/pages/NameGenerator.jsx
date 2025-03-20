import { useState } from "react";

const femaleAdjectives = [
  "Sultry",
  "Exotic",
  "Fiery",
  "Wild",
  "Sensual",
  "Magnetic",
  "Seductive",
];
const femaleNouns = ["Angel", "Vixen", "Diva", "Star", "Goddess", "Queen"];

const maleAdjectives = [
  "Rugged",
  "Dominant",
  "Fiery",
  "Bold",
  "Magnetic",
  "Seductive",
  "Wild",
];
const maleNouns = ["King", "Hunter", "Stud", "Alpha", "Beast", "Legend"];

function getRandomName(gender) {
  const adjectives = gender === "male" ? maleAdjectives : femaleAdjectives;
  const nouns = gender === "male" ? maleNouns : femaleNouns;
  const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  return `${adj} ${noun}`;
}

export default function NameGenerator() {
  const [gender, setGender] = useState("female");
  const [name, setName] = useState(getRandomName("female"));

  const generateName = () => setName(getRandomName(gender));

  const copyToClipboard = () => {
    navigator.clipboard.writeText(name);
    alert("Copied to clipboard!");
  };

  return (
    <div className="min-h-screen bg-[url(https://images4.naughtycdn.com/cms/nacmscontent/v1/performers/6500/6533/vertical/400x605c.jpg)] bg-center flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white p-6">
      <div className="bg-gray-800 text-center py-3 px-2 rounded-md">
        <h1 className="text-4xl font-bold mb-4 text-pink-500">
          Talent Name Generator
        </h1>
        <p className="text-center max-w-lg text-gray-300 mb-6">
          Think you have what it takes to become the next big name in the
          industry? First, you need a name that stands out. Use our generator to
          find the perfect stage name!
        </p>

        {/* Gender Selection */}
        <div className="flex justify-center space-x-4">
          <button
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              gender === "female"
                ? "bg-pink-500 hover:bg-pink-600 text-white"
                : "bg-gray-700 hover:bg-gray-600 text-gray-300"
            }`}
            onClick={() => {
              setGender("female");
              setName(getRandomName("female"));
            }}
          >
            Female
          </button>
          <button
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              gender === "male"
                ? "bg-blue-500 hover:bg-blue-600 text-white"
                : "bg-gray-700 hover:bg-gray-600 text-gray-300"
            }`}
            onClick={() => {
              setGender("male");
              setName(getRandomName("male"));
            }}
          >
            Male
          </button>
        </div>

        {/* Generated Name Display */}
        <div className="flex-row mx-auto p-6">
          <p className="text-3xl font-semibold mb-4 text-yellow-400">{name}</p>
          <button
            onClick={generateName}
            className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg mr-2 transition"
          >
            Generate New Name
          </button>
          <button
            onClick={copyToClipboard}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition"
          >
            Copy Name
          </button>
        </div>
      </div>
    </div>
  );
}
