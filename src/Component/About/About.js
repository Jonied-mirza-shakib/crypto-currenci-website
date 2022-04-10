import React from 'react';
import './About.css'
const About = () => {
    return (
        <div className='about-container'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h2 className='pb-3'>Basic Questions</h2>
                        <h4 className='pb-1'>What is accessibility?</h4>
                        <p className='pb-5'>
                            This article starts off the module with a good look at what accessibility is — this includes what groups of people we need to consider and why, what tools different people use to interact with the web, and how we can make accessibility part of our web development workflow.
                        </p>
                        <h4 className='pb-1'>HTML: A good basis for accessibility?</h4>
                        <p className='pb-5'>A great deal of web content can be made accessible just by making sure the correct HTML elements are always used for the correct purpose.</p>
                        <h4 className='pb-1'>CSS and JavaScript accessibility best practices?</h4>
                        <p className='pb-5'>CSS and JavaScript, when used properly, also have the potential to allow for accessible web experiences, but if misused they can significantly harm accessibility. This article outlines some CSS and JavaScript best practices that should be considered to ensure that even complex content is as accessible as possible.</p>
                    </div>
                    <div className="col-lg-6">
                        <h2 className='pb-3'>Advanced Questions</h2>
                        <h4 className='pb-1'>WAI-ARIA basics, WAI-ARIA basics, WAI-ARIA basics, WAI-ARIA basics?</h4>
                        <p className='pb-5'>Following on from the previous article, sometimes making complex UI controls that involve unsemantic HTML and dynamic JavaScript-updated content can be difficult. WAI-ARIA is a technology that can help with such problems by adding in further semantics that browsers and assistive technologies can recognize and use to let users know what is going on. Here we'll show how to use it at a basic level to improve accessibility.</p>
                        <h4 className='pb-1'>Accessible multimedia?</h4>
                        <p className='pb-5'>Another category of content that can create accessibility problems is multimedia — video, audio, and image content need to be given proper textual alternatives, so they can be understood by assistive technologies and their users. This article shows how.</p>
                        <h4 className='pb-1'>Mobile accessibility?</h4>
                        <p className='pb-5'>With web access on mobile devices being so popular, and popular platforms such as iOS and Android.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;