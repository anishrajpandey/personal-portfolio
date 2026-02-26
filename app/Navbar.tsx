"use client";
import { useState, useEffect } from "react";
import { useContact } from "@/context/ContactContext";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const { openContact } = useContact();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingDown = currentScrollPos > prevScrollPos;
      const scrollDifference = Math.abs(currentScrollPos - prevScrollPos);

      if (scrollDifference > 10) {
        setVisible(!isScrollingDown);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    if (pathname !== "/") {
      router.push(`/#${id}`);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <div
        className={`h-16 fixed top-0 left-0 right-0 z-[70] transition-all duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        } ${
          isOpen
            ? "bg-transparent shadow-none"
            : "bg-white/90 backdrop-blur-md shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          {/* Left: Name (Home Link) */}
          <button
            onClick={() => scrollToSection("home")}
            className={`text-xl font-bold transition-colors duration-300 cursor-pointer z-50 relative ${
              isOpen ? "text-white" : "text-gray-800 hover:text-[#008074]"
            }`}
          >
            Anish Raj Pandey
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("aboutMain")}
              className="text-gray-600 hover:text-[#008074] font-medium transition-colors duration-300 cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-gray-600 hover:text-[#008074] font-medium transition-colors duration-300 cursor-pointer"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-gray-600 hover:text-[#008074] font-medium transition-colors duration-300 cursor-pointer"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-gray-600 hover:text-[#008074] font-medium transition-colors duration-300 cursor-pointer"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("education")}
              className="text-gray-600 hover:text-[#008074] font-medium transition-colors duration-300 cursor-pointer"
            >
              Education
            </button>
          </div>

          {/* Desktop Right Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={openContact}
              className="bg-[#008074] hover:bg-[#006b61] text-white px-5 py-2 rounded-full font-medium transition-all transform hover:scale-105 shadow-md hover:shadow-lg cursor-pointer"
            >
              Contact me
            </button>
            <a
              href="https://docs.google.com/document/d/189LUJOnQO13laHJl54QgGbpQ-92EU8nsa6QpztZ1cE8/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black hover:bg-gray-800 text-white px-5 py-2 rounded-full font-medium transition-all transform hover:scale-105 shadow-md hover:shadow-lg cursor-pointer"
            >
              Resume
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden z-50 relative focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={28} className="text-white" />
            ) : (
              <Menu size={28} className="text-gray-800" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#008074] z-[60] flex flex-col items-center justify-center transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center space-y-8">
          {["About", "Projects", "Experience", "Skills", "Education"].map(
            (item) => (
              <button
                key={item}
                onClick={() =>
                  scrollToSection(
                    item === "About" ? "aboutMain" : item.toLowerCase(),
                  )
                }
                className="text-white text-2xl font-medium hover:text-gray-200 transition-colors"
              >
                {item}
              </button>
            ),
          )}

          <div className="flex flex-col items-center gap-4 mt-8">
            <button
              onClick={() => {
                openContact();
                setIsOpen(false);
              }}
              className="bg-white text-[#008074] px-8 py-3 rounded-full text-xl font-medium shadow-lg hover:bg-gray-100 transition-colors"
            >
              Contact me
            </button>
            <a
              href="https://docs.google.com/document/d/189LUJOnQO13laHJl54QgGbpQ-92EU8nsa6QpztZ1cE8/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-8 py-3 rounded-full text-xl font-medium shadow-lg hover:bg-gray-800 transition-colors"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
