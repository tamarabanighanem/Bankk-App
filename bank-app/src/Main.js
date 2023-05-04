import React, { useState } from 'react'
import '../src/Main.css'
import '../src/Card.css'

const Main = () => {
    const [accounts, setAccounts] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const newAccount = {
            id: accounts.length + 1,
            customerName: formData.get("customerName"),
            accountNumber: formData.get("accountNumber"),
            accountType: formData.get("accountType"),
        };
        console.log(newAccount);
        setAccounts([...accounts, newAccount]);
        event.target.reset();
    };

    const handleDelete = (id) => {
        const deleteAccount = accounts.filter((account) => account.id !== id)
        setAccounts(deleteAccount);


    }
    return (
        <>
            <div className="container w-50 mt-5">
                <div className="tab-content">
                    <div
                        className="tab-pane fade show active"
                        id="pills-login"
                        role="tabpanel"
                        aria-labelledby="tab-login"
                    >
                        <form onSubmit={handleSubmit}>
                            <label className="form-label" htmlFor="customerName">
                                Customer Name
                            </label>
                            <div className="form-outline mb-4">
                                <input
                                    type="text"
                                    id="customerName"
                                    className="form-control"
                                    name="customerName"
                                />
                            </div>

                            <label className="form-label" htmlFor="accountNumber">
                                Account Number
                            </label>
                            <div className="form-outline mb-4">
                                <input
                                    type="text"
                                    id="accountNumber"
                                    className="form-control"
                                    name="accountNumber"
                                />
                            </div>

                            <label className="form-label" htmlFor="accountNumber">
                                Account Type
                            </label>
                            <div className="form-outline mb-4">
                                <input
                                    type="text"
                                    id="accountType"
                                    className="form-control"
                                    name="accountType"
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-outline-info btn-lg mb-4 w-100"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="container">
                {accounts.map((account) => (
                    <div className="card w-25 p-3 d-inline-block m-2" key={account.id}>
                        <h2>{account.customerName}</h2>
                        <p>id: {account.id}</p>
                        <p>Customer Name: {account.customerName}</p>
                        <p>Account Number: {account.accountNumber}</p>
                        <p>Account Type: {account.accountType}</p>
                        <button className="btn btn-info w-25 " onClick={() => handleDelete(account.id)}>delete</button>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Main;

// function Main() {
//     const [userId, setUserId] = useState(1);
//     const [userName, setUserName] = useState('');
//     const [userAccountNumper, setUserAccountNumper] = useState('');
//     const [useraccountType, setUserAccountType] = useState('');

//     const handleSubmit = (event) => {
//         event.preventDefault();



//         // console.log(userId, userName, userAccountNumper, useraccountType)

//         let cards = {
//             count: count,
//             userName: userName,
//             userAccountNumper: userAccountNumper,
//             useraccountType: useraccountType
//         }


//         setArray([...array, cards])
//         setCount(count + 1)
//         console.log(array)

//     };

//     const [count, setCount] = useState(0);
//     const [array, setArray] = useState([])


//     return (
//         <div>

//             <form className="form" onSubmit={handleSubmit}
//             >
//                 <p className="title">Register </p>
//                 <div className="flex">
//                     <label>
//                         <input value={userName} onChange={(e) => setUserName(e.target.value)} required="" type="text" className="input" />
//                         <span>name</span>
//                     </label>
//                     <label>
//                         <input value={userAccountNumper} onChange={(e) => setUserAccountNumper(e.target.value)} required="" placeholder="" type="phone-Number" className="input" />
//                         <span>Account number</span>
//                     </label>
//                 </div>
//                 <label>

//                     <select
//                         setAccountType
//                         className="form-select"
//                         id="accountType"
//                         aria-label="Account Type"
//                         value={useraccountType} onChange={(e) => setUserAccountType(e.target.value)}
//                     >
//                         <option value="Savings">Savings</option>
//                         <option value="Student accounts">Student accounts</option>
//                         <option value="Business">Business</option>
//                         <option value="Charity">Charity</option>
//                     </select>
//                 </label>

//                 <button className="submit" type='submit'
//                 >Submit</button>

//             </form>


//             <div className="container">

//                 {

//                     array.map((account) => {

//                         let x = count;
//                         return (
//                             <div className="card">
//                                 <p>{count}</p>
//                                 <p>{account.userName}</p>
//                                 <p>{account.userAccountNumper}</p>
//                                 <p>{account.useraccountType}</p>
//                                 {/* <button id={count} >delete</button> */}
//                             </div>
//                         );
//                     })}



//             </div>



//             {/* <br />
//             <section>
//                 <div className='container'>
//                     <ul>


//                         <li>{userId + 1}</li>
//                         <li>{userName}</li>
//                         <li>{userAccountNumper}</li>
//                         <li>{useraccountType}</li>
//                     </ul>

//                 </div>
//             </section>

//             <br /> */}
//         </div>

//     )
// }






