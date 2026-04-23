import React from 'react';
import teamFeature from '../../assets/images/team-feature.jpg'
import designTeam1 from '../../assets/images/design-team-member-1.png'
import designTeam2 from '../../assets/images/design-team-member-2.png'
import designTeam3 from '../../assets/images/design-team-member-3.png'
import designTeam4 from '../../assets/images/design-team-member-4.png'
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';


const Team = () => {
    return (
        <section className='section-sm'>
            <div>
                <h4>OUR AVENGERS</h4>
                <p>Meet with our team member</p>
                <div>
                    <span>DESIGN TEAM</span>
                    <span>DEVELOPMENT TEAM</span>
                </div>
                <p>What began over coffee-fueled brainstorming sessions has grown into a thriving digital agency dedicated to helping brands stand out.</p>

                <div className='flex items-center font-semibold'>
                    <div className='round-btn'>
                        <span>+</span>
                    </div>
                    <span className='ml-2.5 dark-font-2'>JOIN US</span>
                </div>

                <div>
                    <img src={teamFeature} />
                </div>
            </div>

            <div>
                {/* Card 1 */}
                <div>
                    <div><img src={designTeam1} /></div>
                    <p>Nicolas K. Ellington</p>
                    <p>FOUNDER</p>
                    <div className="socials">
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaXTwitter /></a>
                        <a href="#"><FaLinkedinIn /></a>
                    </div>
                </div>

                {/* Card 2 */}
                <div>
                    <div><img src={designTeam2} /></div>
                    <p>Carlos E. Ashcroft</p>
                    <p>CEO</p>
                    <div className="socials">
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaXTwitter /></a>
                        <a href="#"><FaLinkedinIn /></a>
                    </div>
                </div>
                {/* Card 3 */}
                <div>
                    <div><img src={designTeam3} /></div>
                    <p>Leonardo F. Ashton</p>
                    <p>UX DESIGNER</p>
                    <div className="socials">
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaXTwitter /></a>
                        <a href="#"><FaLinkedinIn /></a>
                    </div>
                </div>
                {/* Card 4 */}
                <div>
                    <div><img src={designTeam4} /></div>
                    <p>Ricardo P. Winslow</p>
                    <p>UI DESIGNER</p>
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