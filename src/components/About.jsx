export default function About() {
  return (
    <section id="about" className="py-20 px-6 text-center">
      <h2 className="text-2xl font-bold mb-6">About Me</h2>
      <p className="max-w-3xl mx-auto text-gray-300">
        Saya seorang Full Stack Developer yang berfokus pada pembuatan aplikasi
        modern, high-performance, dan mudah digunakan. Saya suka menggabungkan
        kreativitas dengan logika untuk menciptakan solusi digital yang impactful.
      </p>
      <div className="flex justify-center gap-8 mt-10">
        <div>
          <h3 className="text-3xl font-bold text-blue-400">20+</h3>
          <p>Projects</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-blue-400">3+</h3>
          <p>Years Experience</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-blue-400">3.8/4.0</h3>
          <p>GPA</p>
        </div>
      </div>
    </section>
  );
}
