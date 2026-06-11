export const SocialProofFullWidth = () => {
  return (
    <section className="bg-white border-y border-gray-100 py-10 md:py-14">
      <div className="mx-auto max-w-[1160px] px-4 md:px-8">
        <div className="flex flex-col gap-6">
          <p className="text-center text-sm font-medium text-[#9B9B9B] uppercase tracking-widest">
            Usado por times que levam reuniões a sério
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-5 xl:gap-x-14">

            {/* Light mode */}
            <img
              alt="Odeaolabs"
              src="https://www.untitledui.com/logos/logotype/color/odeao-labs.svg"
              className="h-7 md:h-8 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 dark:hidden"
            />
            <img
              alt="Kintsugi"
              src="https://www.untitledui.com/logos/logotype/color/kintsugi.svg"
              className="h-7 md:h-8 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 dark:hidden"
            />
            <img
              alt="Stackedlab"
              src="https://www.untitledui.com/logos/logotype/color/stacked-lab.svg"
              className="h-7 md:h-8 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 dark:hidden"
            />
            <img
              alt="Magnolia"
              src="https://www.untitledui.com/logos/logotype/color/magnolia.svg"
              className="h-7 md:h-8 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 dark:hidden"
            />
            <img
              alt="Warpspeed"
              src="https://www.untitledui.com/logos/logotype/color/warpspeed.svg"
              className="h-7 md:h-8 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 dark:hidden"
            />
            <img
              alt="Sisyphus"
              src="https://www.untitledui.com/logos/logotype/color/sisyphus.svg"
              className="h-7 md:h-8 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 dark:hidden"
            />

            {/* Dark mode */}
            <img
              alt="Odeaolabs"
              src="https://www.untitledui.com/logos/logotype/white/odeao-labs.svg"
              className="h-7 md:h-8 opacity-50 hover:opacity-90 transition-opacity duration-300 not-dark:hidden"
            />
            <img
              alt="Kintsugi"
              src="https://www.untitledui.com/logos/logotype/white/kintsugi.svg"
              className="h-7 md:h-8 opacity-50 hover:opacity-90 transition-opacity duration-300 not-dark:hidden"
            />
            <img
              alt="Stackedlab"
              src="https://www.untitledui.com/logos/logotype/white/stacked-lab.svg"
              className="h-7 md:h-8 opacity-50 hover:opacity-90 transition-opacity duration-300 not-dark:hidden"
            />
            <img
              alt="Magnolia"
              src="https://www.untitledui.com/logos/logotype/white/magnolia.svg"
              className="h-7 md:h-8 opacity-50 hover:opacity-90 transition-opacity duration-300 not-dark:hidden"
            />
            <img
              alt="Warpspeed"
              src="https://www.untitledui.com/logos/logotype/white/warpspeed.svg"
              className="h-7 md:h-8 opacity-50 hover:opacity-90 transition-opacity duration-300 not-dark:hidden"
            />
            <img
              alt="Sisyphus"
              src="https://www.untitledui.com/logos/logotype/white/sisyphus.svg"
              className="h-7 md:h-8 opacity-50 hover:opacity-90 transition-opacity duration-300 not-dark:hidden"
            />

          </div>
        </div>
      </div>
    </section>
  )
}
