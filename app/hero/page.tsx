import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row font-sans ">
      {/* LEFT SECTION */}
      <div className="w-full lg:w-1/2 px-6 sm:px-10 lg:px-20 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
        {/* Social Icons */}
        <div className="flex gap-4 mb-5 ">
          <Image src="/instagram.png" alt="insta" width={30} height={30} />
          <Image src="/tiktok.png" alt="tiktok" width={30} height={30} />
          <Image src="/github.png" alt="github" width={30} height={30} />
          <Image src="/youtube.png" alt="youtube" width={30} height={30} />
        </div>

        {/* Heading */}
        <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl mb-5">
          Hi, I'm Chandan <span className="text-amber-500">MALI</span>
        </h1>

        {/* Description */}
        <p className="text-gray-300 max-w-xl ">
          A passionate React.js & Next.js Developer 💻🚀 who loves building
          modern, responsive web applications 🌐 I focus on creating clean UI
          🎨, smooth user experiences ⚡, and scalable solutions 📈 With skills
          in TypeScript & Tailwind CSS 🧩, I turn ideas into real-world products
          💡 Always learning 📚, always building 🛠️, and always improving 🔥
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            href="https://drive.google.com/file/d/1-fN56m4035B-Lle_uB8StU-6HXqoLMSL/view?usp=drivesdk"
            target="_blank"
          >
            <button className="bg-gradient-to-r from-amber-600 to-amber-500 px-6 py-2 rounded-full font-bold text-lg w-full sm:w-auto">
              Download CV
            </button>
          </Link>

          <Link
            href="https://www.linkedin.com/in/chandan-mali-a116951b9"
            target="_blank"
          >
            <button className="border-2 border-amber-500 px-6 py-2 rounded-full font-bold text-lg w-full sm:w-auto">
              Contact Me
            </button>
          </Link>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="w-full lg:w-1/2 flex justify-center items-center mt-10 lg:mt-0 px-5">
        <Image
          src="/businessman-working-on-laptop.png"
          alt="dev Image"
          width={500}
          height={400}
          className="w-full max-w-md lg:max-w-lg h-auto object-contain"
          priority
        />
      </div>
    </div>
  );
};

export default Hero;
