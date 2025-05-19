import * as motion from "motion/react-client";
import type { Variants } from "motion/react";

export default function ScrollTriggered() {
  return (
    <section className="w-screen bg-amber-400 flex flex-col gap-3.5  items-center px-12 ">
      {food.map(([emoji, hueA, hueB, title, description, live], i) => (
        <div className="flex justify-start" key={i}>
          <div style={container} className=" bg-red-400">
            <Card i={i} emoji={emoji} hueA={hueA} hueB={hueB} key={emoji} />{" "}
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

function Card({ emoji, hueA, hueB, i }: CardProps) {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <motion.div
      className={`card-container-${i} mb-20 `}
      style={cardContainer}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 1, once: false }}
      transition={{ staggerChildren: 0.2 }}
    >
      <div style={{ ...splash, background }} />
      <motion.div style={card} variants={cardVariants} className="card">
        {emoji}
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
  width: "50vw",
  background: "#f5f5f5",
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
  fontSize: 164,
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

const food: [string, number, number, string, string, string, string, string][] =
  [
    ["🍅", 340, 10, "string", "string", "string", "string", "strindg"],
    ["🍊", 20, 40, "string", "string", "string", "string", "strding"],
    ["🍋", 60, 90, "string", "string", "string", "string", "stqring"],
    ["🍐", 80, 120, "string", "string", "string", "string", "stqring"],
    ["🍏", 100, 140, "string", "string", "string", "string", "sstring"],
    ["🫐", 205, 245, "string", "string", "string", "string", "string"],
    ["🍆", 260, 290, "string", "string", "string", "string", "xstring"],
    ["🍇", 290, 320, "string", "string", "string", "string", "strin qg"],
  ];
