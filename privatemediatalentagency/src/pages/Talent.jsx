export default function Talent() {
  const newTalent = [
    {
      id: 1,
      imageUrl: "https://s.definebabe.com/t/ps/1/65/1017363_normal.webp",
      name: "Quincy Silver",
    },
    {
      id: 2,
      imageUrl: "https://pbs.twimg.com/media/FqJVl0BWYAEy1az.jpg:small",
      name: "Kelly Smith",
    },
    {
      id: 3,
      imageUrl:
        "https://www.bringitonline.in/uploads/2/2/4/5/22456530/s300614706325520039_p4_i1_w569.png",
      name: "Dan Rodriguez",
    },
    {
      id: 4,
      imageUrl:
        "https://preview.redd.it/which-one-of-these-male-models-is-the-most-attractive-to-v0-9t9agaus8j9d1.png?width=1080&crop=smart&auto=webp&s=6ac977e036e05b8921e768eec9df073db8ff2824",
      name: "Jake Nicholas",
    },
    {
      id: 5,
      imageUrl:
        "https://assets.s3xstatic.com/images/pantheonbear.com/40992/161562-allen-silver-headshot.jpg",
      name: "Brandon",
    },
    {
      id: 6,
      imageUrl: "https://s.definebabe.com/t/ps/1/67/1019291_normal.webp",
      name: "Luna Roe",
    },
    {
      id: 7,
      imageUrl:
        "https://imgs1cdn.adultempire.com/actor/222/279946_body/christian-xxx.jpg",
      name: "Roland White",
    },
    {
      id: 8,
      imageUrl: "https://s.definebabe.com/t/ps/1/67/1015076_normal.webp",
      name: "Kira",
    },
  ];

  const femaleTalent = [
    {
      id: 1,
      imageUrl: "https://s.definebabe.com/t/ps/1/67/1019291_normal.webp",
      name: "Luna Roe",
    },
    {
      id: 2,
      imageUrl: "https://s.definebabe.com/t/ps/1/67/1015076_normal.webp",
      name: "Kira",
    },
    {
      id: 3,
      imageUrl: "https://s.definebabe.com/t/ps/1/16/1004648_normal.webp",
      name: "Dior Love",
    },
    {
      id: 4,
      imageUrl: "https://s.definebabe.com/t/ps/1/60/1018874_normal.webp",
      name: "Jade Amanda",
    },
    {
      id: 5,
      imageUrl: "https://s.definebabe.com/t/ps/1/41/1014708_normal.webp",
      name: "Tifanny Wilson",
    },
    {
      id: 6,
      imageUrl: "https://s.definebabe.com/t/ps/1/72/1017501_normal.webp",
      name: "Ivy Mars",
    },
  ];

  const maleTalent = [
    {
      id: 1,
      imageUrl: "https://s.definebabe.com/t/ps/1/76/1020133_normal.webp",
      name: "Adin Steels",
    },
    {
      id: 2,
      imageUrl: "https://s.definebabe.com/t/ps/1/65/1015194_normal.webp",
      name: "Markus Strong",
    },
    {
      id: 3,
      imageUrl:
        "https://www.bringitonline.in/uploads/2/2/4/5/22456530/s300614706325520039_p4_i1_w569.png",
      name: "Dan Rodriguez",
    },
    {
      id: 4,
      imageUrl:
        "https://preview.redd.it/which-one-of-these-male-models-is-the-most-attractive-to-v0-9t9agaus8j9d1.png?width=1080&crop=smart&auto=webp&s=6ac977e036e05b8921e768eec9df073db8ff2824",
      name: "Jake Nicholas",
    },
    {
      id: 5,
      imageUrl:
        "https://assets.s3xstatic.com/images/pantheonbear.com/40992/161562-allen-silver-headshot.jpg",
      name: "Brandon",
    },
  ];

  return (
    <div className=" text-white text-xl text-center font-semibold">
      <div className="bg-gradient-to-r from-blue-200 to-blue-900 py-2">
        <h1 className="text-2xl">New Talents</h1>
        <p className="text-lg">Our Roster of New Talents</p>
      </div>

      {/* Scrollable Container */}
      <div className="overflow-x-auto whitespace-nowrap px-4 py-4 bg-black">
        <div className="flex space-x-4">
          {newTalent.map((talent) => (
            <div
              key={talent.id}
              className="bg-gray-900 p-4 rounded-lg shadow-md min-w-[200px] max-w-[200px]"
            >
              <img
                src={talent.imageUrl}
                alt={talent.name}
                className="w-full h-40 object-cover rounded-lg"
              />
              <p className="mt-2 text-lg font-bold">
                {talent.name || "Unnamed"}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-200 to-blue-900 py-2">
        <h1 className="text-2xl">Female Talents</h1>
        <p className="text-lg">Our Roster of Female Talents</p>
      </div>

      {/* Scrollable Container */}
      <div className="overflow-x-auto whitespace-nowrap px-4 py-4 bg-black">
        <div className="flex space-x-4">
          {femaleTalent.map((talent) => (
            <div
              key={talent.id}
              className="bg-gray-900 p-4 rounded-lg shadow-md min-w-[200px] max-w-[200px]"
            >
              <img
                src={talent.imageUrl}
                alt={talent.name}
                className="w-full h-40 object-cover rounded-lg"
              />
              <p className="mt-2 text-lg font-bold">
                {talent.name || "Unnamed"}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-200 to-blue-900 py-2">
        <h1 className="text-2xl">Male Talents</h1>
        <p className="text-lg">Our Roster of Male Talents</p>
      </div>

      {/* Scrollable Container */}
      <div className="overflow-x-auto whitespace-nowrap px-4 py-4 bg-black">
        <div className="flex space-x-4">
          {maleTalent.map((talent) => (
            <div
              key={talent.id}
              className="bg-gray-900 p-4 rounded-lg shadow-md min-w-[200px] max-w-[200px]"
            >
              <img
                src={talent.imageUrl}
                alt={talent.name}
                className="w-full h-40 object-cover rounded-lg"
              />
              <p className="mt-2 text-lg font-bold">
                {talent.name || "Unnamed"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
