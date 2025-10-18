import Beams from '@/components/Beams'
import React from 'react'

const Hero = () => {
    return (

        <div style={{ width: '100%', height: '600px', position: 'relative' }}>
            <Beams
                beamWidth={2}
                beamHeight={15}
                beamNumber={12}
                lightColor="#ffffff"
                speed={2}
                noiseIntensity={1.75}
                scale={0.2}
                rotation={0}
            />
        </div>
    )
}

export default Hero