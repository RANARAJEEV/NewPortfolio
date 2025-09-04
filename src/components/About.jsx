import React, { useState,useEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
const About = () => {
const imgParentRef = useRef(null);
const sectionRef = useRef(null);
const [showAllSkills, setShowAllSkills] = useState(false);
const [showAllTools, setShowAllTools] = useState(false);
const socialRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      imgParentRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, delay:0.6,duration: 1, ease: "power3.out" }
    );
    gsap.from((".about"),{
            x:'-160px',
            opacity:0,
            duration:1
    }
    );
  }, []);

useEffect(() => {
gsap.fromTo(
sectionRef.current.querySelectorAll(".fade-up"),
{ y: 80, opacity: 0 },
{ y: 0, opacity: 1, duration: 1.2, stagger: 0.3, ease: "power3.out" }
);
}, []);


const skills = [
"JAVA","Multithreading" ,"MVC Pattern","WEB Services","MICRO SERVICES","Jdbc","Hibernate","Oops","Genric",  "GSAP","collection Framework","Tailwind CSS", "JavaScript", "Framer Motion",
"MySQL","HTML5","Junit", "CSS3", "Bootstrap", "REST API","Material ui", "Vite", "Java", "Spring Boot", "Thymeleaf","swiper js",
];


const tools = [
"Git", "VS Code","IntelliJ IDEA","Eclipse","MySQL Workbench", "Maven","Gradel","Mockito","Postman","Swagger", "AnyDesk","Prettier"
,"Spline"
];


const visibleSkills = showAllSkills ? skills : skills.slice(0, 12);
const visibleTools = showAllTools ? tools : tools.slice(0, 12);

  return (
    <>
    <section className="flex flex-col md:flex-row bg-gray-900 items-center justify-between gap-10 px-6 md:px-20 py-12 pt-16">
      {/* Left: Profile Image */}
      <div className="flex items-center justify-center w-full md:w-1/2">
        <div ref={imgParentRef}
          className=""
        >
             <motion.div
      whileHover={{ scale: 1.1,y:-5 }}
      whileTap={{ scale: 1.05 }} 
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
      className="cursor-pointer bg-[#76D2F2] w-72 h-72 flex items-center justify-center 
                        rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] 
                        shadow-[15px_15px_15px_25px_rgba(23,54,66,0.616)]
                     overflow-hidden"
    >
        <img
            src="/images/Rlogo.png"
            alt="Profile"
            className="w-84 h-95 transition-transform duration-300 ease-out hover:scale-105"
          />
    </motion.div>
          
        </div>
      </div>

      {/* Right: Text Section */}
      <div className="flex flex-col items-start justify-center text-left w-full md:w-1/2">
        <h2 className="text-3xl about font-bring md:text-4xl font-bold text-emerald-400 mb-4">
          ABOUT ME
        </h2>
        <h3 className="text-xl font-ubntu md:text-2xl text-rose-400 mb-4">
          FULLSTACK DEVELOPER
        </h3>
        <p className="  text-indigo-400 font-ubntu  leading-relaxed mb-6 ">
          Accomplished Java Developer With Two Years Of Experience Designing,
          Developing, And Deploying Robust, Scalable Applications. Proficiently
          Builds And Optimizes Microservices And Web Services, Specializing In
          Restful API Implementations. Expertly Crafts Dynamic User Interfaces
          Using HTML, CSS, Javascript, And Modern Frameworks Like Bootstrap,
          Tailwind, And Material UI.  
        </p>
        <button onClick={() => {
    socialRef.current?.scrollIntoView({ behavior: "smooth" });
  }} className="px-6 py-2 bg-[#76D2F2]  font-ubntu tracking-widest text-white font-semibold rounded-lg shadow-md hover:bg-[#5bbbdc] transition-all">
          Contact Me
        </button>
      </div>
    </section>
    <section  className="flex min-h-screen bg-gray-900 flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-20 py-12 ">
    
    <div ref={sectionRef} className="min-h-screen w-full bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg rounded-2xl  text-gray-800 flex flex-col items-center px-4 sm:px-6 lg:px-12 py-16 ">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-4xl font-bring sm:text-5xl lg:text-6xl font-extrabold mb-12 text-center text-blue-600 drop-shadow-md"
      >
        About Me
      </motion.h1>

      {/* Skills */}
      <div className="fade-up w-full max-w-6xl mb-16 text-center px-2 sm:px-6">
        <h2 className="text-2xl font-mery sm:text-3xl font-semibold mb-6 text-black">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {visibleSkills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y:0}}
              // animate={{ opacity: 1, y: 0 }}
              // transition={{ duration: 0.8, delay: i * 0.05 }}
              whileHover={{ scale: 1.1, rotate: 2 }}
              className="p-4 sm:p-5 tracking-wider font-ubntu rounded-2xl shadow-lg bg-white text-center font-medium text-base sm:text-lg hover:shadow-2xl transition"
            >
              {skill}
            </motion.div>
          ))}
        </div>
        <button
          onClick={() => setShowAllSkills(!showAllSkills)}
          className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition"
        >
          {showAllSkills ? "Show Less" : "Show More"}
        </button>
      </div>

      {/* Tools */}
      <div className="fade-up w-full max-w-6xl mb-16 text-center px-2 sm:px-6">
        <h2 className="text-2xl font-mery sm:text-3xl font-semibold mb-6 text-red-800">Tools</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {visibleTools.map((tool, i) => (
            <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
              // animate={{ opacity: 1, y: 0 }}
              // transition={{ duration: 0.8, delay: i * 0.05 }}
              whileHover={{ scale: 1.1, rotate: -2 }}
              className="p-4 sm:p-5 font-ubntu tracking-wider rounded-2xl shadow-lg bg-white text-center font-medium text-base sm:text-lg hover:shadow-2xl transition"
            >
              {tool}
            </motion.div>
          ))}
        </div>
        <button
          onClick={() => setShowAllTools(!showAllTools)}
          className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition"
        >
          {showAllTools ? "Show Less" : "Show More"}
        </button>
      </div>

      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="fade-up w-full max-w-4xl mt-12 bg-white shadow-2xl rounded-2xl p-6 sm:p-8 text-center"
      >
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-gray-700">Get in Touch</h2>
        <div className="flex flex-col md:flex-row md:justify-center md:gap-16 gap-6 text-base sm:text-lg">
          <div className="flex items-center gap-2 justify-center">
            <FaMapMarkerAlt className="text-blue-500" />
            <span>Faridabad, India</span>
          </div>
          <a href="tel:+919354507377" className="flex items-center gap-2 justify-center hover:text-green-600 transition">
            <FaPhone className="text-green-500" />
            <span>+91 9354507377</span>
          </a>
          <a href="mailto:ranarajeevsingh1540@gmail.com" className="flex items-center gap-2 justify-center hover:text-red-600 transition">
            <FaEnvelope className="text-red-500" />
            <span>ranarajeevsingh1540@gmail.com</span>
          </a>
        </div>

        {/* Social Links */}
        <div ref={socialRef}  className="mt-8 flex justify-center gap-6 sm:gap-8">
          <motion.a
            href="https://github.com/RANARAJEEV"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.2, rotate: 10 }}
          >
            <FaGithub size={28} className="sm:size-32 hover:text-gray-700 transition" />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/rajeev-singh-0b7413279?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.2, rotate: -10 }}
          >
            <FaLinkedin size={28} className="sm:size-32 text-blue-600 hover:text-blue-800 transition" />
          </motion.a>
        </div>
      </motion.div>
    </div>

    </section>
    </>
  );
};

export default About;
