import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Edituserorder = () => {
    const [Email, setEmail] = useState('');
    const [GameID,setGameID] = useState('');
    const [ZoneID,setZoneID] = useState('');
    const [Amount, setAmount] = useState('');
    const [values, setValues] = useState([]);
    const [Game,setGame] = useState('');

    const navigate = useNavigate();
    const {id} = useParams()

    useEffect(() => {
        getUserById();
    }, []);

    useEffect(() => {
        fetch("https://rich-teal-turkey-veil.cyclic.app/games").then((data)=>data.json()).then((val)=>setValues(val))
    }, []);

    const updateUserorder = async (e) =>{
        e.preventDefault();
        try {
            await axios.patch(`https://rich-teal-turkey-veil.cyclic.app/userorder/${id}`,{
                Email,
                GameID,
                ZoneID,
                Amount,
                Game,
            });
            navigate('/order');
        } catch (error){
            console.log(error);
        }
    }

    const getUserById = async () => {
        const response = await axios.get(`http://localhost:5000/userorder/${id}`);
        setEmail(response.data.Email);
        setAmount(response.data.Amount);
        setGameID(response.data.GameID);
        setZoneID(response.data.ZoneID);
        setGame(response.data.Game);

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
                <label  className="label"> Game ID</label>
                    <div className="control">
                        <input type="text" 
                        className="input" 
                        value = {GameID}
                        onChange={(e) => setGameID(e.target.value)}
                        placeholder='Game ID' 
                        />
                    </div>      
                </div>          
                <div className="field">
                <label  className="label"> Zone ID</label>
                    <div className="control">
                        <input type="text" 
                        className="input" 
                        value = {ZoneID}
                        onChange={(e) => setZoneID(e.target.value)}
                        placeholder='Zone ID' 
                        />
                    </div>
                </div>
                <div className="field">
                    <label  className="label">Select Amount</label>
                    <div className="control">
                         <div className="select is-link is-full">
                            <select value={Amount} onChange={(e)=>setAmount(e.target.value)}>
                                 <option value="" disabled selected hidden>Please Select...</option>

                                {
                                    values.map((opt)=>(
                                    <option value={opt.Amount}>{opt.Amount} - {opt.Game}- {opt.Price}</option>)
                                    )
                                }
                            </select>
                        </div>
                    </div>
                </div>
                <div className="field">
                    <label  className="label">Select Game</label>
                    <div className="control">
                         <div className="select is-link is-full">
                            <select value={Game} onChange={(e)=>setGame(e.target.value)}>
                                <option value="" disabled selected hidden>Please Select...</option>
                                 <option value="PUBGM">PUBGM</option>
                                 <option value="FF">FF</option>
                                 <option value="MLBB">MLBB</option>
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

export default Edituserorder