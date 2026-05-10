import Image from "next/image";

const Card = ({ name, logo, progress }: any) => {
  return (
    <div className="w-full max-w-xs ">
      <div className="border-2 border-l-4 border-t-4 border-gray-700 rounded-xl px-4 sm:px-5 py-5 bg-gray-800 hover:scale-105 transition duration-300">
        {/* TOP */}
        <div className="flex items-center justify-between gap-3">
          <Image
            src={logo}
            alt={name}
            width={50}
            height={50}
            className="w-10 h-10 sm:w-12 sm:h-12 object-contain p-1 bg-blue-950 rounded-lg"
          />
          <h1 className="font-bold text-lg sm:text-xl text-right">{name}</h1>
        </div>

        {/* PROGRESS TEXT */}
        <div className="flex justify-between mt-5 text-sm sm:text-base">
          <span>Proficiency</span>
          <span>{progress}%</span>
        </div>

        {/* PROGRESS BAR */}
        <div className="w-full bg-gray-700 rounded-full mt-2 h-2 sm:h-3 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-l from-amber-300 via-amber-500 to-amber-600 transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Card;
