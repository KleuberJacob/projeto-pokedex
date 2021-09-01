import './Card.css'
import React from 'react'

export default function Card(props) {

    return(
        <section className="cardSobre">
            <div className="title">
                <h3>{props.nome}</h3>            
            </div>            
            
            <div className="type">
                <span>Tipo: </span>
                <span className={'tipo' + props.tipo}>{props.tipo}</span>                
            </div>  
            <span>#{props.id}</span>
            <div className="icon">
                <img id='imagem' src={props.img} alt={props.nome}></img>
            </div>
            <span>Peso: {props.peso}Kg</span>                                  
        </section>
    )
}