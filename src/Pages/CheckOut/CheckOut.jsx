import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";

const CheckOut = () => {
    const { user } = useContext(AuthContext)
    console.log(user);
    const services = useLoaderData();
    const { title, price } = services;

    // const notify = () => {
    //     toast('🦄 Wow so easy!', {
    //         position: "top-right",
    //         autoClose: 5000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //         theme: "light",
    //     });
    // }

    const handleCheckOut = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const date = form.date.value;
        const price = form.price.value;

        const checkOut = { name, email, date, price }
        console.log(checkOut);
        axios.post('http://localhost:5000/checkout', checkOut)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    // notify();
                    // <ToastContainer
                    //     position="top-right"
                    //     autoClose={5000}
                    //     hideProgressBar={false}
                    //     newestOnTop={false}
                    //     closeOnClick
                    //     rtl={false}
                    //     pauseOnFocusLoss
                    //     draggable
                    //     pauseOnHover
                    //     theme="light"
                    // />
                    // {/* Same as */ }
                    // <ToastContainer />

                    Swal.fire({
                        title: 'Success!',
                        text: 'Ckecked Out',
                        icon: 'success',
                        confirmButtonText: 'OK'
                      })
                }
            })
            .catch(err => {
                console.log(err);
            })

    }

    return (
        <div className="text-center ">
            <h1 className="text-3xl font-bold">Checkout: {title}</h1>
            <form onSubmit={handleCheckOut} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Service Name</span>
                    </label>
                    <input type="text" name='name' defaultValue={title} placeholder="name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' defaultValue={user.email} placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Date</span>
                    </label>
                    <input type="date" name='date' className="input input-bordered" required />

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" name='price' defaultValue={price} placeholder="Price" className="input input-bordered" required />

                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-warning">Checkout</button>
                </div>
                <div>

                </div>
            </form>
        </div>
    );
};

export default CheckOut;