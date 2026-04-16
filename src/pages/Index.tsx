import HeroSection from "@/components/HeroSection";
import StorytellingSection from "@/components/StorytellingSection";
import CurriculumSection from "@/components/CurriculumSection";
import CTAFinalSection from "@/components/CTAFinalSection";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <StorytellingSection />
      <CurriculumSection />
      <CTAFinalSection />
      <footer className="border-t border-border px-6 py-5 text-center">
        <p className="text-muted-foreground font-card text-xs">
          © 2026 Ricardo Peruffo. Todos os direitos reservados.
        </p>
      </footer>
      <WhatsAppButton />
    </div>
  );
};

export default Index;
