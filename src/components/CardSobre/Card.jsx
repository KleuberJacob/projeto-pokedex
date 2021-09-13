import './Card.css'
import React from 'react'

export default function Card(props) {

    return(
        <div className="Sobre">
            <div className="titulo">
                <h3>{props.nome}</h3>            
            </div>            
            
            <div className="conteudo">
                <div className="Type">
                    <span>Tipo: </span>
                    <span className={props.tipo}>{props.tipo}</span>                
                </div>  
                <span>#{props.id}</span>
                <div className="Icon">
                    <img id='imagem' src={props.img} alt={props.nome}></img>
                </div>
                <span>Peso: {props.peso}Kg</span>                                 

            </div>
        </div>
    )
}