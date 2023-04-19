import React, {useState, useEffect} from 'react';
import axios from 'axios'


const Gameslist = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        getGames();
    }, []);

    const getGames = async () => {
        const response = await axios.get("http://localhost:5000/games");
        setGames(response.data);
    }
    
  return (
    <>
        <div className="columns mt-5 is-centered">
            
        <div className="column is-full">

            <h1>List Games </h1>
            <br />

           



            <table className='table is-striped is-fullwidth'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Amount</th>
                        <th>Price</th>
                        <th>Game</th>
                    </tr>
                </thead>
                <tbody>
                    {games.map((games, index) => (
                         <tr key={games.id}>
                         <td>{index +1}</td>
                         <td>{games.Amount}</td>
                         <td>{games.Price}</td>
                         <td>{games.Game}</td>

                         
                     </tr>
                    ))}
                   
                    </tbody>
                </table>
            </div>
        </div>
    </>
  );
};

export default Gameslist;