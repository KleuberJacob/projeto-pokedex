import './Card.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Card(props) {
    return(
        <section className="card">
            <div className="title">
                <h3>{props.nome}</h3>
            </div>
            <span>Tipo: {props.tipo}</span>
            <span>#{props.id}</span>
            <div className="icon">
                <img src={props.img} alt={props.nome}></img>
            </div>
            <span>Peso: {props.peso}Kg</span>
            <Link className="btn" to={`/sobre/${props.id}`} >Informações</Link>            
        </section>
    )
}