
import { Skill, Achievement, HistoryEvent, Strength, Practice } from "../types/soloLeveling";

export const sungJinWooSkills: Skill[] = [
  {
    id: 1,
    name: "Ruler's Authority",
    description: "The ability to command and control shadows, turning defeated enemies into his loyal shadow soldiers.",
    color: "#8B5CF6"
  },
  {
    id: 2,
    name: "Shadow Extraction",
    description: "Extract shadows from the dead to create shadow soldiers who serve him.",
    color: "#6366F1"
  },
  {
    id: 3,
    name: "Domain Expansion",
    description: "Create a domain where Jin-Woo has complete control, increasing all his abilities.",
    color: "#4F46E5"
  },
  {
    id: 4,
    name: "Monarch's Blessing",
    description: "As the Shadow Monarch, Jin-Woo can bestow power upon his followers.",
    color: "#7C3AED"
  },
  {
    id: 5,
    name: "Black Heart",
    description: "Enhanced regeneration and resistance to damage and status effects.",
    color: "#4C1D95"
  },
  {
    id: 6,
    name: "Shadow Exchange",
    description: "Swap places with any of his shadow soldiers instantaneously.",
    color: "#5B21B6"
  }
];

export const sungJinWooStrengths: Strength[] = [
  {
    id: 1,
    name: "Strength",
    value: 290,
    description: "Physical power that allows Jin-Woo to overpower S-rank hunters and monsters easily."
  },
  {
    id: 2,
    name: "Agility",
    value: 280,
    description: "Speed and reflexes that make him appear to teleport in combat."
  },
  {
    id: 3,
    name: "Intelligence",
    value: 255,
    description: "Strategic mind that allows him to analyze and counter enemy tactics."
  },
  {
    id: 4,
    name: "Spirit",
    value: 300,
    description: "Magical power that fuels his abilities and shadow manipulation."
  },
  {
    id: 5,
    name: "Perception",
    value: 265,
    description: "Enhanced senses that allow him to detect danger and hidden enemies."
  }
];

export const sungJinWooPractices: Practice[] = [
  {
    id: 1,
    name: "Daily Training Regimen",
    description: "Jin-Woo follows an intense daily training routine to constantly improve his physical abilities.",
    benefit: "Continuous physical enhancement and stat increases."
  },
  {
    id: 2,
    name: "Shadow Army Management",
    description: "Strategically collecting powerful shadows and organizing them for maximum effectiveness.",
    benefit: "Enhanced tactical options and force multiplication in battles."
  },
  {
    id: 3,
    name: "Solo Dungeon Raids",
    description: "Seeking out and conquering high-rank dungeons alone to gain experience and resources.",
    benefit: "Rapid level progression and acquisition of rare items."
  },
  {
    id: 4,
    name: "Skill Point Allocation",
    description: "Carefully distributing skill points to create a balanced and powerful build.",
    benefit: "Optimized abilities tailored to his fighting style."
  },
  {
    id: 5,
    name: "Combat Analysis",
    description: "Studying enemy patterns and weaknesses before and during combat.",
    benefit: "Ability to counter nearly any opponent by exploiting weaknesses."
  }
];

export const sungJinWooAchievements: Achievement[] = [
  {
    id: 1,
    title: "Survival of the Red Gate",
    description: "Survived a deadly double dungeon incident that would have killed any regular E-rank hunter.",
    date: "Beginning of his journey"
  },
  {
    id: 2,
    title: "Defeat of Igris",
    description: "Defeated the Red Knight Igris in combat and made him his first major shadow soldier.",
    date: "Early career"
  },
  {
    id: 3,
    title: "S-Rank Certification",
    description: "Officially recognized as an S-rank hunter, despite his true power surpassing this rank.",
    date: "Mid career"
  },
  {
    id: 4,
    title: "Defeat of the Ice Elf Monarch",
    description: "Defeated one of the powerful Monarchs in single combat, showcasing his growth.",
    date: "Late career"
  },
  {
    id: 5,
    title: "Jeju Island Victory",
    description: "Led the successful raid on Jeju Island, defeating the Ant King and saving countless lives.",
    date: "Late career"
  },
  {
    id: 6, 
    title: "Ascension to Shadow Monarch",
    description: "Fully accepted his role as the Shadow Monarch, gaining complete access to his true power.",
    date: "Peak of power"
  }
];

export const sungJinWooHistory: HistoryEvent[] = [
  {
    id: 1,
    title: "The Weakest Hunter",
    description: "Once known as the world's weakest hunter, Jin-Woo struggled to make a living by participating in the lowest-rank dungeons.",
    date: "Beginning",
    importance: "high"
  },
  {
    id: 2,
    title: "Double Dungeon Incident",
    description: "Nearly died in a dangerous dungeon incident, but instead awakened to the System, beginning his transformation.",
    date: "Turning point",
    importance: "high"
  },
  {
    id: 3,
    title: "First Job Change",
    description: "Evolved from the basic 'Player' class to the 'Shadow Monarch' class, gaining new abilities.",
    date: "Early growth",
    importance: "medium"
  },
  {
    id: 4,
    title: "Creation of Shadow Army",
    description: "Began building his army of shadow soldiers from defeated enemies, including powerful entities like Igris and Tank.",
    date: "Mid journey",
    importance: "medium"
  },
  {
    id: 5,
    title: "Confrontation with Hunters Association",
    description: "Faced scrutiny from the Hunters Association as they became aware of his rapidly growing power.",
    date: "Rising fame",
    importance: "low"
  },
  {
    id: 6,
    title: "International Recognition",
    description: "Gained recognition worldwide after defeating high-level threats that even national-level hunters struggled against.",
    date: "Late career",
    importance: "medium"
  },
  {
    id: 7,
    title: "Truth About the System",
    description: "Discovered the true nature of the System and his connection to the original Shadow Monarch.",
    date: "Revelation",
    importance: "high"
  },
  {
    id: 8,
    title: "Final War Against the Monarchs",
    description: "Led the battle against the remaining Monarchs to save the world from destruction.",
    date: "Climax",
    importance: "high"
  }
];
