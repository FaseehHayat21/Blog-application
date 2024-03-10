import React, {useEffect} from 'react'
import "./FrontPage.css"
import Aos from 'aos'
import "aos/dist/aos.css"
export default function FrontPage() {
    useEffect(()=> {
        Aos.init({duration: 2000});
    })
    
  return (
   <>
     <div className='Landing-Page'>
                <div className='welcome' data-aos="fade-right">
                    <p className='landing-text'> Welcome to Public Blog. <br /> Pen down your imaginations here.</p>

                    <button className="animated-button">
                        <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                            ></path>
                        </svg>
                        <span className="text">Get Started</span>
                        <span className="circle"></span>
                        <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>
   </>
  )
}
