import React from 'react';
import '../styles/sections.css'

const Hero = () => {
    return (
        <section className='section relative'>
            <div className='w-full m-auto'>
                <video className='rounded-[20px] w-full' src="https://floka.casethemes.net/wp-content/uploads/2025/06/home-1-video.mp4" autoPlay loop muted playsInline></video>
            </div>


            <span className='brand-text-hero'>Floka</span>
            <span className='studio-hero'>Studio</span>
        </section>

    );
};

export default Hero;