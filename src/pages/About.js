import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Component/Footer'
import Header from './Component/Header'

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

{/* <!-- about section --> */}

<section class="about_section">
  <div class="container-fluid  ">
    <div class="row">
      <div class="col-md-5 ml-auto">
        <div class="detail-box pr-md-3">
          <div class="heading_container">
            <h2>
              We Provide Best For You
            </h2>
          </div>
          <p>
            Totam architecto rem beatae veniam, cum officiis adipisci soluta perspiciatis ipsa, expedita maiores quae accusantium. Animi veniam aperiam, necessitatibus mollitia ipsum id optio ipsa odio ab facilis sit labore officia!
            Repellat expedita, deserunt eum soluta rem culpa. Aut, necessitatibus cumque. Voluptas consequuntur vitae aperiam animi sint earum, ex unde cupiditate, molestias dolore quos quas possimus eveniet facilis magnam? Vero, dicta.
          </p>
          <a href="#">
            Read More
          </a>
        </div>
      </div>
      <div class="col-md-6 px-0">
        <div class="img-box">
          <img src="ReactWeb/assets/about-img.jpg" alt=""/>
        </div>
      </div>
    </div>
  </div>
</section>

{/* <!-- end about section -->*/}

<Footer/>

</body>
    </React.Fragment>
  )
}
