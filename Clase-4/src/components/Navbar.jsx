import React from "react";
import { NavElements } from "./NavElements";

export const Navbar = () => {

    return (
        
        <nav>
            <ul style={{display: "flex", listStyle: "none", gap: "10px"}}>
                <NavElements elemento = {"Home"} url = {"/"}/>
                <NavElements elemento={"Producto"} url={"/producto"}/>
                <NavElements elemento={"Contacto"} url={"/contacto"}/>
                
            </ul>

        </nav>
        
    )}