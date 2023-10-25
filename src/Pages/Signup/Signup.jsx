import { useContext } from 'react';
import img from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Signup = () => {

    const {creatUser} = useContext(AuthContext)

    const handleSignup = e =>{
        e.preventDefault()
        console.log(e);
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const user = {
            name,email,password
        }

        console.log(user);

        creatUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error =>{
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
                    <h1 className="text-5xl font-bold text-center">Sign Up</h1>

                    <form onSubmit={handleSignup} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">SignUp</button>
                        </div>
                        <div>
                            
                        </div>
                        <p>Already have an account? <Link className='text-red-600' to="/login">Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;