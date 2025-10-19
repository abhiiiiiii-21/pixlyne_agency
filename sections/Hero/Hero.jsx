"use client"
import Beams from '@/components/Beams'
import LogoCloud from '@/components/logo-cloud'
import { Mouse } from 'lucide-react'
import React from 'react'

const Hero = () => {
    return (
        <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
            {/* Navbar */}

            <nav className="absolute top-0 left-0 w-full z-50 flex justify-between items-center p-5">
                <div className="text-white text-2xl font-bold">PixLyne</div>
                <button className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition"> Book a Call </button>
            </nav>



            <div className="absolute inset-0 flex justify-center items-center z-40 flex-col gap-6">
                <div>
                    <div className="relative inline-flex items-center justify-center rounded-[30px] bg-black p-[1px] shadow-lg">

                        <div className="relative backdrop-blur-[60px] bg-black/70 rounded-[24px] px-4 py-2 flex items-center justify-center gap-2 border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                            <span className="absolute left-3 h-[6px] w-[6px] rounded-full bg-[#2c74f9] shadow-[0_0_14px_2px_#2c74f9] animate-pulse" />

                            {/* Text */}
                            <p className="text-white text-xs font-medium z-10 pl-4 tracking-wide">
                                Crafting Unique Brand Identities
                            </p>

                            {/* Subtle gradient overlay for shimmer */}
                            <div className="absolute inset-0 rounded-[24px] bg-[linear-gradient(105deg,rgba(255,255,255,0.1)_-20%,rgba(0,0,0,0)_25%)] pointer-events-none animate-[shine_2s_infinite]" />
                        </div>
                    </div>

                    <style jsx>{`
                    @keyframes shine {
                    0% { background-position: -200% 0; }
                    100% { background-position: 200% 0; }
                    }
                    .animate-[shine_2s_infinite] {
                    background-size: 200% 100%;
                    animation: shine 2s infinite linear;
                    }
                `}</style>
                </div>

                <div className='text-white text-center flex flex-col gap-8 px-4 items-center'>
                    <div className='flex flex-col -space-y-1 items-center'>
                        <p className='text-8xl font-bold'>
                            Shaping Brands With
                        </p>
                        <p className='text-8xl font-bold'>
                            Every Frame
                        </p>
                    </div>

                    <p className='text-neutral-300 text-xl max-w-xl'>
                        We create visuals that tell stories, websites that perform, and designs that define the essence of your brand.
                    </p>

                    <div className='flex items-center justify-center gap-3 mt-9 text-white'>
                        <p>Scroll down</p>
                        <div className='w-60 h-px bg-white/30'></div> 
                        <Mouse className='animate-bounce' />
                        <div className='w-60 h-px bg-white/30'></div> 
                        <p>to see projects</p>
                    </div>

                    <div className='flex'>
                        <LogoCloud/>
                    </div>

                </div>

            </div>


            {/* Beams */}
            <Beams
                beamWidth={2}
                beamHeight={30}
                beamNumber={12}
                lightColor="#669cff"
                speed={3}
                noiseIntensity={1.75}
                scale={0.2}
                rotation={30}
            />
        </div>
    )
}

export default Hero
