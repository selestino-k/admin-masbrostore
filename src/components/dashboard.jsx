import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Dashboard = () => {
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
        <h3 class="title is-3">Dashboard</h3>
            <br />
            
        </div>
    </div>
  );
};

export default Dashboard;