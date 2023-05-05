import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Addgames = () => {
 
    const [Amount,setAmount] = useState('');
    const [Price,setPrice] = useState('');
    const [Game,setGame] = useState('');

    const navigate = useNavigate();
    

    const saveGame = async (e) =>{
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/games',{
                Amount,
                Price,
                Game,
            });
            navigate("/games");
        } catch (error){
            console.log(error);
        }
    }

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <form onSubmit={saveGame}>
                <div className="field">
                    <label  className="label"> Amount</label>
                    <div className="control">
                        <input type="text" 
                        className="input" 
                        value = {Amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder='Top Up Amount' 
                        />
                    </div>
                </div>
                <div className="field">
                <label  className="label"> Price</label>
                    <div className="control">
                        <input type="text" 
                        className="input" 
                        value = {Price}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder='Top Up Price' 
                        />
                    </div>      
                </div>          
                <div className="field">
                <label  className="label"> Game</label>
                    <div className="control">
                        <input type="text" 
                        className="input" 
                        value = {Game}
                        onChange={(e) => setGame(e.target.value)}
                        placeholder='Game Name' 
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

export default Addgames