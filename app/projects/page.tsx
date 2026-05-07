import { ProjectCard } from "@/components/projectCard";
import { projectData } from "./projectData";

const Projects = () => {
  return (
    <div className="mt-20 font-sans px-4 sm:px-6 lg:px-10">
      {/* HEADER */}
      <div className="flex flex-col gap-3 items-center text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-l from-amber-600 via-amber-500 to-amber-300 bg-clip-text text-transparent">
          My Projects
        </h1>
        <p className="text-gray-300 max-w-xl">
          A showcase of my recent work...
        </p>
      </div>

      {/* PROJECT GRID */}
      <div
        className="grid mt-10 gap-6 sm:gap-8 lg:gap-10
                   grid-cols-1
                   sm:grid-cols-2
                   md:grid-cols-2
                   lg:grid-cols-3"
      >
        {projectData.map((item) => (
          <ProjectCard
            key={item.id}
            imgp={item.imgp}
            name={item.name}
            tech={item.tech}
            des={item.des}
            url={item.url}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
