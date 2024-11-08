import React from 'react';

// Ícones
import { FaLocationDot } from "react-icons/fa6";
import instagramLogoColor from '../assets/instagram-logo-color.svg';
import instagramLogoBlack from '../assets/instagram-logo-black.svg';
import facebookLogoColor from '../assets/facebook-logo-color.svg';
import facebookLogoBlack from '../assets/facebook-logo-black.svg';
import twitterLogoColor from '../assets/twitter-logo-color.svg';
import twitterLogoBlack from '../assets/twitter-logo-black.svg';
import youtubeLogoColor from '../assets/youtube-logo-color.svg';
import youtubeLogoBlack from '../assets/youtube-logo-black.svg';


const Footer: React.FC = () => {
    const changeLogo = (event: React.MouseEvent<HTMLImageElement>, hoverSrc: string) => {
        const img = event.currentTarget as HTMLImageElement;
        img.src = hoverSrc;
    };

    const resetLogo = (event: React.MouseEvent<HTMLImageElement>, originalSrc: string) => {
        const img = event.currentTarget as HTMLImageElement;
        img.src = originalSrc;
    };

    return (
        <div id="footer-content">
            <div id="footer-top">
                <p>Assim que possível, me envie um email para que possamos trabalhar felizes juntos!</p>

                <div id="footer-contact-icons">
                    <button className="social-button">
                        <img
                            src={instagramLogoBlack}
                            alt="Instagram Logo"
                            onMouseOver={(e) => changeLogo(e, instagramLogoColor)}
                            onMouseOut={(e) => resetLogo(e, instagramLogoBlack)}
                        />
                    </button>

                    <button className="social-button">
                        <img
                            src={facebookLogoBlack}
                            alt="Facebook Logo"
                            onMouseOver={(e) => changeLogo(e, facebookLogoColor)}
                            onMouseOut={(e) => resetLogo(e, facebookLogoBlack)}
                        />
                    </button>

                    <button className="social-button">
                        <img
                            src={twitterLogoBlack}
                            alt="Twitter Logo"
                            onMouseOver={(e) => changeLogo(e, twitterLogoColor)}
                            onMouseOut={(e) => resetLogo(e, twitterLogoBlack)}
                        />
                    </button>

                    <button className="social-button">
                        <img
                            src={youtubeLogoBlack}
                            alt="Youtube Logo"
                            onMouseOver={(e) => changeLogo(e, youtubeLogoColor)}
                            onMouseOut={(e) => resetLogo(e, youtubeLogoBlack)}
                        />
                    </button>
                </div>
            </div>

            <div id="footer-bottom">
                <FaLocationDot />
                <p>&copy; 2024, All Rights By Compass UOL</p>
            </div>
        </div>
    );
};

export default Footer;