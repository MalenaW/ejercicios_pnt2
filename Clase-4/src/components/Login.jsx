import React, { useState } from "react";


export const Login = () => {
    const[user,setUser] = useState("");
    const[password,setPassword] = useState("");

    const validar = () => {
        const usuario = "malena";
        const contrasenia = "29112002";

        if (usuario === user && contrasenia === password) {
            alert("Ingresaste a la página")
        }else{
            alert("Usuario y contraseña incorrecta")
        }
        setUser("");
        setPassword("");

    }
    return(
        <>
        <input type="text" onChange={(evento) => {setUser(evento.target.value)}} />
        <input type="password" onChange={(e) => {setPassword(e.target.value)}} />
        <button style={{backgroundColor: "blue", color: "white"}} onClick={validar}>Login</button>
        </>
    )
}
