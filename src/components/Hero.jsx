export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <img
        src="https://via.placeholder.com/200"
        alt="profile"
        className="rounded-full w-40 mb-6 border-4 border-blue-500"
      />
      <h2 className="text-3xl font-bold">
        Hi, I'm <span className="text-blue-400">Your Name</span>
      </h2>
      <p className="mt-4 max-w-xl">
        A passionate web developer dedicated to crafting modern, high-performance
        digital experiences 🚀
      </p>
      <div className="mt-6 flex gap-4">
        <a
          href="#projects"
          className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600"
        >
          Explore My Projects
        </a>
        <a
          href="/cv.pdf"
          className="px-4 py-2 border border-blue-400 rounded-lg hover:bg-blue-500"
        >
          Download CV
        </a>
      </div>
    </section>
  );
}
