"use client";
import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/anishrajpandey",
      icon: <FaGithub size={24} />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/anishrajpandey/",
      icon: <FaLinkedin size={24} />,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/anishrajpandey021/",
      icon: <FaInstagram size={24} />,
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@techzzoid",
      icon: <FaYoutube size={24} />,
    },
  ];

  return (
    <footer className="bg-[var(--color-primary)] text-white py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Anish Raj Pandey</h3>
            <p className="text-sm opacity-90">
              Building digital experiences with passion.
            </p>
          </div>

          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--color-tertiary)] transition-colors duration-300 transform hover:scale-110"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>

          <div className="text-sm opacity-75">
            &copy; {currentYear} Anish Raj Pandey. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
