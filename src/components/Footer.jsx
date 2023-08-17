import React from 'react'
import {Link} from "react-router-dom";
import footerData from '../data/footerData.json'
import CalltoActionSeven from "../common/CTA";
const Footer = () => {

  
const footerIntemOne =  footerData[0];
const footerIntemTwo =  footerData[1];
const footerIntemThree =  footerData[2];


const indexOneLink = (footerIntemOne.quicklink);

const indexTwoLink = (footerIntemTwo.quicklink);
const indexThreeLink = (footerIntemThree.quicklink);
  return (
    <>
        <footer className="rn-footer footer-style-default variation-two">
            <CalltoActionSeven />
            <div className="footer-top">
                <div className="container">


                    <div className="row">
                        {/* Start Single Widget  */}
                        <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                            <div className="rn-footer-widget">
                                <h4 className="title">{footerIntemOne.title}</h4>
                                <div className="inner">
                                    <ul className="footer-link link-hover">
                                        {indexOneLink.map((data, index) => (
                                            <li key={index}><Link to={`${data.url}`}>{data.text}</Link></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* End Single Widget  */}




 {/* Start Single Widget  */}
 <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                            <div className="rn-footer-widget">
                                <h4 className="title">-</h4>
                                <div className="inner">
                                    <ul className="footer-link link-hover">
                                        {indexTwoLink.map((data, index) => (
                                            <li key={index}><Link to={`${data.url}`}>{data.text}</Link></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>


                        {/* End Single Widget  */}



                        {/* Start Single Widget  */}
                        <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                            <div className="rn-footer-widget">
                                <div className="widget-menu-top">
                                    <h4 className="title">{footerIntemThree.title}</h4>
                                    <div className="inner">
                                        <ul className="footer-link link-hover">
                                            {indexThreeLink.map((data, index) => (
                                                <li key={index}><Link to={`${data.url}`}>{data.text}</Link></li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Single Widget  */}


                    </div>
                </div>
            </div>
        </footer>
        {/* <ScrollTop /> */}
    </>
)
}

export default Footer