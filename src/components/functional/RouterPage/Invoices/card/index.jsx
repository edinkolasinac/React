import React from 'react'
import { useNavigate } from 'react-router-dom';

const InvoicesCard = () => {
    const InvoicesArray = [
        {
            id: "1",
            price: "500 usd",
            from: "USA",
            to: "Mexico",
            date: "22-08-2022"
        },
        {
            id: "2",
            price: "1500 usd",
            from: "Serbia",
            to: "Fiji",
            date: "21-08-2022"
        },
        {
            id: "3",
            price: "200 usd",
            from: "USA",
            to: "Germany",
            date: "22-08-2022"
        },
        {
            id: "4",
            price: "50 usd",
            from: "USA",
            to: "Mexico",
            date: "02-09-2022"
        }
    ]

    const navigation = useNavigate();

    const navigateToUser = (user) => {
        navigation("/invoices/:invoiceId", { state: user });
    };

    return (
        <div style={{ display: "flex" }}>
            {InvoicesArray.map((el) => {
                return <div key={el.id} style={{ border: "1px black solid", padding: "10px" }}>
                    <h2>{el.price}</h2>
                    <h4>From: {el.from}</h4>
                    <h4>To: {el.to}</h4>
                    <p>date: {el.date}</p>
                    <button onClick={() => navigateToUser(el)}>See more</button>
                </div>
            })}
        </div>
    )
}

export default InvoicesCard;