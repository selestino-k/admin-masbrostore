import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const UserorderList = () => {
    const [userorder, setUser] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);
    

    const getUsers = async () => {
        const response = await axios.get("http://localhost:5000/userorder");
        setUser(response.data);
    }
    const deleteUser = async (id) =>{
        try {
            await axios.delete(`http://localhost:5000/userorder/${id}`);
            getUsers();
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-full">
        <h3 class="title is-3">User Order List</h3>
            <br />
            <Link to={`addorder`} className='button is-success'>Add User Order</Link>
            <br />
            <br />
            <table className='table is-striped is-fullwidth'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Email</th>
                        <th>Game ID</th>
                        <th>Zone ID</th>
                        <th>Amount</th>
                        <th>Game</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {userorder.map((userorder, index) => (
                         <tr key={userorder.id}>
                         <td>{index +1}</td>
                         <td>{userorder.Email}</td>
                         <td>{userorder.GameID}</td>
                         <td>{userorder.ZoneID}</td>
                         <td>{userorder.Amount}</td>
                         <td>{userorder.Game}</td>
                         <td>
                            <Link to={`editorder/${userorder.id}`} className='button is-small is-info'>Edit</Link>
                            <button onClick={()=> deleteUser(userorder.id)} className='button is-small is-danger'>Delete</button>
                         </td>
                     </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  );
};

export default UserorderList;