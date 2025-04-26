import React from "react";

export const NavElements = ({elemento, url}) => {


    return(
        <>
        <li>
            <a href={url}> {elemento}</a>
        </li>
        
        
        </>
    )
}