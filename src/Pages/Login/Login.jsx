import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import axios from 'axios';


const Login = () => {

    const { logIn,googleLogin, facebookLogin } = useContext(AuthContext)
    const handleLogin = e => {
        e.preventDefault()
        console.log(e);
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const user = {
            email, password
        }

        console.log(user);
        logIn(email,password)
        .then(result =>{
            console.log(result.user);
            // const user = {email};
            // axios.post('http://localhost:5000/jwt', user, {withCredentials: true})
            // .then(res =>{
            //     console.log(res.data);
            // })
        })
        .catch(error =>{
            console.log(error);
        })
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleFacebookLogin = () => {
        facebookLogin()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200 my-12">
            <div className="hero-content flex-col lg:flex-row gap-12">
                <div className="text-center lg:text-left">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 p-5  w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold text-center">Login now!</h1>

                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                            
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p className='text-center mt-3'>Or Login with</p>
                        <div className='flex justify-center mt-2 mb-2 text-3xl gap-5'>

                            <FcGoogle onClick={handleGoogleLogin} className='cursor-pointer'></FcGoogle>
                            <FaFacebook onClick={handleFacebookLogin} className='cursor-pointer'></FaFacebook>
                            {/* FcGoogle */}
                        </div>
                        <div className='text-center'>

                            <p >Don't have an account? <Link className='text-red-600' to="/signup">Sign Up</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;