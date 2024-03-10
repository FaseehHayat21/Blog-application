import React from 'react'
import "./AboutUs.css"

export default function AboutUs() {
  return (
    <>
        <section className='aboutus'>
                <p className='about-heading'>ABOUT US</p>
                <table class="responsive-table">
                    <tbody>
                        <tr>
                            <td valign="top">
                                <ul className='list-icon'>
                                    <li>A platform for sharing your thoughts and experiences with the world.</li>
                                    <li>A place to connect with others who share your interests.</li>
                                    <li>A free way to get your voice heard.</li>
                                </ul>
                            </td>
                            <td valign="top">
                                <ul>
                                    <li>Your personal soapbox amplified, reaching beyond the echo chamber to engage and inspire.</li>
                                    <li>A virtual campfire, crackling with shared experiences where you can roast marshmallows of knowledge.</li>
                                    <li>A way to build an audience and establish yourself as an expert.</li>
                                </ul>
                            </td>
                            <td valign="top">
                                <ul>
                                    <li>A vibrant tapestry of voices, weaving stories and opinions for anyone to explore. </li>
                                    <li>A fertile soil for nurturing your creativity, where words bloom into captivating narratives and ideas take flight.</li>

                                    <li>A haven for the curious mind, where you can delve into the depths of knowledge, uncover hidden gems of information, and quench your thirst for understanding.</li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <footer>
                @All Rights Reserved
            </footer>
    </>
  )
}
