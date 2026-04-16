import React from 'react';
import logo from '../../assets/images/logoBlack.png'
import CountUpModule from 'react-countup';
import user1 from '../../assets/images/home1-counter-img1.webp'
import user2 from '../../assets/images/home1-counter-img2.webp'
import user3 from '../../assets/images/home1-counter-img3.webp'
import user4 from '../../assets/images/home1-counter-img4.webp'
import ceoImage from '../../assets/images/home1-author-img1.webp'


const About = () => {
    const text = "CREATIVITY & TECHNOLOGY";
    const CountUp = CountUpModule.default;
    console.log(CountUp)
    return (
        <section className='section-sm'>
            {/* top section */}
            <div className='grid gap-10 md:grid-cols-5 my-5'>
                <div className='md:col-span-2 flex flex-col gap-5'>
                    <div className="logo-circling-container">
                        <div className="circle inter-font">
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
                    <p className='dark-font-2 font-bold text-lg inter-font'>We design every project with long-term success in mind.</p>
                </div>
                <div className='md:col-span-3 flex items-center'>
                    <p className='dark-font font-medium text-2xl md:text-4xl funnel-font'>
                        Our approach is straightforward — prioritizing functionality, speed, and clarity for solutions.
                    </p>
                </div>
            </div>

            {/* Middle section */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {/* Reviews */}
                <div className='p-5 bg-white rounded-[20px] order-1 lg:col-span-1 flex flex-col'>
                    <p className='text-7xl dark-font'>
                        <span>
                            <CountUp
                                start={0}
                                end={25}
                                duration={3}
                            />
                        </span>
                        <span>+</span>
                    </p>

                    <p className='dark-font-3'>Years of experience</p>

                    <div className='divider'></div>

                    <p className='dark-font-2'>Explore how we transform ideas into extraordinary digital experiences.</p>

                    <div className='mt-auto'>
                        <div className='user-img-container'>
                            <img src={user1} alt="User" />
                            <img src={user2} alt="User" />
                            <img src={user3} alt="User" />
                            <img src={user4} alt="User" />
                        </div>
                        <p>
                            <CountUp
                                start={0}
                                end={1200}
                                duration={3}
                            />
                            + happy users review
                        </p>
                    </div>
                </div>

                {/* Follow */}
                <div className='order-2 lg:order-3 lg:col-span-1 grid gap-5'>
                    <div className='p-5 bg-white rounded-[20px] flex flex-col'>
                        <p className='dark-font-2'>Follow us</p>
                        <p className='dark-font-3'>Check all the latest updates about us</p>
                        <div className='about-socials-btn-container mt-auto'>
                            <a href=''>DRIBBLE</a>
                            <a href=''>BEHANCE</a>
                            <a href=''>LINKEDIN</a>
                            <a href=''>X</a>
                            <a href=''>XING</a>
                        </div>
                    </div>
                    <div className='p-5 bg-white rounded-[20px] flex flex-col'>
                        <p className='dark-font-2 mb-1'>Impresssions</p>
                        <div className='flex flex-col mt-auto'>
                            <div className='bg-gray-300 px-5 py-1.25 rounded-2xl w-full'>
                                <span>Solutions</span>
                                <span>100%</span>
                            </div>
                            <div className='bg-gray-200 px-5 py-1.25 rounded-2xl  w-[90%] -mt-1.25'>
                                <span>UI/UX</span>
                                <span>90%</span>
                            </div>
                            <div className='bg-gray-100 px-5 py-1.25 rounded-2xl  w-[72%] -mt-1.25'>
                                <span>Explore</span>
                                <span>72%</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CEO */}
                <div className='p-5 bg-[#0a0a0a] rounded-[20px] relative min-h-100 order-3 md:col-span-2 lg:col-span-2 lg:order-2'>
                    <img src="https://floka.casethemes.net/wp-content/uploads/2025/05/home-1-icon1.svg" alt="Awards" className='w-20 absolute right-6.25' />
                    <img src="https://floka.casethemes.net/wp-content/uploads/2025/05/home-1-icon2.svg" alt="Awards" className='w-20 absolute right-6.25 top-18' />
                    <div className='ceo-img-container bottom-0 inline-block'>
                        <img src={ceoImage} alt="Awards" className='w-1/2' />
                    </div>

                    <div className='absolute bottom-12 px-5'>
                        <p className='text-white text-lg md:text-2xl'>"At Floka, we merge strategy, creaivity, and technology to shape brands that people love."</p>
                        <p className='md:text-lg dark-font-3'>Maria J. Keys / CEO</p>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="relative overflow-hidden w-full py-6 my-5">

                {/* LEFT FADE */}
                <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-linear-to-r from-[#F5F5F5] to-transparent z-10"></div>

                {/* RIGHT FADE */}
                <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-linear-to-l from-[#F5F5F5] to-transparent z-10"></div>

                {/* SCROLLING TRACK */}
                <div className="flex w-max animate-marquee">

                    {/* GROUP 1 */}
                    <div className="flex">
                        <span className="mx-1 whitespace-nowrap text-3xl md:text-4xl lg:text-5xl">
                            See how our team combines creativity, technology, and strategy
                        </span>
                        <span className="mx-1 whitespace-nowrap  text-3xl md:text-4xl lg:text-5xl">
                            See how our team combines creativity, technology, and strategy
                        </span>
                        <span className="mx-1 whitespace-nowrap  text-3xl md:text-4xl lg:text-5xl">
                            See how our team combines creativity, technology, and strategy
                        </span>
                    </div>

                    {/* GROUP 2 (duplicate) */}
                    <div className="flex">
                        <span className="mx-1 whitespace-nowrap  text-3xl md:text-4xl lg:text-5xl">
                            See how our team combines creativity, technology, and strategy
                        </span>
                        <span className="mx-1 whitespace-nowrap  text-3xl md:text-4xl lg:text-5xl">
                            See how our team combines creativity, technology, and strategy
                        </span>
                        <span className="mx-1 whitespace-nowrap  text-3xl md:text-4xl lg:text-5xl">
                            See how our team combines creativity, technology, and strategy
                        </span>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default About;