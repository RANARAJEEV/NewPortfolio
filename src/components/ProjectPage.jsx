import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Model211 from "./Model211"; // background 3D model

const projects = [
  {
    title: "Employee Management System",
    description:
      "A full-stack Java-based system to manage employees, roles, and departments with secure authentication and CRUD operations.",
    tech: ["Java", "Spring Boot", "JPA Repository", "MySQL", "Micro Service","Fiegn Client"],
    link: "#",
    github: "https://github.com/RANARAJEEV/EmployeeManagement",
  },
  {
    title: "Janta Bank Management System",
    description:
      "A banking management system built with Java and MySQL to handle customer accounts, transactions, and reports with role-based access.",
    tech: ["Java", "Spring Boot", "REST API", "MySQL", "JSP", "Tailwind"," JPA Repository","Micro Service","Fiegn Client",],
    link: "#",
    github: "https://github.com/RANARAJEEV/JANTABANK-MANAGEMENT-SYSTEM",
  },
];

const ProjectPage = () => {
  return (
    <section className="relative min-h-screen text-white py-20 px-6 md:px-16 lg:px-32 overflow-hidden">
      {/* Background 3D Model */}
      <div className="absolute inset-0 z-0">
        <Model211 />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10">
        {/* Page Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bring font-extrabold text-center text-emerald-400 mb-12"
        >
          🚀 My Projects
        </motion.h1>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-20">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20 flex flex-col justify-between"
            >
              <h2 className="text-2xl font-ubntu text-emerald-300 mb-3">
                {project.title}
              </h2>
              <p className="text-gray-300 font-ubntu mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-sm font-ubntu bg-emerald-400/20 text-emerald-300 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4 mt-4">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="flex font-ubntu items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
                >
                  <FaGithub /> Code
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
