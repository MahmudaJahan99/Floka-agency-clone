import React from 'react';
import logo from '../../assets/images/logoBlack.png'
import CountUpModule from 'react-countup';
import user1 from '../../assets/images/user-img1.webp'
import user2 from '../../assets/images/user-img2.webp'
import user3 from '../../assets/images/user-img3.webp'
import user4 from '../../assets/images/user-img4.webp'
import ceoImage from '../../assets/images/ceo-img.webp'


const About = () => {
    const circleText = "CREATIVITY & TECHNOLOGY";
    const marqueeText = ["See how our team combines creativity, technology, and strategy"]

    const CountUp = CountUpModule.default;

    return (
        <section id='about' className='section-sm'>

            {/* Title */}
            <h2 className='-mb-2.5'>ABOUT US</h2>

            {/* Divider */}
            <div className="divider"></div>

            {/* Top section */}
            <div className='grid gap-10 md:grid-cols-5 my-5'>

                <div className='md:col-span-2 flex flex-col gap-5'>
                    {/* Round text circling logo */}
                    <div className="logo-circling-container">
                        <div className="circle">
                            {circleText.split("").map((char, i) => (
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
                    <p className='big-font md:text-4xl'>
                        Our approach is straightforward — prioritizing functionality, speed, and clarity for solutions.
                    </p>
                </div>
            </div>

            {/* Middle section */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {/* Reviews */}
                <div className='white-card order-1 lg:col-span-1 flex flex-col'>
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

                    {/* Divider */}
                    <div className='divider'></div>

                    <p className='dark-font-2 text-lg mb-5'>Explore how we transform ideas into extraordinary digital experiences.</p>

                    {/* Users' images */}
                    <div className='mt-auto'>
                        <div className='user-img-container flex'>
                            <img src={user1} alt="User" />
                            <img src={user2} alt="User" />
                            <img src={user3} alt="User" />
                            <img src={user4} alt="User" />
                        </div>
                        <p className='dark-font-3'>
                            <CountUp
                                start={0}
                                end={1200}
                                duration={3}
                            />
                            + happy users review
                        </p>
                    </div>
                </div>

                {/* Follow Us & Impressions */}
                <div className='order-2 lg:order-3 lg:col-span-1 grid gap-5'>
                    {/* Follow Us Card */}
                    <div className='white-card flex flex-col'>
                        <h3 className='dark-font-2 text-xl font-semibold'>Follow us</h3>
                        <p className='dark-font-3 mb-5'>Check all the latest updates about us</p>
                        <div className='capsule-btns-container mt-auto'>
                            <a href='https://dribbble.com/' className='capsule-btn'>DRIBBLE</a>
                            <a href='https://www.behance.net/' className='capsule-btn'>BEHANCE</a>
                            <a href='https://www.linkedin.com/' className='capsule-btn'>LINKEDIN</a>
                            <a href='https://x.com/' className='capsule-btn'>X</a>
                            <a href='https://www.xing.com/en' className='capsule-btn'>XING</a>
                        </div>
                    </div>
                    {/* Impressions Card */}
                    <div className='white-card flex flex-col'>
                        <h3 className='dark-font-2 text-xl font-semibold mb-5'>Impresssions</h3>

                        <div className='flex flex-col mt-auto dark-font-2 font-medium'>
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
                <div className='black-card relative min-h-100 order-3 md:col-span-2 lg:col-span-2 lg:order-2'>
                    {/* Awards at top-right */}
                    <img src="https://floka.casethemes.net/wp-content/uploads/2025/05/home-1-icon1.svg" alt="Awards" className='w-20 absolute right-6.25' />
                    <img src="https://floka.casethemes.net/wp-content/uploads/2025/05/home-1-icon2.svg" alt="Awards" className='w-20 absolute right-6.25 top-18' />

                    {/* CEO image */}
                    <div className='ceo-img-container bottom-0 inline-block'>
                        <img src={ceoImage} alt="Awards" className='w-1/2' />
                    </div>

                    <div className='absolute bottom-12 px-5 '>
                        <p className='text-white text-xl md:text-2xl funnel-font'>"At Floka, we merge strategy, creaivity, and technology to shape brands that people love."</p>
                        <p className='md:text-lg dark-font-3 inter-font'>Maria J. Keys / CEO</p>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="relative overflow-hidden w-full py-6 my-5 funnel-font">

                {/* Left fade */}
                <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-linear-to-r from-[#F5F5F5] to-transparent z-10"></div>

                {/* Right fade */}
                <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-linear-to-l from-[#F5F5F5] to-transparent z-10"></div>

                {/* SCROLLING TRACK */}
                <div className="flex w-max animate-marquee">
                    {/* Text content */}
                    {[...marqueeText, ...marqueeText].map((text, i) => (
                        <span
                            key={i}
                            className="mx-5 whitespace-nowrap text-4xl md:text-5xl lg:text-6xl"
                        >
                            {text}
                        </span>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default About;