import { FC } from "react";
import Lottie from "lottie-react";
import foxWalk from "../assets/fox-walk.json";

const AboutSection: FC = () => {
  return (
    <section
      id="about"
      className="bg-softWhite py-16 sm:py-20 lg:py-24 border-t border-[#f3e6d9]"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 sm:px-6 lg:flex-row lg:gap-16 lg:px-8">
        {/* Lottie / visual side */}
        <div className="relative w-full max-w-md lg:max-w-lg">
          {/* Soft circular background */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="h-full w-full rounded-full bg-gradient-to-tr from-[#ffe7cf] via-white to-[#ffe0c0] blur-2xl" />
          </div>

          <div className="rounded-3xl border border-[#f3e6d9] bg-white/80 p-4 shadow-sm backdrop-blur">
            <Lottie
              animationData={foxWalk}
              loop
              className="h-64 w-full sm:h-72 lg:h-80"
            />
          </div>

          <div className="pointer-events-none absolute -bottom-4 right-4 rounded-full bg-[#e77e23] px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-white shadow-md">
            Crafted with FoxPalette
          </div>
        </div>

        {/* Text content side */}
        <div className="w-full max-w-xl">
          
          <h2 className="mb-4 font-heading text-3xl sm:text-4xl lg:text-5xl text-graphite">
            Clever design,{" "}
            <span className="text-[#e77e23]">fox-level precision.</span>
          </h2>
          <p className="mb-4 text-sm sm:text-base text-graphite/80 font-body leading-relaxed">
            FoxPalette is a boutique design & web studio that blends
            thoughtful strategy with playful creativity. We help modern
            brands look sharp, feel premium, and stay memorable in a noisy
            digital world.
          </p>
          

          <div className="mb-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-[#f3e6d9] bg-white/80 p-4">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-graphite/60">
                What we focus on
              </p>
              <ul className="mt-2 space-y-1 text-sm text-graphite/80 font-body">
                <li>• Clean, conversion-focused websites</li>
                <li>• Scroll-friendly storytelling</li>
                <li>• Consistent, premium visual identity</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-[#f3e6d9] bg-white/80 p-4">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-graphite/60">
                Perfect for
              </p>
              <ul className="mt-2 space-y-1 text-sm text-graphite/80 font-body">
                <li>• Creators & personal brands</li>
                <li>• Agencies & studios</li>
                <li>• Small businesses with big vision</li>
              </ul>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
