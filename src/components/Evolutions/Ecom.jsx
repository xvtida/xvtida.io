import React from 'react'

const Ecom = () => {
  return (
    <>
       {/* Start Slider area  */}
       <div className='mainWrapper'>     
         <div className="slider-area slider-style-2 height-550 bg_image" data-black-overlay="4" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/ecom.png)`}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner text-start">
                                    <h4 className="subtitle"><span className="theme-gradient">PerformanceEdge Service</span></h4>
                                    <h1 className="title display-one">E-Commerce
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
            
               
               <p className=' p-2 m-1 text display-5'>
               Over the last decade, the retail industry has evolved from traditional brick-and-mortar to click-and-order. And e-commerce is quickly establishing itself as a viable alternative to traditional retail channels.<br/><br/> However, the eCommerce space is a highly competitive one, with businesses competing for market share and superior user experience. Therefore, it is imperative for businesses in this industry to constantly strive to improve their operational and business metrics.
Performance Edge has designed an ingenious solution for e-commerce businesses.<br/><br/> Our BPM solution for this industry is quick, has minimal fuss, and tackles various challenges from the get-go.
Our BPM solution is holistic and combines best-of-breed technology tools with analytical models that deliver a superior user experience and operations framework, impacting multiple business functions and ensuring a strong foundation for a long-term business digital journey.

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

export default Ecom