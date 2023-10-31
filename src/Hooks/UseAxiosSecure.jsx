import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";


const axiosSecure = axios.create({
    baseURL: 'https://car-doctor-server-jet-sigma.vercel.app',
    withCredentials: true
})

const UseAxiosSecure = () => {

    const { logOut } = useContext(AuthContext)
    const navigate = useNavigate();

    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res;
        }, error => {
            console.log("error from custom hook", error.response);
            if (error.response.status == 401 || error.response.status === 403) {
                console.log("logout");
                logOut()
                    .then(() => {
                        // console.log(res);
                        navigate("/login")
                    })
                    .catch(error => {
                        console.log(error);
                    })
            }
        })
    }, [logOut, navigate])
    return axiosSecure;
};

export default UseAxiosSecure;