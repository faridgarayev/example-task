import React, { useState } from 'react'
import { useAddOrderMutation, useGetOrdersQuery } from '../api/apiSlice';
let totalCount = 0;

const CreateOrder = () => {
    const [addOrder] = useAddOrderMutation();
    const { data: orders } = useGetOrdersQuery();
    const [showList, setShowList] = useState(false);
    const [state, setState] = useState({
        tableNum: '',
        waiter: '',
        status: 'continue',
        food: 'donerEt',
        foodArr: [],
        count: 0,
        amount: 0,
        date: ''
    });

    const handle = e => {
        setState({ ...state, [e.target.name]: e.target.value });
    };
    const createNewOrder = (e) => {
        e.preventDefault();
        addOrder({
            id: orders.length + 1,
            tableNum: state.tableNum,
            waiter: state.waiter,
            foodArr: state.foodArr,
            count: totalCount,
            amount: totalCount * 3,
            status: state.status,
            date: state.date
        });
        totalCount = 0;
    };


    const addFoodHandler = () => {
        const foodObj = {
            id: state.foodArr.length + 1,
            name: state.food,
            count: state.count,
            amount: state.count * 3,
            date: new Date().toLocaleTimeString()
        };
        totalCount += parseInt(foodObj.count);
        state.foodArr.push(foodObj);
    }

    return (
        <div className='createOrder'>
            <div className="openList">
                <h1 className='title'>Create a new order</h1>
                <div className="dblock">
                    <div className="input-group">
                        <label>Table Number</label>
                        <input
                            type="text"
                            name='tableNum'
                            onChange={handle}
                            value={state.tableNum}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label>Waiter Name</label>
                        <input
                            type="text"
                            name='waiter'
                            onChange={handle}
                            value={state.waiter}
                            required
                        />
                    </div>
                </div>

                <div className="select-group">
                    <select onChange={handle} value={state.status || ''} name='status'>
                        <option value="continue">Sonlanmayib</option>
                        <option value="finished">Sonlanib</option>
                        <option value="cancel">Legv edilib</option>
                    </select>
                </div>

                <div className="input-group">
                    <label>Date</label>
                    <input
                        type="date"
                        name='date'
                        onChange={handle}
                        value={state.date}
                        required
                    />
                </div>
                <button className='openBtn' onClick={() => setShowList(true)}>Open List</button>
            </div>

            {showList && <div>
                <h1 className='title'>Aşağıdaki listdən seçiminizi edin</h1>
                <label className='label'>Məhsul adı</label> <br />
                <div className="select-group">
                    <select onChange={handle} value={state.food || ''} name='food'>
                        <option value="donerEt">Çörəkdə ət dönər</option>
                        <option value="donerToyuq">Çörəkdə toyuq dönər</option>
                        <option value="kotletEt">Ət kotlet</option>
                        <option value="kotletToyuq">Toyuq kotlet</option>
                    </select>
                </div>
                <label className='label'>Miqdar</label>

                <div className="input-group">
                    <input
                        type="number"
                        name='count'
                        onChange={handle}
                        value={state.count}
                        required
                    />
                </div>
                <div className='createButtons'>
                    <button onClick={addFoodHandler} className='createBtn addBtn'>Add a order</button> <br />
                    <form onSubmit={createNewOrder}>
                        <button className='createBtn'>Create A New Order</button>
                    </form>
                </div>

            </div>}
        </div>
    )
}

export default CreateOrder