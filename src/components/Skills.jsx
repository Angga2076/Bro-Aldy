const skills = [
  "React", "Next.js", "TailwindCSS", "Node.js", 
  "Firebase", "GitHub", "Figma", "MySQL"
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 text-center">
      <h2 className="text-2xl font-bold mb-6">Tools & Technologies</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="bg-gray-800 p-4 rounded-xl shadow hover:scale-105 transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
