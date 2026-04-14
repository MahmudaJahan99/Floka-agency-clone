import React from 'react';
import logo from '../../assets/images/logoBlack.png'

const About = () => {
    const text = "CREATIVITY & TECHNOLOGY";
    return (
        <section className='section-sm'>
            {/* top section */}
            <div className='grid gap-10 md:grid-cols-5'>
                <div className='md:col-span-2 flex flex-col gap-5'>
                    <div className="logo-circling-container">
                        <div className="circle">
                            {text.split("").map((char, i) => (
                                <span
                                    key={i}
                                    className="rotating-text"
                                    style={{ transform: `rotate(${i * 15}deg)` }}
                                >
                                    {char}
                                </span>
                            ))}
                        </div>

                        <img
                            className="w-7.5"
                            src={logo}
                        />
                    </div>
                    <p className='dark-font-2 font-medium text-lg'>We design every project with long-term success in mind.</p>
                </div>
                <div className='md:col-span-3 flex items-center'>
                    <p className='dark-font font-medium text-4xl funnel-font'>
                        Our approach is straightforward — prioritizing functionality, speed, and clarity for solutions.
                    </p>
                </div>


            </div>

            {/* bottom section */}
            <div>
                <div>
                    <span>225</span>
                </div>
            </div>
        </section>
    );
};

export default About;