import HeroSection from "@/components/HeroSection";
import StorytellingSection from "@/components/StorytellingSection";
import CurriculumSection from "@/components/CurriculumSection";
import CTAFinalSection from "@/components/CTAFinalSection";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-background">
      <HeroSection />
      <StorytellingSection />
      <CurriculumSection />
      <CTAFinalSection />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
