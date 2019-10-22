import React from 'react';


import fbIconSrc from '../assets/social-icons/facebook-logo.svg';
import googleIconSrc from '../assets/social-icons/google-logo.svg';
import linkedinIconSrc from '../assets/social-icons/linkedin-logo-1.svg';
import fbIconDarkSrc from '../assets/social-icons/facebook-logo-dark.svg';
import githubDarkIconSrc from '../assets/social-icons/github-logo-dark.svg';
import googleDarkIconSrc from '../assets/social-icons/google-logo-dark.svg';

const Footer = (props) => {
    return (
        <footer className="neutral-bg-2">
            <div id="footer_social-links">
                <a href="https://www.facebook.com/justin.hoong.35"><img className="social-icon" src={fbIconSrc} alt="link to my facebook" /></a>
                <a href="https://www.facebook.com/justin.hoong.35"><img className="social-icon" src={googleIconSrc} alt="link to my google account" /></a>
                <a href="https://www.facebook.com/justin.hoong.35"><img className="social-icon" src={linkedinIconSrc} alt="link to my LinkedIn" /></a>
            </div>
            <div id="footer_description-container">
                <section id="footer_section-container">
                    <div className="footer_section">
                        <div className="decor-line" />
                        <p>Community</p>
                    </div>
                    <div className="footer_section">
                        <div className="decor-line" />
                        <p>Health</p>
                    </div>
                    <div className="footer_section">
                        <div className="decor-line" />
                        <p>Belief</p>
                    </div>
                </section>
                <section id="footer_credit">
                    <div className="decor-line neutral-bg-4" />
                    <p>Website designed and developed by Matthew Wang. This site was designed using Adobe Illustrator and developed using  HTML, SASS, React, and Redux. Source code may also be found in this <a target="_blank" rel="noopener noreferrer" href="https://github.com/matowang/Justin-Paradise">github repository.</a></p>
                    <div id="footer_credit_social-links">
                        <a href="https://www.facebook.com/Mateo3113"><img className="social-icon" src={fbIconDarkSrc} alt="link to Matthew's facebook" /></a>
                        <a href="https://github.com/matowang/"><img className="social-icon" src={githubDarkIconSrc} alt="link to Matthew's github" /></a>
                        <a href="https://plus.google.com/u/0/101949063179030161455"><img className="social-icon" src={googleDarkIconSrc} alt="link to Matthew's google account" /></a>
                    </div>
                </section>
            </div>
        </footer>
    );
}
export default Footer;