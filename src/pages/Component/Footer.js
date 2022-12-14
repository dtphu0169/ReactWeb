import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <React.Fragment>
        {/* <!-- info section -->  */}
<section class="info_section ">
    <div class="container">
        <div class="row">
            <div class="col-md-3">
                <div class="info_contact">
                    <h5>
                        <a href="#" class="navbar-brand">
                <span>
                  Minics
                </span>
                        </a>
                    </h5>
                    <p>
                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                        Address
                    </p>
                    <p>
                        <i class="fa fa-phone" aria-hidden="true"></i>
                        +01 1234567890
                    </p>
                    <p>
                        <i class="fa fa-envelope" aria-hidden="true"></i>
                        demo@gmail.com
                    </p>
                </div>
            </div>
            <div class="col-md-3">
                <div class="info_info">
                    <h5>
                        Information
                    </h5>
                    <p>
                        Eligendi sunt, provident, debitis nemo, facilis cupiditate velit libero dolorum aperiam enim
                        nulla iste maxime corrupti ad illo libero minus.
                    </p>
                </div>
            </div>
            <div class="col-md-3">
                <div class="info_links">
                    <h5>
                        Useful Link
                    </h5>
                    <ul>
                        <li>
                            <Link to="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about">
                                About
                            </Link>
                        </li>
                        <li>
                            <a href="/product">
                                Products
                            </a>
                        </li>
                        <li>
                            <a href="/why">
                                Why Us
                            </a>
                        </li>
                        <li>
                            <a href="/testimonial">
                                Testimonial
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-md-3">
                <div class="info_form ">
                    <h5>
                        Newsletter
                    </h5>
                    <form action="">
                        <input type="email" placeholder="Enter your email"/>
                        <button>
                            Subscribe
                        </button>
                    </form>
                    <div class="social_box">
                        <a href="#">
                            <i class="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                        <a href="#">
                            <i class="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                        <a href="#">
                            <i class="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                        <a href="#">
                            <i class="fa fa-youtube" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<footer class="footer_section">
    <div class="container">
        <p>
            &copy; <span id="displayYear"></span> All Rights Reserved By
            <a href="https://html.design/">Free Html Templates</a>
        </p>
    </div>
</footer>
    </React.Fragment>
  )
}
