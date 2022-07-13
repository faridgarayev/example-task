import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleOrder = () => {
    let totalAmount = 0;
    const { id } = useParams();
    const [datas, setDatas] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`http://localhost:8000/orders/${id}`)
            setDatas(response.data.foodArr);
        }
        fetchData();
    }, [])
    return (
        <div className='singleOrder'>
            <h1>Masa nömrəsi: {id}</h1>
            <table>
                <thead>
                    <tr>
                        <th>Say</th>
                        <th>Məhsul adı</th>
                        <th>Miqdar</th>
                        <th>Məbləğ</th>
                        <th>Sifaris tarixi</th>
                    </tr>
                </thead>
                <tbody>
                    {datas.map(data => (
                        <tr key={data.id}>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.count}</td>
                            <td>{data.amount} {data.amount && 'AZN'}</td>
                            <td>{data.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <div className='hide'>
                    {datas.map((data) => (
                        totalAmount += data.amount
                    ))}
                </div>
                <h1>Cəmi məbləğ: {totalAmount} AZN</h1>
            </div>
        </div>
    )
}

export default SingleOrder
