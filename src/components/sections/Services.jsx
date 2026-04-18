import React from 'react';
import uiImage from '../../assets/images/home1-accordion-img1-300x250.webp'
import webDev from '../../assets/images/home1-bg-img1-300x250.webp'
import seo from '../../assets/images/home1-bg-img2-300x250.webp'
import lowCost from '../../assets/images/home1-bg-img3-300x250.webp'

const Services = () => {
    return (
        <section className='section-sm inter-font'>
            <div className="services-box">
                <h3 className='services-heading'>
                    Company
                    <br />
                    Expertise
                </h3>

                {/* Accordion Item 1 */}
                <details className="collapse collapse-plus border border-base-300" name="my-accordion-det-1" open>
                    <summary className="collapse-title font-semibold text-xl">User Interface & Experience Design</summary>
                    <div className="collapse-content text-sm">
                        <div className='md:grid md:grid-cols-3 gap-5'>
                            <div className='md:col-span-2'>
                                <p className='dark-font-3 text-lg mb-5'>We design intuitive and visually engaging digital experiences that put users first. From research and wireframing to high-fidelity UI, we ensure every interaction feels natural and meaningful.</p>
                                <div className='capsule-btns-container'>
                                    <span className='capsule-btn'>WIREFRAMING</span>
                                    <span className='capsule-btn'>PROTOTYPING</span>
                                    <span className='capsule-btn'>UI DESIGN</span>
                                    <span className='capsule-btn'>UX RESEARCH</span>
                                </div>
                            </div>
                            <div className='flex items-center justify-center mt-5'><img src={uiImage} className='rounded-[20px]' /></div>
                        </div>
                    </div>
                </details>

                {/* Accordion Item 2 */}
                <details className="collapse collapse-plus border border-base-300" name="my-accordion-det-1">
                    <summary className="collapse-title font-semibold text-xl">Web Development</summary>
                    <div className="collapse-content text-sm">
                        <div className='md:grid md:grid-cols-3 gap-5'>
                            <div className='col-span-2'>
                                <p className='dark-font-3 text-lg mb-5'>We build fast, scalable, and secure websites tailored to your business needs. Whether it's a landing page or a full-stack application, we deliver clean, maintainable code. </p>
                                <div className='capsule-btns-container'>
                                    <span className='capsule-btn'>FRONTEND</span>
                                    <span className='capsule-btn'>BACKEND</span>
                                    <span className='capsule-btn'>RESPONSIVE</span>
                                    <span className='capsule-btn'>API INTEGRATION</span>
                                </div>
                            </div>
                            <div className='flex items-center justify-center mt-5'><img src={webDev} className='rounded-[20px]' /></div>
                        </div>
                    </div>
                </details>

                {/* Accordion Item 3 */}
                <details className="collapse collapse-plus border border-base-300" name="my-accordion-det-1">
                    <summary className="collapse-title font-semibold text-xl">Search Engine Optimization</summary>
                    <div className="collapse-content text-sm">
                        <div className='md:grid md:grid-cols-3 gap-5'>
                            <div className='md:col-span-2'>
                                <p className='dark-font-3 text-lg mb-5'>We help your website rank higher and reach the right audience through data-driven SEO strategies. From keyword research to technical optimization, we improve visibility and performance.</p>
                                <div className='capsule-btns-container'>
                                    <span className='capsule-btn'>KEYWORDS</span>
                                    <span className='capsule-btn'>ON-PAGE SEO</span>
                                    <span className='capsule-btn'>TECHNICAL SEO</span>
                                    <span className='capsule-btn'>ANALYTICS</span>
                                </div>
                            </div>
                            <div className='flex items-center justify-center mt-5'><img src={seo} className='rounded-[20px]' /></div>
                        </div>
                    </div>
                </details>

                {/* Accordion Item 4 */}
                <details className="collapse collapse-plus border border-base-300" name="my-accordion-det-1">
                    <summary className="collapse-title font-semibold text-xl">Low-Code Development</summary>
                    <div className="collapse-content text-sm">
                        <div className='md:grid md:grid-cols-3 gap-5'>
                            <div className='col-span-2'>
                                <p className='dark-font-3 text-lg mb-5'>We create powerful applications using low-code platforms, reducing development time while maintaining flexibility and scalability for your business.</p>
                                <div className='capsule-btns-container'>
                                    <span className='capsule-btn'>AUTOMATION</span>
                                    <span className='capsule-btn'>WORKFLOWS</span>
                                    <span className='capsule-btn'>CRM TOOLS</span>
                                    <span className='capsule-btn'>RAPID DEVELOPMENT</span>
                                </div>
                            </div>
                            <div className='flex items-center justify-center mt-5'><img src={lowCost} className='rounded-[20px]' /></div>
                        </div>
                    </div>
                </details>
            </div>


        </section>
    );
};

export default Services;