import React, { useState } from 'react';
import { Menu, X, Palette, Layout, Smartphone, Monitor, Award, ArrowRight, Github, Linkedin } from 'lucide-react';

// Components
const ProjectCard = ({ title, description, image, tags }: { title: string; description: string; image: string; tags: string[] }) => (
  <div className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:shadow-xl">
    <div className="aspect-video overflow-hidden">
      <img src={image} alt={title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
    </div>
    <div className="p-6">
      <h3 className="mb-2 text-xl font-semibold text-gray-900">{title}</h3>
      <p className="mb-4 text-gray-600">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    {
      title: "Cafe Website",
      description: "design of an cafe website focusing on user experience and conversion optimization",
      image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=2078&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["UX Design", "UI Design", "E-commerce"]
    },
    {
      title: "Spice Trade App",
      description: "A modern spice trade app crafted with user-centered UI/UX design and rapid prototyping—ensuring accessibility, seamless navigation",
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["Mobile App", "Prototyping", "UI Design"]
    },
    {
      title: "Ziva Logistics Platform",
      description: "Designed an intuitive, user-centric interface to simplify freight operations, enhance visibility, and streamline complex logistics workflows through seamless UI/UX",
      image: "https://plus.unsplash.com/premium_photo-1661879449050-069f67e200bd?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["Logistics", "Web App", "UX Research"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            <div className="flex items-center">
              <Palette className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Jannashin</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              <a href="#work" className="text-gray-600 hover:text-gray-900">Work</a>
              <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
              <a href="#contact" className="rounded-full bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700">
                Let's Chat
              </a>
            </div>

            {/* Mobile Navigation Button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 px-4 pb-3 pt-2">
              <a href="#work" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Work</a>
              <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-gray-900">About</a>
              <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Let's Chat</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative mt-16 bg-gradient-to-br from-indigo-50 to-purple-50 px-4 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 py-16 md:grid-cols-2 md:items-center">
            <div>
              <h1 className="mb-6 text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
                Hey there! 👋
                <span className="block text-indigo-600">Let's Create Something Amazing</span>
              </h1>
              <p className="mb-8 text-xl text-gray-600">
                I love turning ideas into delightful digital experiences that make people's lives easier and more enjoyable.
              </p>
              <a
                href="#work"
                className="inline-flex items-center rounded-full bg-indigo-600 px-6 py-3 text-white transition-colors hover:bg-indigo-700"
              >
                See My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80"
                alt="Design Workspace"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">How I Can Help</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-white p-8 shadow-lg">
              <Layout className="mb-4 h-8 w-8 text-indigo-600" />
              <h3 className="mb-4 text-xl font-semibold">UI Design</h3>
              <p className="text-gray-600">Let's make your product look amazing and feel intuitive. Beautiful interfaces that users will love!</p>
            </div>
            <div className="rounded-xl bg-white p-8 shadow-lg">
              <Smartphone className="mb-4 h-8 w-8 text-indigo-600" />
              <h3 className="mb-4 text-xl font-semibold">UX Design</h3>
              <p className="text-gray-600">Together, we'll create seamless experiences that make your users smile and keep coming back.</p>
            </div>
            <div className="rounded-xl bg-white p-8 shadow-lg">
              <Monitor className="mb-4 h-8 w-8 text-indigo-600" />
              <h3 className="mb-4 text-xl font-semibold">Product Design</h3>
              <p className="text-gray-600">From idea to launch, I'll help bring your vision to life with a user-first approach.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">Recent Projects</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=800&q=80"
                alt="Design Process"
                className="rounded-xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900">My Approach</h2>
              <p className="mb-6 text-gray-600">
                I believe great design is about solving problems and creating joy. Every project starts with understanding your goals 
                and your users' needs. Then, we work together to create something that's not just beautiful, but truly meaningful.
              </p>
              <div className="mb-8 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-3xl font-bold text-indigo-600">5+</p>
                  <p className="text-gray-600">Happy Projects</p>
                </div>
              </div>
              <div className="flex space-x-4">
                <Award className="h-6 w-6 text-indigo-600" />
                <p className="text-gray-600">Design That Makes a Difference</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">Ready to Create Something Amazing?</h2>
            <p className="mb-8 text-gray-600">
              Let's chat about your project over a virtual coffee! ☕
            </p>
            <a
              href="jannashin06@gmail.com"
              className="inline-flex items-center rounded-full bg-indigo-600 px-6 py-3 text-white transition-colors hover:bg-indigo-700"
            >
              Say Hello
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <div className="mt-8 flex justify-center space-x-6">
              <a href="https://github.com/Jannashin" className="text-gray-600 hover:text-gray-900">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/jannashin-57260425a/" className="text-gray-600 hover:text-gray-900">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-gray-600">© 2025 Jannashin. Spreading joy through design! ✨</p>
        </div>
      </footer>
    </div>
  );
}

export default App;