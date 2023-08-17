import React from 'react'

const Warehouse = () => {
  return (
    <>
    {/* Start Slider area  */}
    <div className='mainWrapper'>     
      <div className="slider-area height-650 slider-style-2 height-550 bg_image" data-black-overlay="4" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/rw.png)`}}>
                 <div className="container">
                     <div className="row">
                         <div className="col-lg-12">
                             <div className="inner text-start">
                                 <h4 className="subtitle"><span className="theme-gradient">PerformanceEdge Service</span></h4>
                                 <h1 className="title display-one">Retail & Warehouse
</h1>
                                
                                
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
             {/* End Slider area  */}

 <section className="service-details sec-mar">
    
     <div className="container">
     <div className='  flex-column  '>
     {/* <h1 className=' d-flex justify-content-center text-uppercase text-secondary mb-lg-12 '> Content Management Serevices</h1> */}
     </div>
       <div className="row mt-5">
         <div className="col-md-6 col-lg-11 col-xl-12 or2">
           <div className="signle-service-details d-flex">
         
            
            <p className=' p-2 m-1 text display-6'>
            With global disruption, external pressures, and responsibilities, adaptive retail is becoming the new imperative for retailers. Retailers need to be able to adapt quickly to reduced turnaround times, improve delivery accuracy, and offer an excellent customer experience to stay on top of the market.<br/><br/>
Performance Edge will help your retail business evolve and stay resilient with ground breaking technological innovations that will change the way consumers shop and interact with your business. We’ll leverage technology to automate your retail and distribution chain processes, including order fulfilment and documentation.<br/><br/> From the first time a customer hears about your business, through the initial contact with your retail outlet via the web, sales agent, event, or social media, through to the opportunity and sales stage, to onboarding, service provision, support tickets, and complaints, and onward to subsequent we have got you covered 

</p>
           </div>
         </div>
      
       </div>
   
     </div>
   </section>
   </div>

 </>
  )
}

export default Warehouse