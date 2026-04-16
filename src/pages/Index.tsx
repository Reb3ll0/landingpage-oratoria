import HeroSection from "@/components/HeroSection";
import StorytellingSection from "@/components/StorytellingSection";
import CurriculumSection from "@/components/CurriculumSection";
import InstructorSection from "@/components/InstructorSection";
import CTAFinalSection from "@/components/CTAFinalSection";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <StorytellingSection />
      <CurriculumSection />
      <InstructorSection />
      <CTAFinalSection />
      <footer className="border-t border-border px-6 py-6 text-center">
        <p className="text-muted-foreground font-card text-xs">
          © {new Date().getFullYear()} Programa de Oratória e Retórica. Todos os direitos reservados.
        </p>
      </footer>
      <WhatsAppButton />
    </div>
  );
};

export default Index;
