import { lazy, Suspense, useEffect } from "react";
import HeroSection from "@/components/HeroSection";

const StorytellingSection = lazy(() => import("@/components/StorytellingSection"));
const CurriculumSection = lazy(() => import("@/components/CurriculumSection"));
const CTAFinalSection = lazy(() => import("@/components/CTAFinalSection"));

const Index = () => {
  useEffect(() => {
    let raf = 0;
    let lastHeight = 0;

    const sendHeight = () => {
      const height = document.documentElement.scrollHeight;
      if (height === lastHeight) return;
      lastHeight = height;
      try {
        window.parent.postMessage({ type: "resize", height }, "*");
      } catch {
        // silently ignore cross-origin errors
      }
    };

    const scheduleSend = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        sendHeight();
      });
    };

    sendHeight();
    const t1 = setTimeout(sendHeight, 500);
    const t2 = setTimeout(sendHeight, 2000);

    const ro = new ResizeObserver(scheduleSend);
    ro.observe(document.documentElement);

    window.addEventListener("load", sendHeight);
    window.addEventListener("resize", scheduleSend);
    window.addEventListener("orientationchange", sendHeight);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      if (raf) cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("load", sendHeight);
      window.removeEventListener("resize", scheduleSend);
      window.removeEventListener("orientationchange", sendHeight);
    };
  }, []);

  return (
    <div className="w-full bg-background">
      <HeroSection />
      <Suspense fallback={<div className="min-h-[200px]" />}>
        <StorytellingSection />
        <CurriculumSection />
        <CTAFinalSection />
      </Suspense>
    </div>
  );
};

export default Index;
