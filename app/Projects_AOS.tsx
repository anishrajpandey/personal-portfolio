import * as motion from "motion/react-client";
import type { Variants } from "motion/react";
import Image from "next/image";
import CheckedList from "@/helpers/CheckedList";
import "../styles/Projects.css";
import { Github, MousePointer2 } from "lucide-react";
export default function ScrollTriggered() {
  return (
    <section className="w-screen=flex flex-col gap-0  items-center px-1 mt-0 pt-0 ">
      {projectsData.map(
        (
          [title, description, srcWeb, srcPhone, live, github, features, tech],
          i
        ) => (
          <div
            className="flex flex-col md:flex-row justify-start p-0 m-0"
            key={i}
          >
            <div style={{ ...container }} className="relative ">
              <div className="absolute top-0 -bottom-1/2 -z-0 overflow-hidden">
                <Image
                  src={srcWeb}
                  alt="error"
                  className="myImage w-full object-contain h-full grayscale-100 hover:grayscale-0 bg-transparent transition-all overflow-hidden "
                  width={400}
                  height={400}
                />
              </div>
              <Card i={i} emoji={srcPhone} hueA={0} hueB={0} key={srcPhone} />{" "}
            </div>
            <div
              className="border-[#008074] h-auto mr-24 w-[70vh] mt-48 flex flex-col gap-2 py-6 px-2"
              key={i}
            >
              <h2 className="text-xl md:text-3xl text-[#008074] font-semibold">
                {title}
              </h2>
              <p className="text-md md:text-lg text-gray-600  ">
                {description}
              </p>
              <CheckedList text={features} />

              <div className="flex relative z-1 w-full justify-evenly items-center my-2">
                <a
                  className="w-2/3 mr-2"
                  href={live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="w-full liveButton flex  gap-0.5 items-center justify-center font-semibold">
                    {" "}
                    <MousePointer2 />
                    Live
                  </button>
                </a>
                <a
                  className="w-1/3 ml-2"
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="w-full githubButton flex  gap-0.5 items-center justify-center">
                    <Github />
                    Github
                  </button>
                </a>
              </div>
              <div>
                <button
                  className={`flex flex-wrap items-center justify-start  mt-2 w-full`}
                >
                  {tech.map((item, index) => (
                    <span
                      key={index}
                      className=" mr-2 mb-2 px-3 py-1 rounded-lg bg-[#008073d5] hover:grayscale-75 text-white text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </button>
              </div>
            </div>
          </div>
        )
      )}
    </section>
  );
}

interface CardProps {
  emoji: string;
  hueA: number;
  hueB: number;
  i: number;
}

function Card({ emoji, i }: CardProps) {
  const background =
    "linear-gradient(41deg,rgba(0, 128, 116, 1) 0%, rgba(0, 0, 0, 0) 57%)";

  return (
    <motion.div
      className={`card-container-${i} mb-20 `}
      style={cardContainer}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 1, once: false }}
      transition={{ staggerChildren: 0.2 }}
    >
      <div style={{ ...splash, background }} />s
      <motion.div
        style={card}
        variants={cardVariants}
        className="card overflow-auto"
      >
        <Image
          src={emoji}
          alt="React"
          width={300}
          height={500}
          className="text-white object-cover"
        />
      </motion.div>
    </motion.div>
  );
}

const cardVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

/**
 * ==============   Styles   ================
 */

const container: React.CSSProperties = {
  margin: "100px ",

  // maxWidth: 500,
  // height: "00px",
  width: "50vw",
};

const cardContainer: React.CSSProperties = {
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "50vw",
  position: "relative",

  paddingTop: 20,
  marginBottom: -120,
};

const splash: React.CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
};

const card: React.CSSProperties = {
  width: 300,
  height: 430,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 20,
  background: "#f5f5f5",
  boxShadow:
    "0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",
  transformOrigin: "10% 60%",
};

/**
 * ==============   Data   ================
 */

const projectsData: [
  string,
  string,
  string,
  string,
  string,
  string,
  string[],
  string[]
][] = [
  [
    "Pustika",
    "Full-Stack Marketplace for used books",
    "/projectImages/pustikaWeb.png",
    "/projectImages/pustikaMobile.png",
    "https://pustika.vercel.app/",
    "https://github.com/anishrajpandey/pustika",
    ["User Authentication", "Payment Integration", "Responsive Design"],
    ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
  ],
];
