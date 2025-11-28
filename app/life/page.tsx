"use client";

import LifeHeader from "../components/life/LifeHeader";
import LearningSection from "../components/life/LearningSection";
import ListeningSection from "../components/life/ListeningSection";
import BuildingSection from "../components/life/BuildingSection";
import LatelySection from "../components/life/LatelySection";

export default function LifePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      <LifeHeader />
      <LearningSection />
      <ListeningSection />
      <BuildingSection />
      <LatelySection />
      
      {/* Footer Spacer */}
      <div className="h-20" />
    </main>
  );
}
