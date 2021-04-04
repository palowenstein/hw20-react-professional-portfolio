import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Banner extends Component {
    render() {
        return (
            <section className="banner-section s4 two-home" id="home">
                <div className="container">
                    <div className="content-text position-relative">
                        <div className="animate-element wow delay5 fadeInDown" data-wow-delay="0.3s">
                            <div className="tag color-d1 lt-sp53 mg-b34">Full Stack Web Developer</div>
                            <h1 className="cd-headline clip is-full-width title color-d11 mg-b41">
                                <span>Pierre Andr&eacute;&nbsp;<br />Lowenstein</span>
                                {/* <span className="cd-words-wrapper color-d6">
                                <b className="is-visible">Test</b>
                                <b className="is-visible">Test</b>
                                </span> */}
                            </h1>
                            <p className="color-d13 lt-sp02 mg-b51">
                            I've been coding since age 10, at first with a 16Ko ATARI 600XL Computer.<br />
                            Dealing with the limitations of the time, I've learned to maximize code efficiency over memory footprint.<br />
                            Nowadays, I deliver full stack applications with a strong sense of design and a cinematic touch.<br />
                            I enjoy creating something unique that will entice the imagination of my users.
                            </p>
                        </div>
                        <div className="animate-element wow delay5 fadeInUp" data-wow-delay="0.3s">
                            <div className="fl-btn btn-general color-s2 btn-hv-border">
                                <Link to="#" className="f-w500 color-d6 border-corner5 lt-sp01 text-two">Download Resume</Link>
                            </div>
                        </div>
                    </div>
                    <div className="featured-post border-corner-bl">
                        <img src="palowenstein/professional-portfolio-react/images/section/47.png" alt="images" />
                        <div className="site-list has-border text-center animate-element wow delay5 fadeInUp" data-wow-delay="0.3s">
                            <Link to="#" className="bg-s1"><i className="fa fa-twitter" aria-hidden="true" /></Link>
                            <Link to="#" className="bg-s2"><i className="fa fa-behance" aria-hidden="true" /></Link>
                            <Link to="#" className="bg-s3"><span className="icon-dribble" /></Link>
                        </div>
                    </div>
                </div>
                <div className="iconbox-s4 t2 color-s2 border-corner5 animate-element wow delay5 fadeZooming" data-wow-delay="0.3s">
                    <div className="avatar position-relative">
                        <img src="palowenstein/professional-portfolio-react/images/footer/01.jpg" alt="images" />
                    </div>
                    <div className="content-inner">
                        <h4 className="name lt-sp04 mg-b16 text-white position-relative">Available for Project</h4>
                        <div className="fl-btn btn-general">
                            <Link to="#" className="text-white border-corner2">Hire Me</Link>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Banner;
