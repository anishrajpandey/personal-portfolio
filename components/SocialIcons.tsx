import React from "react";
import { Github, Linkedin, Instagram, Youtube } from "lucide-react";

interface SocialIconsProps {
  className?: string;
  iconSize?: number;
}

const SocialIcons = ({ className = "", iconSize = 24 }: SocialIconsProps) => {
  const socials = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/anishrajpandey/",
      color: "hover:text-[#0077b5]",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/anishrajpandey",
      color: "hover:text-[#333]",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/anishrajpandey021/",
      color: "hover:text-[#E1306C]",
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://www.youtube.com/@anish.builds",
      color: "hover:text-[#FF0000]",
    },
  ];

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-gray-600 transition-colors duration-300 transform hover:scale-110 ${social.color}`}
          aria-label={social.name}
        >
          <social.icon size={iconSize} />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
