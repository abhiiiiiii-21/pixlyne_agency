import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'

export default function LogoCloud() {
  return (
    <section className="overflow-hidden py-16">
      <div className="group relative m-auto max-w-7xl px-6">
        <div className="flex flex-col items-center md:flex-row">
          {/* <div className="md:max-w-44 md:border-r md:pr-6">
            <p className="text-end text-sm text-gray-400">Powering the best teams</p>
          </div> */}

          <div className="relative py-6 md:w-4xl opacity-70">
            <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
              <div className="flex">
                <img
                  className="mx-auto h-30 w-fit"
                  src="/Loop/Haven.png"
                  alt="Haven"
                />
              </div>

              <div className="flex">
                <img
                  className="mx-auto h-30 w-fit dark:invert"
                  src="/Loop/Biowaste.png"
        
                  alt="Biowaste Solutions"
                />
              </div>

              <div className="flex">
                <img
                  className="mx-auto h-30 w-fit dark:invert"
                  src="/Loop/Sprouters.png"
                  alt="Sprouters"
                />
              </div>
              
              <div className="flex">
                <img
                  className="mx-auto h-30 w-fit"
                  src="/Loop/Haven.png"
                  alt="Haven"
                />
              </div>

              <div className="flex">
                <img
                  className="mx-auto h-30 w-fit dark:invert"
                  src="/Loop/Biowaste.png"
        
                  alt="Biowaste Solutions"
                />
              </div>

              <div className="flex">
                <img
                  className="mx-auto h-30 w-fit dark:invert"
                  src="/Loop/Sprouters.png"
                  alt="Sprouters"
                />
              </div>

            </InfiniteSlider>

            {/* Removed all gradient backgrounds and overlays */}
            <ProgressiveBlur
              className="pointer-events-none absolute left-0 top-0 h-full w-20"
              direction="left"
              blurIntensity={1}
            />
            <ProgressiveBlur
              className="pointer-events-none absolute right-0 top-0 h-full w-20"
              direction="right"
              blurIntensity={1}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
