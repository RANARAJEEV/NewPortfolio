import { useState ,useEffect} from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    
 useEffect(() => {
      const tl = gsap.timeline();
      tl.from(".mont2", {
        y: "-50px",
        opacity: 0,
        duration: 1,
        stagger: 0.3,
         });
      tl.from(".mont", {
        y: "-50px",
        opacity: 0,
        duration: 1,
        stagger: 0.3,
         });
         
  }, []);
 useEffect(() => {
    if (isOpen) {
      const tl = gsap.timeline();
      tl.from(".mont", {
        y: "-50px",
        opacity: 0,
        duration: 1,
        stagger: 0.3,
      });
    }
  }, [isOpen]);
  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className=" tracking-widest shadow-md fixed w-full top-0  left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="mont2 flex-shrink-0 text-2xl font-bold ">
            <Link to="/" className="font-mery text-[rgba(43,243,200,0.78)] ">RAJEEV SINGH</Link>
          </div>

          {/* Desktop Menu */}
          <div  id ="montp"className="  hidden lg:flex space-x-8">
            <Link to="/Project" className=" font-mery text-[#993D93] hover:text-[#5BBBDC] mont">PROJECT</Link>
            <Link to="/About" className=" font-mery text-[#993D93] hover:text-[#5BBBDC] mont">PROFILE & PROFICIENCY</Link>
            <Link to="/Resume" className=" font-mery text-[#993D93] hover:text-[#5BBBDC] mont">RESUME & CERTIFICATIONS</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden shadow-lg overflow-hidden"
          >
            <Link to="/Project" onClick={handleLinkClick} className="font-mery block px-4 py-2 text-[#993D93] hover:bg-blue-50 mont">PROJECT</Link>
            <Link to="/About" onClick={handleLinkClick} className="font-mery block px-4 py-2 text-[#993D93] hover:bg-blue-50 mont">PROFILE & PROFICIENCY</Link>
            <Link to="/Resume" onClick={handleLinkClick} className="font-mery block px-4 py-2 text-[#993D93] hover:bg-blue-50 mont">RESUME & CERTIFICATIONS</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}