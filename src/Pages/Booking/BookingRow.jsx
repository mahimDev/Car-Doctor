
const BookingRow = ({ booking, handleDelete, handleBookingConfirm }) => {
    const { _id, email, price, img, customer, service, status } = booking;


    return (
        <div>
            {/* row 1 */}
            <tr>
                <th>
                    <button onClick={() => handleDelete(_id)} className="btn btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="rounded w-12 h-12">
                                {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{customer}</div>
                            <div className="text-sm opacity-50">{email}</div>
                        </div>
                    </div>
                </td>
                <td>
                    {service}

                </td>
                <td>{price}</td>
                <th>
                    {status === 'confirm' ?
                        <span className="text-lg font-bold text-red-500 ">Confirm</span>
                        :
                        <button onClick={() => handleBookingConfirm(_id)} className="btn btn-ghost btn-xs">Confirm</button>
                    }
                </th>
            </tr>
        </div>
    );
};

export default BookingRow;