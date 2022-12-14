import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from './Component/Header'
import Footer from './Component/Footer'
import {Routes, Route, useNavigate} from 'react-router-dom';


export default function 
({Login,error}) {
    const [details,setDetails] = useState({name:"",password:""});
    // const [user,setUser] = useState([]);
    const navigate = useNavigate();

    const submitHandler = e => {
        e.preventDefault();
        // Login(details);
        // console.log(details)
        
        if ( typeof(Storage) !== 'undefined') {
            const userset = JSON.parse(localStorage.getItem('user'));
            if(userset){
                for(let i=0; i<userset.length; i++) {
                    // setUser(admin[i])
// console.log('loop'+admin.length,admin[i],user.name,user.password,details.name,details.password)
                    
                    // check account
                    if(userset[i].name === details.name ){
                        // console.log('check',user.name)
                        if(userset[i].password === details.password){
                            sessionStorage.setItem('email', userset[i].email);
                            sessionStorage.setItem('name', userset[i].name);
                            sessionStorage.setItem('password', userset[i].password);
                
                            navigate('/product');
                        } else {
                            alert('Mật khẩu không chính xác !!');
                        }  
                        return;
                    } 
                }
                alert('Tên tài khoản không tồn tại !!');
            }

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
                                Login
                            </span>
                            <span class="login100-form-title p-b-48">
                                <i class="zmdi zmdi-font"></i>
                            </span>

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
                                        Login
                                    </button>
                                </div>
                            </div>

                            <div class="text-center p-t-115">
                                <span class="txt1">
                                    Don’t have an account?
                                </span>

                                <Link class="txt2" to="/register">
                                    Sign Up
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
