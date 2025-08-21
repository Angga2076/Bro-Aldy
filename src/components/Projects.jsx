const projects = [
  {
    title: "IoT Heartbeat Monitoring",
    desc: "Healthcare IoT project",
    img: "https://via.placeholder.com/400x200"
  },
  {
    title: "Personal Web Portfolio",
    desc: "My interactive portfolio",
    img: "https://via.placeholder.com/400x200"
  },
  {
    title: "Color Blindness App",
    desc: "Cross-platform detection app",
    img: "https://via.placeholder.com/400x200"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 text-center">
      <h2 className="text-2xl font-bold mb-10">Projects</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-gray-800 rounded-xl overflow-hidden shadow hover:scale-105 transition"
          >
            <img src={p.img} alt={p.title} />
            <div className="p-4">
              <h3 className="text-xl font-bold">{p.title}</h3>
              <p className="text-gray-400">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
