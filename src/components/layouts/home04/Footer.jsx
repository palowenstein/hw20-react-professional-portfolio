import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Footer extends Component {
    render() {
        return (
            <div className="tf-modal-content justify-content-end"> 
                <footer id="footer" className="footer footer-s4">
                    <div className="container">
                        <div id="footer-widget" className="footer-widget-s3 border-bottom-s2 position-relative">
                            <h3 className="widget-title larger lt-sp06 text-white text-center">Let’s try me!</h3>
                            <div className="site-list site-list-center text-center">
                                <Link to="#" className="bg-s1"><i className="fa fa-linkedin" aria-hidden="true" /></Link>
                                <Link to="#" className="bg-s2"><i className="fa fa-github" aria-hidden="true" /></Link>
                            </div>
                        </div>
                    </div>
                    <div id="bottom" className="bottom-s3">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="copyright lt-sp02">
                                        © 2021 Pierre Andr&eacute; Lowenstein,<br />Soundtrack Specialist Inc.
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <ul className="widget-nav-menu color-s2">
                                        <li><Link to="#">Home</Link></li>
                                        <li><Link to="#">Profile</Link></li>                                        
                                        <li><Link to="#">Skills</Link></li>
                                        <li><Link to="#">Portfolio</Link></li>
                                        <li><Link to="#">Contact</Link></li>
                                        <li><Link to="#">R&eacute;sum&eacute;</Link></li>                                        
                                    </ul>
                                </div>
                                <div className="col-lg-2">
                                    <div className="socials-list color-s2">
                                        <Link to="#"><i className="fa fa-linkedin" aria-hidden="true" /></Link>
                                        <Link to="#"><i className="fa fa-github" aria-hidden="true" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;
