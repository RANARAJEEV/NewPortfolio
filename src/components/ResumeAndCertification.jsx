import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ResumeAndCertification = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const sections = containerRef.current.querySelectorAll("section");

    sections.forEach((section, i) => {
      gsap.fromTo(
        section,
        { autoAlpha: 0, y: 80 },
        {
          duration: 1,
          autoAlpha: 1,
          y: 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          delay: i * 0.2,
        }
      );
    });
  }, []);

  return (
    <div className="flex flex-col items-center px-6 md:px-16 pt-[160px] bg-gray-900 lg:px-32 py-10 space-y-16 text-white">
      <div
        ref={containerRef}
        className="flex flex-col items-center w-full space-y-16 text-white 
               bg-white/10 backdrop-blur-lg border border-white/20 
               shadow-lg rounded-2xl p-8 md:p-12"
      >
        {/* Resume Section */}
        <section className="w-full text-center">
          <h2 className="text-3xl font-bold mb-6 text-blue-400 font-bring">
            MY RESUME
          </h2>
          <div className="flex flex-col items-center space-y-6 relative">
            <img
              src="/images/Resume.jpg"
              alt="Resume Preview"
              className="w-full max-w-3xl rounded-lg shadow-lg transform hover:scale-105 transition duration-500 relative z-0"
            />
            <a
              href="/images/RAJEEVRESUME.pdf"
              download
              className="px-6 py-3 bg-blue-600 text-white font-ubntu mt-[20px] font-semibold rounded-lg shadow-md hover:bg-blue-700 transition relative z-10"
            >
              Download PDF
            </a>
          </div>
          <p className="mt-6 text-gray-300 font-ubntu max-w-3xl mx-auto leading-relaxed">
            This resume outlines my academic background, technical skills, and
            project experiences as a data analyst. I’ve worked with tools like
            Python, SQL, Excel, and Power BI to extract insights, build
            dashboards, and automate tasks. Feel free to download the PDF for a
            closer look or connect with me if you’d like to collaborate!
          </p>
        </section>

        {/* Certifications Section */}
        <section className="w-full text-center border-b border-gray-700 pb-12">
          <h2 className="text-3xl font-bold mb-6 text-blue-400 font-bring">
            MY CERTIFICATES
          </h2>
          <p className="mb-8 font-ubntu text-gray-300">
            Here are some of the certifications I’ve earned in data analysis,
            visualization, and programming. Click any image to view or print the
            full certificate.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                src: "/images/IoT.jpg",
                title: "Introduction To Internet Of Things",
              },
              {
                src: "/images/GE.png",
                title: "GeoTechnical Engineering",
              },
              {
                src: "/images/SoftSkill.png",
                title: "Soft Skills",
              },
              {
                src: "/images/POaM.png",
                title: "Public Organization And Management",
              },
              {
                src: "/images/AaC.png",
                title: "Air Pollution And Control",
              },
            ].map((cert, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-3 transform hover:scale-105 transition duration-500"
              >
                <img
                  src={cert.src}
                  alt="Certificate"
                  className="w-full rounded-lg shadow-md cursor-pointer"
                  onClick={() => {
                    const win = window.open("", "_blank");
                    win.document.write(`
              <html>
                <head>
                  <title>${cert.title}</title>
                </head>
                <body style="margin:0; display:flex; justify-content:center; align-items:center; height:100vh; background:#fff;">
                  <img src="${cert.src}" style="max-width:100%; max-height:100%;"/>
                  <script>
                    window.onload = function() {
                      window.print();
                    }
                  </script>
                </body>
              </html>
            `);
                    win.document.close();
                  }}
                />
                <p className="text-sm font-medium font-ubntu text-gray-200">
                  {cert.title}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Internship Section */}
        <section className="w-full text-center">
          <h2 className="text-3xl font-bold mb-6 font-bring text-blue-400">
            INTERNSHIP EXPERIENCE
          </h2>
          <div className="max-w-3xl mx-auto flex flex-col items-center space-y-6 relative">
            <h3 className="text-xl font-semibold font-ubntu">
              Full-Stack Developer Intern @{" "}
              <span className="text-blue-400 font-ubntu">CETPA Infotech</span>
            </h3>
            <p className="text-gray-300 font-ubntu">
              <strong>Duration:</strong> December 2024 – July 2025
            </p>
            <p className="text-gray-300 font-ubntu leading-relaxed">
              🚀 "At CETPA Infotech, I mastered Java Full Stack development,
              crafting dynamic front-end experiences and robust back-end systems
              with Spring Boot. I honed my skills in RESTful API creation,
              efficient coding practices, and database integration—building a
              strong foundation that fueled my passion for backend logic, data
              engineering, and scalable applications.
            </p>
            <img
              src="/images/Offer.jpg"
              alt="Internship Offer"
              className="w-full max-w-lg rounded-lg shadow-lg transform hover:scale-105 transition duration-500 relative z-0"
            />
            <a
              href="/images/RAJEEVSINGHOFFERLETTER.pdf"
              download
              className="px-6 py-3 font-ubntu bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition relative z-10"
            >
              Download Offer Letter (PDF)
            </a>
          </div>
        </section>

        {/* Contact Section */}
        <section className="w-full text-center bg-gray-800 py-10 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold font-bring mb-6 text-blue-400">
            CONTACT ME
          </h2>
          <p className="text-gray-300 font-ubntu mb-4">
            Interested in collaborating or learning more? Get in touch!
          </p>
          <p className="text-lg font-ubntu font-semibold tracking-wider">
            📧 ranarajeevsingh1540@gmail.com
          </p>
          <p className="text-lg font-ubntu font-semibold tracking-wider">
            📞 +91 9354507377
          </p>
          <div className="mt-6 font-ubntu flex justify-center space-x-6">
            <a
              href="https://github.com/RANARAJEEV"
              target="_blank"
              className="text-blue-400 font-ubntu font-medium hover:underline"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/rajeev-singh-0b7413279"
              target="_blank"
              className="text-blue-400 font-ubntu font-medium hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ResumeAndCertification;
