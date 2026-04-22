import React from 'react';
import uiImage from '../../assets/images/accordion-img1.webp'
import webDev from '../../assets/images/accordion-img2.webp'
import seo from '../../assets/images/accordion-img3.webp'
import lowCode from '../../assets/images/accordion-img4.webp'
import servicesModel from '../../assets/images/services-model.png'
import project1 from '../../assets/images/services-project-img1.webp'
import project2 from '../../assets/images/services-project-img2.webp'
import project3 from '../../assets/images/services-project-img3.webp'
import { FaStar } from 'react-icons/fa6';

const Services = () => {
    return (
        <section id='services' className='section-sm inter-font'>
            {/* Accordion Card */}
            <div className="black-card">
                {/* Title */}
                <h3 className='services-heading gradient-overlay'>
                    Company
                    <br />
                    Expertise
                </h3>

                {/* Accordion Item 1 */}
                <details className="collapse collapse-plus" name="my-accordion-det-1" open>
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
                <details className="collapse collapse-plus" name="my-accordion-det-1">
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
                <details className="collapse collapse-plus" name="my-accordion-det-1">
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
                <details className="collapse collapse-plus border-b border-[#99999940]" name="my-accordion-det-1">
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
                            <div className='flex items-center justify-center mt-5'><img src={lowCode} className='rounded-[20px]' /></div>
                        </div>
                    </div>
                </details>
            </div>

            <div className=' mt-5 grid md:grid-cols-3 gap-5'>
                {/* Feature Image */}
                <div className='w-full'>
                    <img src={servicesModel} className='w-full rounded-[20px]' />
                </div>

                {/* Contents */}
                <div className=' md:col-span-2 flex flex-col gap-5'>
                    {/* Title */}
                    <div>
                        <h3>FUN FACTS</h3>
                        <p className='big-font md:text-4xl'>
                            Consistently delivering impactful results through a perfect blend of design and functionality.
                        </p>
                    </div>

                    {/* 4 Cards */}
                    <div className='grid md:grid-cols-2 gap-5'>
                        <div className='grid gap-5'>
                            {/* Card 1 */}
                            <div className='white-card'>
                                <p className='dark-font-2'>Successful projects completed</p>
                                <p className='text-5xl dark-font font-semibold'>2k+</p>
                            </div>

                            {/* Card 2 */}
                            <div className='black-card text-white'>
                                <div className='projects-imgs-container'>
                                    <img src={project1} />
                                    <img src={project2} />
                                    <img src={project3} />
                                </div>
                                <p className='mt-30 text-xl font-semibold gradient-overlay'>More than 2k+ projects completed — each crafted to deliver real-world results for ambitious brands.</p>
                            </div>
                        </div>

                        <div className='grid gap-5'>
                            {/* Card 3 */}
                            <div className='white-card'>
                                <div className='flex justify-evenly text-xl'>
                                    <FaStar className='text-amber-600' />
                                    <FaStar className='text-amber-600' />
                                    <FaStar className='text-amber-600' />
                                    <FaStar className='text-amber-600' />
                                    <FaStar className='text-amber-600' />
                                </div>

                                <p className='text-5xl dark-font font-semibold mt-5 text-center'>4.9/5</p>
                                <div className="hr-divider"></div>
                                <p className='dark-font-2 text-xl font-semibold mb-5'>We offer end-to-end creative solutions that make brands unforgettable.</p>
                                <div className='flex items-center font-semibold'>
                                    <div className='round-btn'>
                                        <span>+</span>
                                    </div>
                                    <span className='ml-2.5 dark-font-2'>HIRE US NOW</span>
                                </div>
                            </div>

                            {/* Card 4 */}
                            <div className='photo-card flex justify-between items-center'>
                                <span className='text-2xl'>Our bases around the world</span>
                                <span className='text-5xl font-semibold text-center'>5+</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;