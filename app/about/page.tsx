import Image from "next/image";

const About = () => {
  return (
    <div className="mt-20">
      <div className="flex flex-col lg:flex-row font-sans items-center">
        {/* IMAGE SECTION */}
        <div className="w-full lg:w-1/2 flex justify-center items-center px-5">
          <Image
            src="/businessman-holding-cup.png"
            alt="about"
            width={400}
            height={500}
            className="w-full max-w-sm lg:max-w-md h-auto object-contain"
          />
        </div>

        {/* TEXT SECTION */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-10 lg:px-10 mt-10 lg:mt-0 text-center lg:text-left">
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 bg-gradient-to-l from-amber-600 via-amber-500 to-amber-300 bg-clip-text text-transparent">
            About Me
          </h1>

          {/* Description */}
          <p className="text-gray-300 max-w-xl mx-auto lg:mx-0">
            I’m a passionate Frontend Developer specializing in React.js and
            Next.js, with experience building modern, responsive web
            applications using TypeScript, Tailwind CSS, and Shadcn UI. I enjoy
            turning complex problems into simple, elegant, and user-friendly
            solutions. I’ve worked on projects like AI-powered platforms and
            dynamic web applications, focusing on performance, scalability, and
            clean architecture. I’m continuously learning and exploring new
            technologies to grow as a developer.
          </p>

          {/* STATS */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-6 sm:gap-10 lg:gap-20 mt-8">
            <div className="text-center lg:text-left">
              <div className="bg-gradient-to-l from-amber-600 via-amber-500 to-amber-300 bg-clip-text text-transparent font-bold text-xl sm:text-2xl">
                B.Tech
              </div>
              <div className="font-semibold text-lg sm:text-xl">Education</div>
            </div>

            <div className="text-center lg:text-left">
              <div className="bg-gradient-to-l from-amber-600 via-amber-500 to-amber-300 bg-clip-text text-transparent font-bold text-xl sm:text-2xl">
                8.5
              </div>
              <div className="font-semibold text-lg sm:text-xl">Grade</div>
            </div>

            <div className="text-center lg:text-left">
              <div className="bg-gradient-to-l from-amber-600 via-amber-500 to-amber-300 bg-clip-text text-transparent font-bold text-xl sm:text-2xl">
                Batch
              </div>
              <div className="font-semibold text-lg sm:text-xl">2020-2024</div>
            </div>
          </div>

          {/* BUTTON */}
          <div className="flex justify-center lg:justify-start">
            <button className="border-2 border-amber-500 px-6 py-2 mt-10 rounded-full font-bold text-sm sm:text-base">
              Full Stack Developer & Freelancer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
