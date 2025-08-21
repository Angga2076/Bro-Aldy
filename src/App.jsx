import { useState } from "react";
import { listTools, listProyek } from "./data";

// komponen custom
import ProfileCard from "./components/ProfileCard/ProfileCard";
import ShinyText from "./components/ShinyText/ShinyText";
import BlurText from "./components/BlurText/BlurText";
import Lanyard from "./components/Lanyard/Lanyard";
import ChromaGrid from "./components/ChromaGrid/ChromaGrid";
import ProjectModal from "./components/ProjectModal/ProjectModal";
import Aurora from "./components/Aurora/Aurora";
import ChatRoom from "./components/ChatRoom/ChatRoom";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Effect */}
      <Aurora />

      {/* Navbar */}
      <header className="flex items-center justify-between px-8 py-4">
        <h1 className="text-xl font-bold">Faris Portfolio</h1>
        <nav>
          <a
            href="/CV.pdf"
            download="Faris_Edrik_Prayoga_CV.pdf"
            className="px-4 py-2 bg-indigo-600 rounded-md hover:bg-indigo-500 transition"
          >
            Download CV
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center mt-10">
        <div className="flex justify-center">
          <img src="/faris1.png" alt="Faris" className="w-28 h-28 rounded-full shadow-lg" />
        </div>
        <h2 className="text-3xl font-bold mt-4">Hi, I’m Faris</h2>
        <ShinyText text="Frontend Developer & Designer" className="text-lg mt-2" />
      </section>

      {/* Profile Card */}
      <section className="flex justify-center mt-10">
        <ProfileCard
          name="Faris Edrik Prayoga"
          avatarUrl="/faris.png"
          role="React Developer"
          description="Membangun aplikasi web modern dengan React, Tailwind, dan integrasi API."
        />
      </section>

      {/* Tools Section */}
      <section className="mt-16 px-8">
        <h3 className="text-2xl font-bold mb-6">My Tools</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {listTools.map((tool) => (
            <div key={tool.id} className="flex flex-col items-center space-y-2">
              <img src={tool.gambar} alt={tool.nama} className="w-12 h-12" />
              <p className="text-sm">{tool.nama}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="mt-16 px-8">
        <h3 className="text-2xl font-bold mb-6">Projects</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {listProyek.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition"
              onClick={() => setSelectedProject(project)}
            >
              <img src={project.gambar} alt={project.nama} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h4 className="font-semibold">{project.nama}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}

      {/* Lanyard / Fun Section */}
      <section className="mt-16 px-8">
        <h3 className="text-2xl font-bold mb-6">Fun 3D</h3>
        <div className="flex justify-center">
          <Lanyard texture="/lanyard.png" />
        </div>
      </section>

      {/* Chat Room */}
      <section className="mt-16 px-8">
        <h3 className="text-2xl font-bold mb-6">Let’s Chat</h3>
        <ChatRoom />
      </section>

      {/* Footer */}
      <footer className="text-center py-10 text-gray-400 text-sm">
        © {new Date().getFullYear()} Faris Portfolio
      </footer>
    </div>
  );
}

export default App;
