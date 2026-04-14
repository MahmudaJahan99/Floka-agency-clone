import React from 'react';
import logo from '../../assets/images/logoBlack.png'

const About = () => {
    const text = "CREATIVITY & TECHNOLOGY";
    return (
        <section>
            <div className="hero-container">
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
        </section>
    );
};

export default About;