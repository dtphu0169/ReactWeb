import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from './Component/Header'
import Footer from './Component/Footer'
import {Routes, Route, useNavigate} from 'react-router-dom';


export default function 
() {
    const [details,setDetails] = useState({email:"",name:"",password:""});
    // const [users,setUsers] = useState([]);
    const navigate = useNavigate();

    const submitHandler = e => {
        e.preventDefault();
        // Login(details);
        console.log(details)
        
        if ( typeof(Storage) !== 'undefined') {
            const userset = JSON.parse(localStorage.getItem('user'));
            
            for(let i=0; i<userset.length; i++) {
                if(userset[i].name === details.name || userset[i].email === details.email){
                    alert('Tên hoặc email này đã được sử dụng \n'+
                     'Vui lòng thử lại !!');
                     return;
                }
            }

            userset.push(details);

            localStorage.setItem('user',JSON.stringify(userset));
            navigate('/login');
            alert('Bạn đã tạo tài khoản thành công \nVui lòng đăng nhập !!');
        } else {
            alert('Trình duyệt của bạn không hỗ trợ!');
        }
    }


  return (
    <React.Fragment>
        <Header/>
        <body>
            <div class="limiter">
                <div class="container-login100">
                    <div class="wrap-login100">
                        <form class="login100-form validate-form" onSubmit={submitHandler} action='/'>
                            <span class="login100-form-title p-b-26">
                                Register
                            </span>
                            <span class="login100-form-title p-b-48">
                                <i class="zmdi zmdi-font"></i>
                            </span>

                            <div class="wrap-input100 validate-input" data-validate = "Valid email is: a@b.c">
                                <input class="input100" type="text" name="email" onChange={e => setDetails({...details,email:e.target.value})} value={details.email}/>
                                <span class="focus-input100" data-placeholder="Email"></span>
                            </div>

                            <div class="wrap-input100 validate-input">
                                <input class="input100" type="text" name="name" onChange={e => setDetails({...details,name:e.target.value})} value={details.name}/>
                                <span class="focus-input100" data-placeholder="Name"></span>
                            </div>

                            <div class="wrap-input100 validate-input" data-validate="Enter password">
                                <span class="btn-show-pass">
                                    <i class="zmdi zmdi-eye"></i>
                                </span>
                                <input class="input100" type="password" name="pass" onChange={e => setDetails({...details,password:e.target.value})} value={details.password}/>
                                <span class="focus-input100" data-placeholder="Password"></span>
                            </div>

                            <div class="container-login100-form-btn">
                                <div class="wrap-login100-form-btn">
                                    <div class="login100-form-bgbtn"></div>
                                    <button class="login100-form-btn" type='submit'>
                                        Register
                                    </button>
                                </div>
                            </div>

                            <div class="text-center p-t-115">
                                <span class="txt1">
                                    You have an account already?
                                </span>

                                <Link class="txt2" to="/login">
                                    Sign In
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            

            <div id="dropDownSelect1"></div>
            
            <Footer/>

        </body>  

    

    </React.Fragment>
  )
}
