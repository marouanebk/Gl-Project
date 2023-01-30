import { details, edit, email, localisation, people, school, work } from "../assets/index.js";
import "../index.css"
import React, {useState} from "react";
import styles from "../style.js";
import UserInformationCard from "./UserInformationCard.jsx";
import { useContext } from "react";
import AuthContext from "../context/AuthContext.jsx";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";



function ProfileCard () {
    // const navigate = useNavigate()
    // const handleSubmit = event => {
    //     event.preventDefault();
    
    //     // 👇️ redirect to /contacts
    //     navigate('/Sign-in');
    //   };
    let {user} = useContext(AuthContext)
    let profile_pic = "http://127.0.0.1:8000"+user.profile_picture
    let cover_pic = "http://127.0.0.1:8000"+user.cover_picture
    // let {logoutUser} = useContext(AuthContext)
    const [showUserInformationCard, setShowUserInformationCard] = useState(false);
    const handleOnClose = ()=>setShowUserInformationCard(false)
    return(
        <center>
        <div className="bg-black-gradient rounded-3xl flex flex-col relative gap-4 m-4 overflow-x-clip font-poppins text-white font-medium z-40">
            <center>
                <div className="relative flex flex-col items-center justify-center">
                    <img className="w-full" src={cover_pic} alt="" />
                    <img className="w-24 rounded-full absolute -bottom-12" src={profile_pic} alt="" />
                </div>
                <div className="flex flex-col items-center mt-8 gap-3 ">
                    <br />
                    <span>{user.first_name} {user.last_name}</span>
                    <br />
                </div>
                <div className="flex justify-start items-center relative mb-6">
                    <img src={email} className="absolute ml-4 w-7" alt="Location icon" />
                    <span className="pl-12">{user.email}</span>
                </div>
                <div className="flex justify-start items-center relative mb-6">
                    <img src={localisation} className="absolute ml-4 w-7" alt="Location icon" />
                    <span className="pl-12">{user.address}</span>
                </div>
                <div className="flex justify-start items-center relative mb-6">
                    <img src={work} className="absolute ml-4 w-7" alt="Location icon" />
                    <span className="pl-12">{user.work} </span>
                </div>
                <div className="flex flex-row justify-center">
                    <Link className="cursor-pointer mb-8 p-6" to={'/User'}>
                        <img src={details} className="w-8" alt="details icon" />
                        details
                    </Link>
                    <button className="mb-8 cursor-pointer p-6" onClick={() => setShowUserInformationCard(true)}>
                        <img src={edit} className="w-8" alt="edit icon" />
                        edit
                    </button>
                    <UserInformationCard onClose={handleOnClose} visible={showUserInformationCard} />
                </div>
            </center>
        </div>
    </center>
    )
}

export default ProfileCard;



// function ProfileCard () {
//     const navigate = useNavigate()
//     const handleSubmit = event => {
//         event.preventDefault();
    
//         // 👇️ redirect to /contacts
//         navigate('/Sign-in');
//       };
//     let {user} = useContext(AuthContext)
//     let {logoutUser} = useContext(AuthContext)
//     const [showUserInformationCard, setShowUserInformationCard] = useState(false);
//     const handleOnClose = ()=>setShowUserInformationCard(false)
//     return(
//     <center>
//         <div className="bg-black-gradient rounded-3xl flex flex-col relative gap-4 m-4 overflow-x-clip font-poppins text-white font-medium z-40">
//             <center>
//                   <div className="relative flex flex-col items-center justify-center">
//                       <img className="w-full" src={school} alt="" />
//                       <img className="w-24 rounded-full absolute -bottom-12" src={people} alt="" />
//                   </div>
                  
//                   <div className="flex flex-col items-center mt-8 gap-3 ">
//                       <br/>
//                       {user && 
                      
//                       <span>{user.username}</span>
//                      }                      <br/>
//                   </div>
//                 <div className="flex justify-start items-center relative mb-6">
//                     <img src={email} className="absolute ml-4 w-7" alt="Location icon"/>
//                     <span className="pl-12">a_djemaa@estin.dz</span>
//                 </div>
//                 <div className="flex justify-start items-center relative mb-6">
//                     <img src={localisation} className="absolute ml-4 w-7" alt="Location icon"/>
//                     <span className="pl-12">Zighoud youcef Constantine</span>
//                 </div>
//                 <div className="flex justify-start items-center relative mb-6">
//                     <img src={work} className="absolute ml-4 w-7" alt="Location icon"/>
//                     <span className="pl-12">Front-end developer </span>
//                 </div>
//                 <button style={{ cursor:"pointer" }} className={`${styles.paragraph} mt-4 text-[20px]  pt-3 pb-3 pl-7 pr-7 mb-8 cursor-pointer items-start bg-blue-gradient rounded-[30px]`} onClick={()=>setShowUserInformationCard(true)}>
//                     Profile
//                 </button>
//                 <br />
                
//                     <button onClick={logoutUser} style={{ cursor:"pointer" }} className={`${styles.paragraph} mt-4 text-[20px]  pt-3 pb-3 pl-7 pr-7 mb-8 cursor-pointer items-start bg-blue-gradient rounded-[30px]`} >
//                         logout
//                     </button>
            
//                 <UserInformationCard onClose={handleOnClose} visible={showUserInformationCard}/>
//             </center>
//         </div>
//     </center>
//     )
// }
