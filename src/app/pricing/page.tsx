import Footer from '@/components/Footer'
import Header from '@/components/Header'
import PricingSection from '@/components/PricingSection'
import React from 'react'

const Price = () => {
  return (
   <div className="min-h-screen relative">
      
      <div className="relative z-10">
        <Header />
       <PricingSection/>
        <Footer />
      </div>
    </div>
  )
}

export default Price
