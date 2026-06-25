import profile from "/src/assets/profile.png";

const MainContent = () => {
  return (
    <section className="h-screen bg-[#2E3348] flex items-center overflow-hidden">
      {/* LEFT */}
      <div className="w-1/2 pl-20 z-10">
        <h1 className="text-white font-bold leading-none text-[90px]">
          Steven
          <br />
          Fernandez.
        </h1>

        <div className="w-16 h-1 bg-[#00F3FF] mt-8"></div>

        <div className="flex gap-6 mt-12 text-gray-400">
          <span className="cursor-pointer hover:text-[#00F3FF]">
            GitHub
          </span>

          <span className="cursor-pointer hover:text-[#00F3FF]">
            Facebook
          </span>

          <span className="cursor-pointer hover:text-[#00F3FF]">
            LinkedIn
          </span>
        </div>
      </div>

      <div className="w-1/2 h-full flex justify-end items-end">
        <img
          src={profile}
          alt="Steven"
          className="h-[95vh] object-contain"
        />
      </div>
    </section>
  );
};

export default MainContent;