import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Adduserorder = () => {
    const [Email, setEmail] = useState('');
    const [Amount, setAmount] = useState('');
    const navigate = useNavigate();

    const saveUserorder = async (e) =>{
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/userorder',{
                Email,
                Amount,
            });
            navigate("/");
        } catch (error){
            console.log(error);
        }
    }

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <form onSubmit={saveUserorder}>
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

export default Adduserorder