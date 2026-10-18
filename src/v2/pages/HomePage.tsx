import Hero from "../components/Hero";
import CoffeeRitualSection from "../components/CoffeeRitualSection";
import SampleSection from "../components/SampleSection";
import FleetSection from "../components/FleetSection";
import RoastingSection from "../components/RoastingSection";
import HarvestSection from "../components/HarvestSection";
import VeteranSection from "../components/VeteranSection";
import HomeBellSection from "../components/HomeBellSection";
export default function HomePage({ onSubscribe }: { onSubscribe: (email: string) => Promise<boolean> }) {
  return (
    <>
     <Hero />
<HomeBellSection onSubscribe={onSubscribe} />
<CoffeeRitualSection />
      <SampleSection />
      <FleetSection />
      <RoastingSection />


      <VeteranSection />
    </>
  );
}
