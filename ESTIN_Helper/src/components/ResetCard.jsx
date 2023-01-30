import styles from "../style";
import {facebook} from "../assets/index.js";
import {Link} from "react-router-dom";
import "../index.css"
import React from "react";
import { useState } from "react";
import { resetPassword } from "../context/AuthContext";
import axios from 'redaxios'
import { useNavigate } from 'react-router-dom';

const ResetCard = () => {
    const [email, setEmail] = useState()
    const [passwordResetPin, setpasswordResetPin] = useState()
    const [password, setpassword] = useState()
    const [password2, setpassword2] = useState()
    const history = useNavigate()
    const handSubmit= (e) =>{
        e.preventDefault()
        if (password != password2) {
            alert('passwords must match')
            
        }else{

            async function getUser(email,passwordResetPin,password) {
                try {
                  const response = await fetch('http://127.0.0.1:8000/authApi/user/', {
                    method : 'POST',
                    headers: {
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify({'email':email})
                });
              
                  const result = await response.json();
                  console.log(result)
                  console.log(result.passwordResetPin)
                  console.log(passwordResetPin)
                  if (passwordResetPin == result.passwordResetPin) {
                    const config = {
                        headers : {
                            'Content-Type' : 'application/json',
                        }
                    };
                    
                    const body = JSON.stringify({password})
                    console.log(body)
                    
                    console.log(result.user_id)
                
                    axios.put('http://127.0.0.1:8000/authApi/update-password/'+ email + '/',body,config)
                    history('/Sign-in')
                  }
                  return result;
                } catch (err) {
                  console.log(err);
                }
              }
           getUser(email,passwordResetPin,password)
        

        

        }
    }

return(
    <center>
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} max-w-[700px] sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow `}>
      <center>
        <form onSubmit={handSubmit}>
            <img src={facebook} alt="User" className="w-[100px] h-[100px] mb-10" />
            <div className=" items-center flex flex-wrap sm:justify-start justify-center w-full relative">
                <div className="flex justify-start items-center mb-12 min-w-[0] sm:min-w-[450px]">
                    <img src={facebook} className="absolute ml-4 w-8" alt="Email icon"/>
                    <input className="border-none bg-black-gradient rounded-[50px] h-12 w-[95%] p-8 pl-14 text-white" type="email" name="email" id="email" onChange={e=>setEmail(e.target.value)} placeholder="Email address"/>
                    <input className="border-none bg-black-gradient rounded-[50px] h-12 w-[95%] p-8 pl-14 text-white" type="text" name="passwordResetPin" id="passwordResetPin" onChange={e=>setpasswordResetPin(e.target.value)} placeholder="Pin"/>
                    <input className="border-none bg-black-gradient rounded-[50px] h-12 w-[95%] p-8 pl-14 text-white" type="password" name="password" id="password" onChange={e=>setpassword(e.target.value)} placeholder="New Password"/>
                    <input className="border-none bg-black-gradient rounded-[50px] h-12 w-[95%] p-8 pl-14 text-white" type="password" name="password2" id="password2" onChange={e=>setpassword2(e.target.value)} placeholder="Confirm New Password"/>
                </div>
            </div>
            <button type="submit" style={{ cursor:"pointer" }} className={`${styles.paragraph} mt-4 text-[20px]  pt-4 pb-4 pl-8 pr-8 mb-8 font-poppins text-primary font-medium cursor-pointer items-start bg-blue-gradient rounded-[30px]`}>Send</button>
        </form>
        
      </center>
  </section>
    </center>
)
}

export default ResetCard;
