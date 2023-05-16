import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

const Gameslist = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        getGames();
    }, []);

    const getGames = async () => {
        const response = await axios.get("https://rich-teal-turkey-veil.cyclic.app/games");
        setGames(response.data);
    }
    const deleteGame = async (id) =>{
        try {
            await axios.delete(`https://rich-teal-turkey-veil.cyclic.app/games/${id}`);
            getGames();
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div>
        <div className="columns mt-5 is-centered">
            <div className="column is-full">
            <h3 class="title is-3">Games List</h3>
                <br />
                <Link to={`addgame`} className='button is-success'>Add Game</Link>
                <br />
                <br />
                <table className='table is-striped is-fullwidth'>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Amount</th>
                            <th>Price</th>
                            <th>Game</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {games.map((games, index) => (
                            <tr key={games.id}>
                            <td>{index +1}</td>
                            <td>{games.Amount}</td>
                            <td>{games.Price}</td>
                            <td>{games.Game}</td>
                            <td>
                                <Link to={`editgame/${games.id}`} className='button is-small is-info'>Edit</Link>
                                <button onClick={()=> deleteGame(games.id)} className='button is-small is-danger'>Delete</button>
                            </td>
                        </tr>
                        ))}  
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  );
};

export default Gameslist;