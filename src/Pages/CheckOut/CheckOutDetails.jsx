
const CheckOutDetails = ({ order }) => {
    const { date, email, name, price } = order;
    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                <div className="avatar">
                    <div className="rounded w-12 h-12">
                        <img src="" alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>

            </td>
            <td>
                {email}
            </td>
            <td>${price}</td>
            <td>{date}</td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default CheckOutDetails;