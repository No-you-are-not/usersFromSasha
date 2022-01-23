import {useEffect, useState} from "react";

export function User(data){
    const GREEN = 'https://upload.wikimedia.org/wikipedia/commons/1/11/Pan_Green_Circle.png';
    const RED = 'https://upload.wikimedia.org/wikipedia/commons/8/8b/Red_Circle_full.png';
    const YELLOW = 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Yellow_Circle-sm.png';
    const img = data.data.status === 'active' ?  <img className='status__img' src={GREEN}/> :
        data.data.status === 'passive' ?  <img className='status__img' src={RED}/> :
            <img className='status__img' src={YELLOW}/>;

    const [transactions, setTransactions] = useState([]);
    console.log( transactions);
    useEffect(() => {
        fetch(`https://user-transaction-fetch-api.herokuapp.com/transaction/user/${data.data.id+1}`)
            .then(response => {return response.json()})
            .then(data => setTransactions(data))
    }, [])

    return (
        <div className='user'>
            <h1 className='user__name'>{data.data.name}</h1>
            <div>Status: {img}</div>
            <button className='user__btn'>See transactions</button>
        </div>
    )
};