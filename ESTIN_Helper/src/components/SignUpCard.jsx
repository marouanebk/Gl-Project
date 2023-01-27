import styles from "../style";
import {facebook} from "../assets/index.js";
import {Link} from "react-router-dom";
import "../index.css"
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import AuthContext, { register } from "../context/AuthContext";


const SignUpCard = () => {
    const [email,setEmail] = useState()
    const [username,setUsername] = useState()
    const [password,setPassword] = useState()
    const [password2,setPassword2] = useState()
    const [Nationality,setNationality] = useState()
    const [age,setAge] = useState()
    const [phone,setPhone] = useState()
    let {authTokens} = useContext(AuthContext)

    const handSubmit= (e) =>{
        e.preventDefault()
        if (password != password2) {
            alert("Passwords must match")
        }else{
            console.log(password)
            console.log(password2)
            username ? console.log(username) : console.log("field name is empty")
            let body = JSON.stringify({username,email, password, password2, Nationality, phone})
            console.log(body)
            register(username,email, password, password2, Nationality, phone)

        }
    }
    
    return(
        <center>
        <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} max-w-[700px] sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow `}>
             <center>
               <img src={facebook} alt="User" className="w-[70px] h-[70px] mb-10" />
                <form onSubmit={handSubmit}>
                <div className=" items-center flex flex-wrap sm:justify-start justify-center w-full relative">

                    
                    <div className="flex justify-start items-center mb-8 m-0">
                        <img src={facebook} className="absolute ml-4 w-8" alt="Name icon"/>
                        <input type="text" name="username" id="username" onChange={e=>setUsername(e.target.value)}  placeholder="Name"/>
                    </div>
                    <div className="flex justify-start items-center relative mb-8">
                        <img src={facebook} className="absolute ml-4 w-8" alt="Age icon"/>
                        <input type="text" name="age" id="age" onChange={e=>setAge(e.target.value)} placeholder="Age"/>
                    </div>
                    <div className="flex justify-start items-center mb-8 m-0">
                        <img src={facebook} className="absolute ml-4 w-8" alt="Email icon"/>
                        <input type="email" name="email" id="email" onChange={e=>setEmail(e.target.value)}  placeholder="Email address"/>
                    </div>
                    <div className="flex justify-start items-center mb-8 m-0">
                        <img src={facebook} className="absolute ml-4 w-8" alt="Phone number icon"/>
                        <input type="text" name="phone" id="phone" onChange={e=>setPhone(e.target.value)}  placeholder="Phone number"/>
                    </div>
                    <div className="flex justify-start items-center mb-8 m-0">
                        <img src={facebook} className="absolute ml-4 w-8" alt="Password icon"/>
                        <input type="password" name="password" id="password" onChange={e=>setPassword(e.target.value)}   placeholder="Password"/>
                    </div>
                    <div className="flex justify-start items-center mb-8 m-0">
                        <img src={facebook} className="absolute ml-4 w-8" alt="Country icon"/>
                        <input type="text" name="Nationality" id="Nationality" onChange={e=>setNationality(e.target.value)}  placeholder="Country"/>
                    </div>
                    <div className="flex justify-start items-center mb-12 m-0">
                        <img src={facebook} className="absolute ml-4 w-8" alt="Confirm password icon"/>
                        <input type="password" name="password2" id="password2" onChange={e=>setPassword2(e.target.value)}  placeholder="Confirm password"/>
                    </div>
                </div>
                
                <button type="submit" style={{ cursor:"pointer" }} className={`${styles.paragraph} mt-4 text-[20px]  pt-4 pb-4 pl-8 pr-8 mb-0 font-poppins text-primary font-medium cursor-pointer items-start bg-blue-gradient rounded-[30px]`}>Sign Up</button>
                </form>
                <center></center>
            <p className={`${styles.paragraph} mt-5 text-[20px] mb-5`}>
                Sign up with
            </p>
              <img src={facebook} alt="User" className="w-[45px] h-[45px] mb-10" style={{ cursor:"pointer" }}/>
                <Link style={{ cursor:"pointer" }} className={`${styles.paragraph} mt-1 text-[15px] mb-0`} to={'/Sign-in'}>
                    Already have an account
                </Link>
            </center>
        </section>
          </center>
    )
    }
;
export default SignUpCard;
