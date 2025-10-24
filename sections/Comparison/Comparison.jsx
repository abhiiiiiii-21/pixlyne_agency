import React from 'react'
import { ComparisonBadge } from './ComparisonBadge'
import ComparisonTable from './ComparisonTable'

const Comparison = () => {
  return (
    <div className='mt-30 mb-30'>
      <ComparisonBadge />

      <div className="mb-6 font-raleway flex flex-col items-center text-center justify-center gap-3 tracking-tight leading-none">
        <p className='text-neutral-200 text-5xl font-medium'>Why Choose Us
          <span className="font-instrument-serif italic text-blue-500"> Over Others</span>
        </p>
        <p className="text-neutral-500">See how we compare against others in performance, growth</p>
      </div>

      <ComparisonTable/>
    </div>
  )
}

export default Comparison