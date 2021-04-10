import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css'

function Footer() {
    return (
        <div classNam='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    For updates on my various projects, you can subscribe to my newsletter.
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe any time.
                </p>
                <div className="input-areas">
                    <form>
                        <input 
                            type="email"
                            name="email" 
                            placeholder="Your Email" 
                            className="footer-input" 
                        />
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to='/' className='social-logo'>JR <i className='fab fa-typo3' />
                        </Link>
                    </div>
                    <small className="website-rights">Jared Rinaldi 2021</small>
                    <div className="social-icons">
                        <Link 
                            className="social-icon-link linkedin"
                            to="/"
                            target="blank"
                            aria-label="LinkedIn"
                        >
                            <i className="fab fa-linkedin"></i>
                        </Link>
                        <Link 
                            className="social-icon-link github"
                            to="/"
                            target="blank"
                            aria-label="GitHub"
                        >
                            <i className="fab fa-github"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;