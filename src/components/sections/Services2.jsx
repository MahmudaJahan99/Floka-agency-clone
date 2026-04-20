import React from 'react';
import servicesModel from '../../assets/images/services-model.png'
import project1 from '../../assets/images/services-project-img1.webp'
import project2 from '../../assets/images/services-project-img2.webp'
import project3 from '../../assets/images/services-project-img3.webp'
import { FaStar } from 'react-icons/fa6';

const Services2 = () => {
    return (
        <section className='section-sm font-inter grid md:grid-cols-3 gap-5'>
            {/* Feature Image */}
            <div className='w-full'>
                <img src={servicesModel} className='w-full rounded-[20px]' />
            </div>

            {/* Title */}
            <div className=' md:col-span-2 flex flex-col gap-5'>

                <div>
                    <h3>FUN FACTS</h3>
                    <p className='big-font md:text-4xl'>
                        Consistently delivering impactful results through a perfect blend of design and functionality.
                    </p>
                </div>

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

                    <div  className='grid gap-5'>
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
                            <div className="divider"></div>
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



        </section>
    );
};

export default Services2;