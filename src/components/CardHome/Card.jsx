import './Card.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Card(props) {
    return(
        <Link to={`/sobre/${props.id}`}>
            <div className="Card">
                <div className="Title">
                    <h3>{props.nome}</h3>
                </div>
                <div className="Content">
                    <span>Tipo: {props.tipo}</span>
                    <span>#{props.id}</span>
                    <div className="icon">
                        <img src={props.img} alt={props.nome}></img>
                    </div>
                    <span>Peso: {props.peso}Kg</span>
                </div>
            </div>
        </Link>        
    )
}