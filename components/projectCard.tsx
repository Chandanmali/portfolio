import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import Link from "next/link";

export const ProjectCard = ({ imgp, name, tech, des, url }: any) => {
  return (
    <div className="w-full max-w-sm">
      <div className="font-sans border border-l-2 border-t-2 border-gray-700 rounded-2xl bg-gray-800 overflow-hidden hover:scale-105 transition duration-300">
        {/* IMAGE */}
        <div className="w-full">
          <Image
            src={imgp}
            alt={name}
            width={400}
            height={250}
            className="w-full h-[180px] sm:h-[200px] object-cover"
          />
        </div>

        {/* CONTENT */}
        <div className="mt-2 px-4 sm:px-5 pb-4">
          <h1 className="text-lg sm:text-xl font-bold">{name}</h1>

          <p className="text-sm text-gray-300 mt-1 line-clamp-3">{des}</p>

          {/* TECH TAGS */}
          <div className="flex flex-wrap gap-2 mt-3">
            {tech.map((skill: string, index: number) => (
              <span
                key={index}
                className="px-2 py-1 text-xs bg-gray-700 rounded-md"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* BUTTONS */}
          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <button className="w-full sm:w-auto px-4 py-2 bg-gray-700 font-bold rounded-lg flex justify-center items-center gap-2">
              <FaGithub size={16} />
              Code
            </button>

            <Link
              href={url}
              target="_blank"
              className="w-full sm:w-auto px-4 py-2 bg-gradient-to-l from-amber-300 via-amber-500 to-amber-600 font-bold rounded-lg flex justify-center items-center gap-2"
            >
              Live Demo
              <FaArrowRightFromBracket size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
