import React from 'react'
import FooterContent from './FooterContent'

const Footer = () => {
  return (

    <div className='relative h-[700px]' style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}>
      <div className='relative' style={{height: 'calc(100vh + 700px)', top: '-100vh'}}>
        <div className='sticky h-[700px]'style={{top: 'calc(100vh - 700px)'}}>
          <FooterContent />
        </div>
      </div>
    </div>
  )
}

export default Footer