export default function Section2() {
  const images = [
    {
      id: 1,
      URL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0dzV9gsOPTsEagYkoESRi8kFnudQNoWVmhQ&s",
      service: "Global Opportunities",
    },
    {
      id: 2,
      URL: "https://images.squarespace-cdn.com/content/v1/60b7aa0c19d12065d2eb5e01/1635036219992-A7JO7DJC3LM0RF45734V/Meaghan+Peckham+Photography-42.jpg",
      service: "Best Rates",
    },
    {
      id: 3,
      URL: "https://cdni.pornpics.com/460/7/130/67352620/67352620_098_3999.jpg",
      service: "Privacy & Security",
    },
    {
      id: 4,
      URL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPJuZVB7IwvOx-1Mgc5AnNW1_povnDifd1cw&s",
      service: "Entry",
    },
    {
      id: 5,
      URL: "https://images.squarespace-cdn.com/content/v1/599bc57e59cc682bd65fb989/1546927481807-D0XKITWPGIM4XCLU91NW/fine+art+Nude+couple+photography+Orlando",
      service: "Variety of Roles",
    },
    {
      id: 6,
      URL: "https://pbs.twimg.com/media/CFYNhGvUkAAhOmx.jpg",
      service: "Full Support",
    },
  ];

  return (
    <div className="bg-black text-white py-10">
      <h1 className="mx-auto text-center text-3xl w-[350px] font-bold py-10">
        Adult Talent Agency In USA, Canada, And Europe
      </h1>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 max-w-5xl mx-auto">
        {images.map((item) => (
          <div key={item.id} className="relative">
            <img
              src={item.URL}
              alt={item.service}
              className="w-full h-64 object-cover shadow-md transition-transform transform group-hover:scale-105"
            />
            <div className="absolute bottom-25 left-0 right-0 font-extrabold text-white text-2xl text-center py-2">
              {item.service}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
