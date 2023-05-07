import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Editgames = () => {
    const [Amount, setAmount] = useState('');
    const [Price,setPrice] = useState('');
    const [Game,setGame] = useState('');

    const navigate = useNavigate();
    const {id} = useParams()

    useEffect(() => {
        getGamesbyId();
    }, []);

    const updategames = async (e) =>{
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/games/${id}`,{
                Amount,
                Price,
                Game,
            });
            navigate('/');
        } catch (error){
            console.log(error);
        }
    }

    const getGamesbyId = async () => {
        const response = await axios.get(`http://localhost:5000/games/${id}`);
        setAmount(response.data.Amount);
        setGame(response.data.Game);
        setPrice(response.data.Price);
    }

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <form onSubmit={updategames}>
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
                        placeholder='Price' 
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

export default Editgames