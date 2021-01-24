import React from 'react';
import meghan from '../components/imgs/meghan.jpg';
import pdf from '../components/imgs/MeghanFahy-Resume-2021.pdf';

export const About = () =>

           <div>
               <div className="container">
                   <div className="about-overview">
                    <div className="meg-img">
                        <img src={meghan} className="meghan-img" alt="meghan-img"></img>
                    </div>
                    <div className="about-section">
                        <h1 className="hi">
                            Hi there!
                        </h1>
                        <p className="basic">
                            I grew up on Long Island, New York but am studying Computer Science and Design
                            at Northeastern University in Boston, MA. 
                        </p>
                        <p className="quirky">
                            In my free time I enjoy hiking (see the picture on the left, this is me in Acadia!), 
                            knitting and singing karaoke with my roommates.
                        </p>
                        <p className="currently-doing">
                            I'm currently taking classes this semester at Northeastern but am looking for a co-op
                            from July - December 2021.
                        </p>
                        <p className="email-resume">
                            Feel free to take a look at my <span><a className="resume-link" href = {pdf}>resume</a></span> or reach out to me via email at fahy.m@northeastern.edu
                        </p>
                    </div>
               </div>
               </div>
 
               </div>
