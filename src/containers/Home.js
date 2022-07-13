import React from 'react'
import { useGetOrdersQuery } from '../api/apiSlice';

const Home = () => {
    const { data: orders } = useGetOrdersQuery();
    let totalAmount = 0;
    console.log(orders);
    return (
        <div className='home'>
            <h1 className='title'>Title</h1>
            <p className='home__desription'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos adipisci
                distinctio nostrum rem, ab ad, dolorum sunt consectetur accusamus provident
                quia porro impedit omnis? A quisquam obcaecati dolorum nobis?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos adipisci
                distinctio nostrum rem, ab ad, dolorum sunt consectetur accusamus provident
                quia porro impedit omnis? A quisquam obcaecati dolorum nobis?
            </p>
            <div className="about">
                <div className="about__left">
                    <h3>Sifariş sayı</h3>
                    <p>{orders.length}</p>
                </div>
                <div className="about__center">
                    <h3>Sonlandırılan sifarişlərin sayı</h3>
                    <p>{orders.length}</p>
                </div>
                <div className="about__right">
                    <h3>Cəmi gəlir</h3>
                    <div className='hide'>
                        {orders.map((data) => (
                            totalAmount += data.amount
                        ))}
                    </div>
                    <p>{totalAmount} AZN</p>
                </div>
            </div>
        </div>
    )
}

export default Home
