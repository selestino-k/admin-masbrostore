import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Adduserorder = () => {
    const [Email, setEmail] = useState('');
    const [values, setValues] = useState([]);
    const [setOptions] = useState([]);
    const [Amount] = useState(setOptions);


    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:5000/games").then((data)=>data.json()).then((val)=>setValues(val))
    }, []);
    console.log(values,"values : ")

    const saveUserorder = async (e) =>{
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/userorder',{
                Email,
                Amount,
            });
            navigate("/order");
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
                         <div className="select is-link is-full">
                            <select>
                                {
                                    values.map((opt,i)=>(
                                    <option>{opt.Amount}</option>)
                                    )
                                }
                            </select>
                        </div>
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