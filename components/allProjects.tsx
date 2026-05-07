import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const AllGithhubProjects = () => {
  return (
    <div>
      <div className="flex justify-center mt-15">
        <Link
          href="https://github.com/Chandanmali"
          className="px-8 py-2 bg-gradient-to-l from-cyan-400 via-cyan-500 to-cyan-600 font-bold text-xl rounded-lg flex items-center gap-2 cursor-pointer text-black "
        >
          <FaGithub size={20} />
          My Github Profile
        </Link>
      </div>
    </div>
  );
};

export default AllGithhubProjects;
