import React from 'react';
import '../styles/sections.css'

const Hero = () => {
    return (
        <section className='section relative'>
            <div className='w-full m-auto'>
                <video className='rounded-[20px] w-full' src="https://floka.casethemes.net/wp-content/uploads/2025/06/home-1-video.mp4" autoPlay loop muted playsInline></video>
            </div>


            <span className='brand-text-hero text-3xl md:text-5xl lg:text-9xl funnel-font'>Floka</span>
            <span className='studio-hero text-2xl md:text-4xl lg:text-7xl funnel-font'>Studio</span>
        </section>

    );
};

export default Hero;