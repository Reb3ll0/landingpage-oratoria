import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import StorytellingSection from "@/components/StorytellingSection";
import CurriculumSection from "@/components/CurriculumSection";
import CTAFinalSection from "@/components/CTAFinalSection";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  useEffect(() => {
    const sendHeight = () => {
      const height = document.documentElement.scrollHeight;
      try {
        window.parent.postMessage({ type: "resize", height }, "*");
      } catch (e) {
        // silently ignore cross-origin errors
      }
    };

    // Initial send + a couple of delayed sends to catch fonts/images
    sendHeight();
    const t1 = setTimeout(sendHeight, 300);
    const t2 = setTimeout(sendHeight, 1000);
    const t3 = setTimeout(sendHeight, 2500);

    // Observe DOM size changes
    const ro = new ResizeObserver(() => sendHeight());
    ro.observe(document.documentElement);
    if (document.body) ro.observe(document.body);

    // Observe DOM mutations (content changes)
    const mo = new MutationObserver(() => sendHeight());
    mo.observe(document.body, { childList: true, subtree: true, attributes: true });

    window.addEventListener("load", sendHeight);
    window.addEventListener("resize", sendHeight);
    window.addEventListener("orientationchange", sendHeight);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      ro.disconnect();
      mo.disconnect();
      window.removeEventListener("load", sendHeight);
      window.removeEventListener("resize", sendHeight);
      window.removeEventListener("orientationchange", sendHeight);
    };
  }, []);

  return (
    <div className="w-full bg-background">
      <HeroSection />
      <StorytellingSection />
      <CurriculumSection />
      <CTAFinalSection />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
