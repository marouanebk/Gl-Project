import { createContext, useState, useEffect } from 'react'
import { Outlet } from 'react-router'
import jwt_decode from 'jwt-decode'
import { useNavigate } from 'react-router-dom';
import axios from 'redaxios';


const AuthContext = createContext()


export default AuthContext;


export const register = (username,email, password, password2, Nationality, phone) => {

    const config = {
        headers : {
            'Content-Type' : 'application/json',
        }
    };

    const body = JSON.stringify({username,email, password, password2, Nationality, phone})

    axios.post('http://127.0.0.1:8000/authApi/register/',body,config)
}

export const updateUser = (username, Nationality, phone) => {

    const config = {
        headers : {
            'Content-Type' : 'application/json',
        }
    };

    const body = JSON.stringify({username, Nationality, phone})
    let user = jwt_decode(localStorage.getItem('authTokens'))
    console.log(user.user_id)

    axios.put('http://127.0.0.1:8000/authApi/update/'+ user.user_id + '/',body,config)
}

export const resetPassword = (email) => {
    const config = {
        headers : {
            'Content-Type' : 'application/json',
        }
    };
    const body = JSON.stringify({email})
    axios.post('http://127.0.0.1:8000/authApi/forgot-password/'+email+'/',body,config)
}




export const AuthProvider = () => {

    // localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')): null
    console.log("provider is working")
    let [authTokens, setAuthtokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')): null)
    let [user, setUser] = useState(() => localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')): null)
    let [loading, setLoading] = useState(true)
    
    const history = useNavigate()

    // let register = async ()=> {
    //     fetch('http://127.0.0.1:8000/authApi/register/',{
    //         method : 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(user)
    //     },
    //     )
    // }

    


    let loginUser = async (e )  => {
        e.preventDefault()
        console.log('Form submitted')
        let response = await fetch('http://127.0.0.1:8000/authApi/token/', {
            method : 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify({'email':e.target.email.value, 'password':e.target.password.value})
        })
        let data = await response.json()
        console.log('data',jwt_decode(data.access))
        if (response.status == 200) {
            setAuthtokens(data)
            setUser(jwt_decode(data.access)) 
            localStorage .setItem('authTokens', JSON.stringify(data))  
            history('/Home')
        }else{
            alert('Something went wrong !')
        }
        
    }

    let updateToken = async() => {
        let response = await fetch('http://127.0.0.1:8000/authApi/token/refresh/', {
            method : 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify({'refresh':authTokens?.refresh})
        })
        let data = await response.json()
        if (response.status == 200) {
            setAuthtokens(data)
            setUser(jwt_decode(data.access)) 
            localStorage .setItem('authTokens', JSON.stringify(data))  
            console.log("token updated")
        }else{
            logoutUser()
        }
        if (loading) {
            setLoading(false)
        }

    }
    
    let logoutUser = () => {
        setAuthtokens = null
        setUser = null
        localStorage .removeItem('authTokens')
        history("/Sign-in")  
    }
    
    let contextData = {
        user:user,
        loginUser:loginUser,
        logoutUser:logoutUser,
        register:register,
    } 
    useEffect(
        ()=>{
            if (loading) {
                updateToken()
            }
            let fourMinutes = 1000 * 60 * 4
            let interval = setInterval(() => {
                if (authTokens) {
                    updateToken()
                }
            }, fourMinutes)
            return () => clearInterval()
        },[authTokens, loading]
    )

    return(
        <AuthContext.Provider value = {contextData}>
            {loading ? null : <Outlet/>}
        </AuthContext.Provider>
    )
}
