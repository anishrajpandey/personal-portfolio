"use client";
import { useState, useEffect } from "react";
import { useContact } from "@/context/ContactContext";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
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

  const scrollToSection = (id: string) => {
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
    <div
      className={`h-16 fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        {/* Left: Name (Home Link) */}
        <button
          onClick={() => scrollToSection("home")}
          className="text-xl font-bold text-gray-800 hover:text-[#008074] transition-colors duration-300 cursor-pointer"
        >
          Anish Raj Pandey
        </button>

        {/* Middle: Navigation Links */}
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

        {/* Right: Contact Button */}
        <button
          onClick={openContact}
          className="bg-[#008074] hover:bg-[#006b61] text-white px-5 py-2 rounded-full font-medium transition-all transform hover:scale-105 shadow-md hover:shadow-lg cursor-pointer"
        >
          Contact me
        </button>
      </div>
    </div>
  );
};

export default Navbar;