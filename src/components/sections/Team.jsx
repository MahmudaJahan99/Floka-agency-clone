import React from 'react';
import teamFeature from '../../assets/images/team-feature.jpg'
import designTeam1 from '../../assets/images/design-team-member-1.png'
import designTeam2 from '../../assets/images/design-team-member-2.png'
import designTeam3 from '../../assets/images/design-team-member-3.png'
import designTeam4 from '../../assets/images/design-team-member-4.png'
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';


const Team = () => {
    return (
        <section className='section-sm inter-font grid gap-5 white-card'>
            <div className='grid gap-5'>
                {/* Title */}
                <h4>OUR AVENGERS</h4>
                <p className='text-2xl md:text-4xl funnel-font'>Meet with our team member</p>
                <div className='flex gap-5'>
                    <span>DESIGN TEAM</span>
                    <span>DEVELOPMENT TEAM</span>
                </div>
                <p className='dark-font-2'>What began over coffee-fueled brainstorming sessions has grown into a thriving digital agency dedicated to helping brands stand out.</p>

                <div className='flex items-center font-semibold'>
                    <div className='round-btn'>
                        <span className='-mt-1'>+</span>
                    </div>
                    <span className='ml-2.5 dark-font-2'>JOIN US</span>
                </div>

                <div className='w-full'>
                    <img src={teamFeature} className='w-full rounded-[20px]' />
                </div>
            </div>

            <div className='grid md:grid-cols-2 gap-5 team-details-container'>
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
        </section>
    );
};

export default Team;