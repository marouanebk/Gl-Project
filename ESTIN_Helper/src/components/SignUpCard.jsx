import styles from "../style";
import { email1, facebook, google, key, localisation, phone2, profile } from "../assets/index.js";
import { Link } from "react-router-dom";
import "../index.css"
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import axios from 'redaxios'




const SignUpCard = () => {
    const [email, setEmail] = useState()
    const [first_name, setFirstName] = useState()
    const [password, setPassword] = useState()
    const [password2, setPassword2] = useState()
    const [address, setAddress] = useState()
    const [last_name, setLastName] = useState()
    const [phone, setPhone] = useState()
    const username = "1234"


    const handSubmit = (e) => {
        e.preventDefault()
        if (password != password2) {
            alert("Passwords must match")
        } else {
            console.log(password)
            console.log(password2)
            email ? console.log(email) : alert("email is required")
            const register = (username, first_name, last_name, email, password, password2, address, phone) => {

                const config = {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                };

                const body = JSON.stringify({ username, first_name, last_name, email, password, password2, address, phone })

                console.log(body)

                axios.post('http://127.0.0.1:8000/authApi/register/', body, config)
                alert("user created")
            }
            register(username, first_name, last_name, email, password, password2, address, phone)

        }
    }

    return (
        <center>
            <form onSubmit={handSubmit}>

                <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} max-w-[750px] sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow `}>
                    <center>
                        <img src={profile} alt="User" className="w-[70px] h-[70px] mb-10" />
                        <div className=" items-center flex flex-wrap sm:justify-start justify-center w-full relative">
                            <div className="flex justify-start items-center mb-8 m-0">
                                <img src={profile} className="absolute ml-4 w-8" alt="Name icon" />
                                <input className="border-none bg-black-gradient rounded-[50px] h-12 w-[93%] p-8 pl-14 text-white" type="text" name="first_name" onChange={e => setFirstName(e.target.value)} id="first_name" placeholder="First Name" />
                            </div>
                            <div className="flex justify-start items-center relative mb-8">
                                <img src={profile} className="absolute ml-4 w-8" alt="Age icon" />
                                <input className="border-none bg-black-gradient rounded-[50px] h-12 w-[93%] p-8 pl-14 text-white" type="text" name="last_name" id="last_name" onChange={e => setLastName(e.target.value)} placeholder="Last Name" />
                            </div>
                            <div className="flex justify-start items-center mb-8 m-0">
                                <img src={email1} className="absolute ml-4 w-8" alt="Email icon" />
                                <input className="border-none bg-black-gradient rounded-[50px] h-12 w-[93%] p-8 pl-14 text-white" type="email" name="email" id="email" onChange={e => setEmail(e.target.value)} placeholder="Email address" />
                            </div>
                            <div className="flex justify-start items-center mb-8 m-0">
                                <img src={phone2} className="absolute ml-4 w-8" alt="Phone number icon" />
                                <input className="border-none bg-black-gradient rounded-[50px] h-12 w-[93%] p-8 pl-14 text-white" type="text" name="phone" id="phone" onChange={e => setPhone(e.target.value)} placeholder="Phone number" />
                            </div>
                            <div className="flex justify-start items-center mb-8 m-0">
                                <img src={key} className="absolute ml-4 w-8" alt="Password icon" />
                                <input className="border-none bg-black-gradient rounded-[50px] h-12 w-[93%] p-8 pl-14 text-white" type="password" name="password" id="password" onChange={e => setPassword(e.target.value)} placeholder="Password" />
                            </div>
                            <div className="flex justify-start items-center mb-8 m-0">
                                <img src={localisation} className="absolute ml-4 w-8" alt="Country icon" />
                                <input className="border-none bg-black-gradient rounded-[50px] h-12 w-[93%] p-8 pl-14 text-white" type="text" name="address" id="address" onChange={e => setAddress(e.target.value)} placeholder="Address" />
                            </div>
                            <div className="flex justify-start items-center mb-12 m-0">
                                <img src={key} className="absolute ml-4 w-8" alt="Confirm password icon" />
                                <input className="border-none bg-black-gradient rounded-[50px] h-12 w-[93%] p-8 pl-14 text-white" type="password" name="password2" id="password2" onChange={e => setPassword2(e.target.value)} placeholder="Confirm password" />
                            </div>

                        </div>
                        <center>
                            <button type="submit" style={{ cursor: "pointer" }} className={`${styles.paragraph} mt-4 text-[20px]  pt-4 pb-4 pl-8 pr-8 mb-0 font-poppins text-primary font-medium cursor-pointer items-start bg-blue-gradient rounded-[30px]`}> Sign up </button>
                        </center>
                        <p className={`${styles.paragraph} mt-5 text-[20px] mb-5`}>
                            Sign up with
                        </p>
                        <img src={google} alt="User" className="w-[45px] h-[45px] mb-10" style={{ cursor: "pointer" }} />
                        <Link style={{ cursor: "pointer" }} className={`${styles.paragraph} mt-1 text-[15px] mb-0`} to={'/Sign-in'}>
                            Already have an account
                        </Link>
                    </center>
                </section>
            </form>

        </center>
    )
}
    ;
export default SignUpCard;
