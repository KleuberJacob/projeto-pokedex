import './Home.css'
import React, { useEffect, useState } from 'react';
import apiGetAllPokemons from '../../services/api'

import Card from '../../components/CardHome/Card.jsx'

export default function Home(props) {
    
    const [loading, setLoading] = useState(true);
    const [pokemon, setPokemon] = useState([]);
    const calc = parseFloat(2.20)

    async function loadPokemons(){
        for(let i = 1; i <= 151; i++){
            await apiGetAllPokemons.get(`${i}`)
            .then((response) => {
                setPokemon(prevArray => [...prevArray, response.data])
                     setLoading(false);
            })
            .catch(error => {
                console.error(error)
                setLoading(true)
            })            
        }
    }

    useEffect(() => {
        loadPokemons()        
    }, [])

    return(
            <div className="main">
                { loading ? <p>Carregando Pokedex...</p> : (

                <div className="card-container">
                    {pokemon.map((pokemon, index) => (                            
                            <Card key={index} 
                                  nome={pokemon.name} 
                                  tipo={pokemon.types[0].type.name} 
                                  id={pokemon.id} 
                                  img={pokemon.sprites.front_default}
                                  peso={(pokemon.weight / calc).toFixed(0)}>                                                                                     
                            </Card>                            
                        ))}                      
                    
                </div>

                ) }
            </div>
    ) 
}