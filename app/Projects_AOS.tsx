import * as motion from "motion/react-client";
import type { Variants } from "motion/react";
import Image from "next/image";

export default function ScrollTriggered() {
  return (
    <section className="w-screen flex flex-col gap-3.5  items-center px-12 ">
      {projectsData.map(([title, description, srcWeb, srcPhone, live], i) => (
        <div className="flex flex-col md:flex-row justify-start " key={i}>
          <div style={{ ...container }} className="relative ">
            <div className="absolute top-0 -bottom-full -z-2">
              <h2>
                <span className="text-4xl font-bold">{title}</span>
              </h2>
              <Image
                src={"/projectImages/pustikaWeb.png"}
                alt="error"
                className="myImage w-full object-contain h-full "
                width={400}
                height={400}
              />
            </div>
            {/* <div className="absolute -z-0 bg-black top-0 bottom-0"></div> */}
            <Card i={i} emoji={srcPhone} hueA={0} hueB={0} key={srcPhone} />{" "}
          </div>
          <div className=" bg-purple-400 h-auto mr-24 w-[70vh] mt-24" key={i}>
            {title}
            {description}
            {live}
          </div>
        </div>
      ))}
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
  const background = "green";

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

const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

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
    "title",
    "description",
    "/projectImages/pustikaWeb.png",
    "/projectImages/pustikaMobile.png",
    "srcWeb",
    "srcMobile",
    ["tech"],
    ["features"],
  ],
  [
    "title",
    "description",
    "/projectImages/pustikaWeb.png",
    "/projectImages/pustikaMobile.png",
    "srcWeb",
    "srcMobile",
    ["tech"],
    ["features"],
  ],
  [
    "title",
    "description",
    "/projectImages/pustikaWeb.png",
    "/projectImages/pustikaMobile.png",
    "srcWeb",
    "srcMobile",
    ["tech"],
    ["features"],
  ],
  [
    "title",
    "description",
    "/projectImages/pustikaWeb.png",
    "/projectImages/pustikaMobile.png",
    "srcWeb",
    "srcMobile",
    ["tech"],
    ["features"],
  ],
  [
    "title",
    "description",
    "/projectImages/pustikaWeb.png",
    "/projectImages/pustikaMobile.png",
    "srcWeb",
    "srcMobile",
    ["tech"],
    ["features"],
  ],
];
