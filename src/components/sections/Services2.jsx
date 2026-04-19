import React from 'react';
import servicesModel from '../../assets/images/services-model.png'
import project1 from '../../assets/images/services-project-img1.webp'
import project2 from '../../assets/images/services-project-img2.webp'
import project3 from '../../assets/images/services-project-img3.webp'
import { CiStar } from 'react-icons/ci';

const Services2 = () => {
    return (
        <section className='section-sm font-inte text-black'>
            {/* Feature Image */}
            <div className='w-full '>
                <img src={servicesModel} className='w-full rounded-[20px]' />
            </div>

            {/* Title */}
            <div>
                <h3>ABOUT US</h3>
                <p className='big-font md:text-4xl'>
                    Consistently delivering impactful results through a perfect blend of design and functionality.
                </p>
            </div>

            <div>
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
                    <p className='mt-30 gradient-overlay'>More than 2k+ projects completed — each crafted to deliver real-world results for ambitious brands.</p>

                </div>
                <div>
                    <div>
                        <CiStar />
                        <CiStar />
                        <CiStar />
                        <CiStar />
                        <CiStar />
                    </div>
                    <p>4.9/5</p>
                    <div className="divider"></div>
                    <p>We offer end-to-end creative solutions that make brands unforgettable.</p>
                    <div>
                        <button>+</button>
                        <span>HIRE US NOW</span>
                    </div>
                </div>
                <div>
                    <span>Bases around the world</span>
                    <span>5+</span>
                </div>
            </div>
        </section>
    );
};

export default Services2;