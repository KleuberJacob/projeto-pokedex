import './Sobre.css'
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import apiGetAllPokemons from '../../services/api'
import Card from '../../components/CardSobre/Card.jsx'

export default function Sobre(){
    
    const [dataPokemon, setDataPokemon] = useState()
    const [loading, setLoading] = useState(true)    

    const{ id } = useParams()

    const calc = parseFloat(2.20)
    
    async function getDataPokemon(){
        await apiGetAllPokemons.get(`${id}`)
        .then((response) => {
            setDataPokemon(response.data)
            setLoading(false);
        })
        .catch((error) => {
            console.error(error)
            setLoading(true)
        })        
    }            
        
    useEffect(() => {
        getDataPokemon()
    }, []) 

    return(

        <main className="body"> 

            <Link className="button" to="/">Voltar</Link> 

            { loading ? <p>Carregando Dados do Pokemon...</p> : (
                
                <Card 
                    nome={dataPokemon.name}
                    tipo={dataPokemon.types[0].type.name}              
                    id={dataPokemon.id} 
                    img={dataPokemon.sprites.front_default}
                    peso={(dataPokemon.weight / calc).toFixed(0)}> 
                </Card>                

            ) }                                                             
            
        </main>
    )
}