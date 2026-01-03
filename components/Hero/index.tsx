import Link from "next/link";
import ParticlesBackground from "../Particles/ParticlesBackground";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <ParticlesBackground />
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-center"
                data-wow-delay=".2s"
              >
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Full-Stack Engineer Building Scalable Systems
                </h1>

                <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                  Specialized in React, Next.js, Node.js, and Web3 technologies.
                  I craft production-grade applications with thoughtful design
                  and robust architecture.
                </p>

                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <a
                    href="/cv/S Shyam Prasath Haveloc Resume.pdf"
                    download
                    className="
                      inline-flex items-center gap-2 rounded-lg
                      bg-gradient-to-r from-slate-900 to-slate-800
                      px-8 py-4 text-base font-semibold text-white
                      transition-all duration-300 ease-in-out
                      hover:from-slate-800 hover:to-slate-700
                      hover:shadow-lg hover:shadow-slate-900/30
                      hover:-translate-y-[1px]

                      dark:bg-gradient-to-r dark:from-white/10 dark:to-white/5
                      dark:text-white
                      dark:hover:from-white/20 dark:hover:to-white/10
                    "
                  >
                    <svg
                      className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-0.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4v12m0 0l4-4m-4 4l-4-4M4 20h16"
                      />
                    </svg>
                    Download CV
                  </a>

                  <Link
                    href="/contact"
                    className="
                      group relative inline-flex items-center justify-center
                      overflow-hidden rounded-lg px-8 py-4
                      text-base font-semibold text-white
                      transition-all duration-300 ease-in-out

                      bg-gradient-to-r from-violet-600 to-indigo-600
                      hover:from-violet-700 hover:to-indigo-700
                      hover:shadow-lg hover:shadow-violet-500/30

                      dark:bg-gradient-to-r dark:from-sky-500 dark:to-cyan-500
                      dark:hover:from-sky-600 dark:hover:to-cyan-600
                      dark:hover:shadow-cyan-400/30
                    "
                  >
                    <span
                      className="
                        pointer-events-none absolute inset-0
                        -translate-x-full bg-gradient-to-r
                        from-transparent via-white/30 to-transparent
                        transition-transform duration-700 ease-in-out
                        group-hover:translate-x-full
                      "
                    />

                    <span className="relative z-10">Get in Touch</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100">
        </div>
        <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100">
        </div>
      </section>
    </>
  );
};

export default Hero;
