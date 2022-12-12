import React,{useState} from 'react';
import { Link, useNavigate } from 'react-router-dom'

export default function 
Header() {

    // const adminUser = {
    //     email: "admin@admin.com",
    //     password: "admin123"
    // }
    
    // const [user,setUser ] = useState({name:"",email:""})
    // const [error,setError] = useState("");
    
    // const Login = details => {
    //     console.log(details)
    // }
    
    // const Logout = () => {
    //     console.log("logout")
    // }

    const navigate = useNavigate();

    const WelcomeStyle = {
        color: 'greenyellow'
    };

    const LogoutHandle = e =>{
        // sessionStorage.removeItem('email', "");
        // sessionStorage.removeItem('name', "");
        // sessionStorage.removeItem('password', "");
        sessionStorage.clear();

        navigate('/login');
    }

  return (
    <React.Fragment>
        {/* <!-- header section strats --> */}
    <header class="header_section">
        <div class="header_top">
            <div class="container-fluid">
                <div class="top_nav_container">
                    <div class="contact_nav">
                        <a href="/">
                            <i class="fa fa-phone" aria-hidden="true"></i>
                            <span>
                  Call : +01 123455678990
                </span>
                        </a>
                        <a href="/">
                            <i class="fa fa-envelope" aria-hidden="true"></i>
                            <span>
                  Email : demo@gmail.com
                </span>
                        </a>
                    </div>
                    <from class="search_form">
                        <input type="text" class="form-control" placeholder="Search here..."/>
                        <button class="" type="submit">
                            <i class="fa fa-search" aria-hidden="true"></i>
                        </button>
                    </from>
                    <div class="user_option_box">

                        

                        {(sessionStorage.getItem('name') !== null) ?(
                            <a class="account-link">
                                <i class="fa fa-user" aria-hidden="true"></i>
                                <span style={WelcomeStyle}>
                                    Welcome {(sessionStorage.getItem('name'))}
                                </span>
                            </a>
                        ) : 
                        (
                            <a href="/login" class="account-link">
                                <i class="fa fa-user" aria-hidden="true"></i>
                                <span>
                                    Login
                                </span>
                            </a>
                        )}

                        {(sessionStorage.getItem('name') !== null) ? (
                            <a href="" onClick={LogoutHandle} class="account-link">
                                <i class="fa fa-sign-out" aria-hidden="true"></i>
                                <span>
                                    Logout
                                </span>
                            </a>
                        ):(<></>)}
                            

                        <a href="/" class="cart-link">
                            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                            <span>
                  Cart
                </span>
                        </a>
                    </div>
                </div>

            </div>
        </div>
        <div class="header_bottom ">
            <div class="container-fluid">
                <nav class="navbar navbar-expand-lg custom_nav-container ">
                <a class="navbar-brand" href="/">
                    <span>
                    Minics
                    </span>
                </a>

                    <button class="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span class=""> </span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ">
                            <li class="nav-item ">
                                <Link class="nav-link" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/about"> About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/product"> Product</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/why"> Why Us</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/testimonial"> Testimonial</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </header>
    {/* <!-- end header section -->*/}
    </React.Fragment>
  )
}
