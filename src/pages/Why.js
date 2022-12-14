import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Component/Header'
import Footer from './Component/Footer'


export default function 
() {
  return (
    <React.Fragment>
        
<body class="sub_page">

<div class="hero_area">
  {/* <!-- header section strats --> */}
  <Header/>
  {/* <!-- end header section --> */}
</div>

{/* <!-- why us section --> */}

<section class="why_us_section layout_padding">
  <div class="container">
    <div class="heading_container heading_center">
      <h2>
        Why Choose Us
      </h2>
    </div>
    <div class="row">
      <div class="col-md-4">
        <div class="box ">
          <div class="img-box">
            <img src="ReactWeb/assets/images/w1.png" alt=""/>
          </div>
          <div class="detail-box">
            <h5>
              Fast Delivery
            </h5>
            <p>
              variations of passages of Lorem Ipsum available
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="box ">
          <div class="img-box">
            <img src="ReactWeb/assets/images/w2.png" alt=""/>
          </div>
          <div class="detail-box">
            <h5>
              Free Shiping
            </h5>
            <p>
              variations of passages of Lorem Ipsum available
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="box ">
          <div class="img-box">
            <img src="ReactWeb/assets/images/w3.png" alt=""/>
          </div>
          <div class="detail-box">
            <h5>
              Best Quality
            </h5>
            <p>
              variations of passages of Lorem Ipsum available
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* <!-- end why us section -->*/}

<Footer/>

</body>

    </React.Fragment>
  )
}
