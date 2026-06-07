import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { fadeInUp } from "@/lib/animations";

const DEMO_VIDEO_URL = "https://www.youtube.com/embed/Je15WkEaZ20";

export function LiveDemo() {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);

  return (
    <section id="live-demo" className="bg-white py-24 md:py-28" ref={ref}>
      <div className="page-shell">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeInUp} className="mx-auto max-w-3xl text-center">
          <p className="notura-pill mb-6">Live demo</p>
          <h2 className="notura-section-title">Enquanto você fala, o Notura entende.</h2>
          <p className="notura-muted mt-5">
            Veja a demonstração do produto em ação.
          </p>
        </motion.div>

        <div className="mx-auto mt-14 max-w-5xl rounded-[var(--notura-radius-2xl)] border border-[var(--notura-violet-200)] bg-white p-4 shadow-[var(--notura-shadow-elevated)] md:p-5">
            <div className="flex items-center gap-2 px-2 pb-4 text-sm font-semibold text-zinc-700">
              <PlayCircle className="h-4 w-4 text-[var(--notura-primary)]" />
              Vídeo de demonstração do app
            </div>
            <div className="overflow-hidden rounded-[28px] border border-zinc-100 bg-zinc-950">
              <iframe
                src={DEMO_VIDEO_URL}
                title="Vídeo de demonstração do Notura"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="block aspect-video w-full"
              />
            </div>
        </div>
      </div>
    </section>
  );
}