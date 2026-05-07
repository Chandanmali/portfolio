import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="border-t-2 border-gray-700 mt-20 font-sans">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 px-6 sm:px-10 py-10 text-center lg:text-left">
        {/* LEFT */}
        <div>
          <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-cyan-400">
            Portfolio
          </h1>
          <p className="mt-2 text-sm sm:text-base">
            Full Stack Developer & Freelancer
          </p>
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex gap-6 text-2xl sm:text-3xl cursor-pointer">
          <Link href="https://github.com/Chandanmali" target="_blank">
            <FaGithub className="hover:text-amber-400 transition" />
          </Link>

          <Link
            href="https://www.linkedin.com/in/chandan-mali-a116951b9"
            target="_blank"
          >
            <FaLinkedin className="hover:text-amber-400 transition" />
          </Link>

          <Link href="https://x.com/Chandan11844766" target="_blank">
            <FaTwitter className="hover:text-amber-400 transition" />
          </Link>
        </div>

        {/* RIGHT */}
        <div className="font-semibold text-sm sm:text-base">
          © 2026 Made with ❤️ by{" "}
          <span className="font-bold text-amber-400">Chandan Mali</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
