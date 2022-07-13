import React from 'react'
import { NavLink } from 'react-router-dom'
import { useGetOrdersQuery, useDeleteOrderMutation } from '../api/apiSlice';

const Orders = () => {
    let totalOrdersAmount = 0;
    const [deleteOrder] = useDeleteOrderMutation();
    const {
        data: orders,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetOrdersQuery();

    return (
        <div className='orders'>
            <h1 className='title'>Orders</h1>
            {isLoading && <p>Loading...</p>}
            <table>
                <thead>
                    <tr>
                        <th>Sıra sayı (S/S)</th>
                        <th>Masa</th>
                        <th>Xidmətçi</th>
                        <th>Status</th>
                        <th>Məbləğ</th>
                        <th>Sonlanma Tarixi</th>
                        {/* <th>Silmək</th> */}
                        <th>Ətraflı</th>
                    </tr>
                </thead>
                {isSuccess && <tbody>
                    {orders.map(order => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.tableNum}</td>
                            <td>{order.waiter}</td>
                            <td>{order.status}</td>
                            <td>{order.amount} {order.amount && 'AZN'}</td>
                            <td>{order.date}</td>
                            {/* <td><button onClick={() => deleteOrder({ id: order.id })}>Delete</button></td> */}
                            <td><NavLink className='link' to={`/order/${order.id}`}>Bax</NavLink></td>
                        </tr>
                    ))}
                </tbody>}
            </table>
            {isError && <p>{error}</p>}
            <div className="totalAmount">
                <div className='hide'>
                    {orders.map((order) => (
                        totalOrdersAmount += order.amount
                    ))}
                </div>
                <h1>Cəmi məbləğ: {totalOrdersAmount} AZN</h1>
            </div>
        </div>
    )
}

export default Orders