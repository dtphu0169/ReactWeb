import React,{useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import RouterPage from './pages/RouterPage';

function App() {
  
const admin ={
    name:'admin',
    email:'admin@admin.com',
    password:'pass',
  }
  
  const [user,setUser] = useState([admin]);
  

  useEffect(() =>{
    if(localStorage.length < 1){
      localStorage.setItem('user',JSON.stringify(user));
    }
  },[])


  

  // addToList = input => {
  //   let listArray = this.state.lists;

  //   listArray.push(input);

  //   this.setState({
  //     lists: listArray,
  //     userInput: ""
  //   }, () => {
  //       window.localStorage.setItem('savedList', JSON.stringify(this.state.lists));
  //   });
  // };

  // addToList(admin);

  return (
    <div className="App">
      <RouterPage/>
    </div>
  );
}

export default App;
