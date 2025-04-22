import React from "react";

export const Tarjeta = ({nombre, telefono, comentario}) => {
 
    return(
        <>
        <div style={{padding: "20px" , border: "10px solid black"}}>
            <h2> Mis datos: </h2>
            <p>Nombre: {nombre}</p>
            <p>Telefono: {telefono}</p>
            <p>Comentario: {comentario} </p>
        </div>
        </>
    )
}