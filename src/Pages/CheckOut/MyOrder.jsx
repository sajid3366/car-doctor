import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import CheckOutDetails from "./CheckOutDetails";

const MyOrder = () => {
    const { user } = useContext(AuthContext)
    const [orders, setOrders] = useState([])

    axios.get(`http://localhost:5000/checkout/${user.email}`, {withCredentials: true})
        .then(res => {

            setOrders(res.data);
        })
        .catch(err => {
            console.log(err);
        })

    return (
        <div>
            this is my order{orders.length}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <CheckOutDetails key={order._id} order={order}></CheckOutDetails>)
                        }
                    </tbody>


                </table>
            </div>

        </div>
    );
};

export default MyOrder;