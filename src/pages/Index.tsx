import HeroSection from "@/components/HeroSection";
import StorytellingSection from "@/components/StorytellingSection";
import VideoSection from "@/components/VideoSection";
import CurriculumSection from "@/components/CurriculumSection";
import InstructorSection from "@/components/InstructorSection";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <StorytellingSection />
      <VideoSection />
      <CurriculumSection />
      <InstructorSection />
      <footer className="border-t border-border px-6 py-8 text-center">
        <p className="text-muted-foreground font-card text-sm">
          © {new Date().getFullYear()} Programa de Oratória e Retórica. Todos os direitos reservados.
        </p>
      </footer>
      <WhatsAppButton />
    </div>
  );
};

export default Index;
