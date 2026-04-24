import React, { useState } from 'react';
import teamFeature from '../../assets/images/team-feature.jpg'
import designTeam1 from '../../assets/images/design-team-member-1.png'
import designTeam2 from '../../assets/images/design-team-member-2.png'
import designTeam3 from '../../assets/images/design-team-member-3.png'
import designTeam4 from '../../assets/images/design-team-member-4.png'
import developerTeam1 from '../../assets/images/developer-team-member-1.png'
import developerTeam2 from '../../assets/images/developer-team-member-2.png'
import developerTeam3 from '../../assets/images/developer-team-member-3.png'
import developerTeam4 from '../../assets/images/developer-team-member-4.png'
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';


const Team = () => {
    const [isDesignTeam, setIsDesignTeam] = useState(true);

    return (
        <section className='section-sm inter-font grid md:grid-cols-2 gap-5 white-card'>
            <div className='grid gap-5'>
                {/* Title */}
                <h4>OUR AVENGERS</h4>
                <p className='text-2xl md:text-4xl funnel-font'>Meet with our team member</p>

                {/* Toggle buttons */}
                <div className='flex gap-5'>
                    <button onClick={() => setIsDesignTeam(true)} className={`cursor-pointer ${isDesignTeam && 'underline'}`}>DESIGN TEAM</button>
                    <button onClick={() => setIsDesignTeam(false)} className={`cursor-pointer ${!isDesignTeam && 'underline'}`}>DEVELOPMENT TEAM</button>
                </div>

                <p className='dark-font-2'>What began over coffee-fueled brainstorming sessions has grown into a thriving digital agency dedicated to helping brands stand out.</p>

                {/* JOIN US button */}
                <div className='flex items-center font-semibold'>
                    <div className='round-btn'>
                        <span className='-mt-1'>+</span>
                    </div>
                    <span className='ml-2.5 dark-font-2'>JOIN US</span>
                </div>

                {/* Feature image */}
                <div className='w-full'>
                    <img src={teamFeature} className='w-full rounded-[20px]' />
                </div>
            </div>

            <div className='relative'>
                {/* DESIGN TEAM */}
                <div
                    className={`team-details-container grid md:grid-cols-2 gap-5 ${isDesignTeam ? 'team-show' : 'team-fade'
                        }`}
                >
                    {/* Card 1 */}
                    <div className='member-card'>
                        <div className='member-img-container'><img src={designTeam1} /></div>

                        <div className='dark-font-2 font-semibold'>
                            <p className='dark-font-2'>Nicolas K. Ellington</p>
                            <p className='dark-font-3'>FOUNDER</p>
                        </div>

                        <div className="socials">
                            <a href="#"><FaFacebookF /></a>
                            <a href="#"><FaXTwitter /></a>
                            <a href="#"><FaLinkedinIn /></a>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className='member-card'>
                        <div className='member-img-container'><img src={designTeam2} /></div>

                        <div className='dark-font-2 font-semibold'>
                            <p className='dark-font-2'>Carlos E. Ashcroft</p>
                            <p className='dark-font-3'>CEO</p>
                        </div>

                        <div className="socials">
                            <a href="#"><FaFacebookF /></a>
                            <a href="#"><FaXTwitter /></a>
                            <a href="#"><FaLinkedinIn /></a>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className='member-card'>
                        <div className='member-img-container'><img src={designTeam3} /></div>

                        <div className='dark-font-2 font-semibold'>
                            <p className='dark-font-2'>Leonardo F. Ashton</p>
                            <p className='dark-font-3'>UX DESIGNER</p>
                        </div>

                        <div className="socials">
                            <a href="#"><FaFacebookF /></a>
                            <a href="#"><FaXTwitter /></a>
                            <a href="#"><FaLinkedinIn /></a>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className='member-card'>
                        <div className='member-img-container'><img src={designTeam4} /></div>

                        <div className='dark-font-2 font-semibold'>
                            <p className='dark-font-2'>Ricardo P. Winslow</p>
                            <p className='dark-font-3'>UI DESIGNER</p>
                        </div>

                        <div className="socials">
                            <a href="#"><FaFacebookF /></a>
                            <a href="#"><FaXTwitter /></a>
                            <a href="#"><FaLinkedinIn /></a>
                        </div>
                    </div>
                </div>

                {/* DEVELOPER TEAM */}
                <div
                    className={`team-details-container grid md:grid-cols-2 gap-5 ${isDesignTeam ? 'team-fade' : 'team-show'
                        }`}
                >
                    {/* Card 1 */}
                    <div className='member-card'>
                        <div className='member-img-container'><img src={developerTeam1} /></div>

                        <div className='dark-font-2 font-semibold'>
                            <p className='dark-font-2'>Adrian T. Carrington</p>
                            <p className='dark-font-3'>FOUNDER</p>
                        </div>

                        <div className="socials">
                            <a href="#"><FaFacebookF /></a>
                            <a href="#"><FaXTwitter /></a>
                            <a href="#"><FaLinkedinIn /></a>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className='member-card'>
                        <div className='member-img-container'><img src={developerTeam2} /></div>

                        <div className='dark-font-2 font-semibold'>
                            <p className='dark-font-2'>Marcus J. Remington</p>
                            <p className='dark-font-3'>CEO</p>
                        </div>

                        <div className="socials">
                            <a href="#"><FaFacebookF /></a>
                            <a href="#"><FaXTwitter /></a>
                            <a href="#"><FaLinkedinIn /></a>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className='member-card'>
                        <div className='member-img-container'><img src={developerTeam3} /></div>

                        <div className='dark-font-2 font-semibold'>
                            <p className='dark-font-2'>Leonardo F. Ashton</p>
                            <p className='dark-font-3'>UX DESIGNER</p>
                        </div>

                        <div className="socials">
                            <a href="#"><FaFacebookF /></a>
                            <a href="#"><FaXTwitter /></a>
                            <a href="#"><FaLinkedinIn /></a>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className='member-card'>
                        <div className='member-img-container'><img src={developerTeam4} /></div>

                        <div className='dark-font-2 font-semibold'>
                            <p className='dark-font-2'>Samuel R. Worthington</p>
                            <p className='dark-font-3'>UI DESIGNER</p>
                        </div>

                        <div className="socials">
                            <a href="#"><FaFacebookF /></a>
                            <a href="#"><FaXTwitter /></a>
                            <a href="#"><FaLinkedinIn /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;