import Card from "../card/page";
import { skillData } from "./data";

const Skills = () => {
  return (
    <div className="mt-25 font-sans px-4 sm:px-6 lg:px-10">
      {/* HEADER */}
      <div className="flex flex-col gap-3 items-center text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-l from-amber-600 via-amber-500 to-amber-300 bg-clip-text text-transparent">
          My Skills
        </h1>

        <p className="text-gray-300 max-w-xl">
          Experienced in developing responsive UI using modern frontend
          technologies 🎨..
        </p>
      </div>

      {/* CARDS GRID */}
      <div
        className="mt-10 flex flex-wrap gap-7 justify-center"
      >
        {skillData.map((item) => (
          <Card
            key={item.id}
            name={item.name}
            logo={item.logo}
            progress={item.progress}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
