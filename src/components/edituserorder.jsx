import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Edituserorder = () => {
    const [Email, setEmail] = useState('');
    const [Amount, setAmount] = useState('');

    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        getUserById();
    }, []);

    const updateUserorder = async (e) =>{
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/userorder/${id}`,{
                Email,
                Amount,
            });
            navigate('/');
        } catch (error){
            console.log(error);
        }
    }

    const getUserById = async () => {
        const response = await axios.get(`http://localhost:5000/userorder/${id}`);
        setEmail(response.data.Email);
        setAmount(response.data.Amount);
    }

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <form onSubmit={updateUserorder}>
                <div className="field">
                    <label  className="label"> Email</label>
                    <div className="control">
                        <input type="text" 
                        className="input" 
                        value = {Email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Email' 
                        />
                    </div>
                </div>
                <div className="field">
                    <label  className="label"> Amount</label>
                    <div className="control">
                        <input 
                        type="text" 
                        className="input" 
                        value = {Amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder='Top up Amount'
                        />
                    </div>
                </div>
                <div className="field">
                    <button type='submit' className="button is-success">Save</button>
                </div>
            </form>
        </div>

    </div>
  )
}

export default Edituserorder