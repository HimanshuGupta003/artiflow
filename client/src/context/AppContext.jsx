import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const[user, setUser] = useState(null);
    const[showLogin, setShowLogin] = useState(false);
    const[token, setToken] = useState(localStorage.getItem('token'))

    const[credit, setCredit] = useState(false);
    const backend_URL = import.meta.env.VITE_BACKEND_URL

    const navigate = useNavigate()

    const loadCreditsData = async ()=> {
        try {
            const {data} = await axios.get(backend_URL + '/api/user/credits', {headers: {token}})

            if(data.success) {
                setCredit(data.credits)
                setUser(data.user)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    };
        const generateImage = async(prompt)=> {
            try {
                const {data} = await axios.post(backend_URL + '/api/image/generate-image', {prompt}, {headers: {token}})

                if(data.success) {
                    loadCreditsData()
                    return data.resultImage
                } else {
                    toast.error(error.message)
                }


            } catch (error) {
                toast.error('no credit left')
                    loadCreditsData()
                    navigate('/buy')
            }
        }
    

    const logout = ()=> {
        localStorage.removeItem('token');
        setToken('')
        setUser(null)
        navigate('/')
    }
    
    useEffect(()=> {
        if(token){
            loadCreditsData()
        }
    },[token])

    const value = {
        user, setUser, showLogin, setShowLogin,backend_URL, token, setToken, credit, setCredit, loadCreditsData, logout, generateImage
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider