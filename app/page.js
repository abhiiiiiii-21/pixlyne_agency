import Hero from '@/sections/Hero/Hero'
import Dashboard from '@/sections/Project_Vault/Dashboard'
import WhyChooseStructure from '@/sections/WhyChooseUs/WhyChooseStructure'
import React from 'react'

const page = () => {
  return (
    <div >
      <Hero/>
      <Dashboard/>
      <div className='mt-96'>

      </div>
      <WhyChooseStructure/>
    </div>
  )
}

export default page