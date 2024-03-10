import React, {useEffect} from 'react'
import "./Experience.css"
import exp from '../Images/Experience.jpg';
import Aos from 'aos'
import "aos/dist/aos.css"
export default function Experience() {
    useEffect(()=> {
        Aos.init({duration: 2000});
    })
    
    return (
        <>
            <section className='point-one'>
                <div className="container1" >
                    <div className="item left-item" data-aos="fade-right">
                        <h3>Whispers to wisdom. Spill your story.</h3> <br />
                        <p>Share Your Experience</p>
                    </div>
                    <div className="item right-item" data-aos="fade-left">
                        <img src={exp} alt="Experience"/>
                    </div>
                </div>
            </section>
        </>
    )
}