import React, {useState} from 'react'
import { Tarjeta } from './Tarjeta';


export const Formulario = ({titulo, size}) => {
    const [nombre, setNombre] = useState("");
    const [telefono, setTelefono] = useState(0);
    const [comentario, setComentario] = useState("No colocaste ningun comentario");
    const [click, setClick] = useState(false);
    function mostrarTarjeta() {
        setClick(!click)
    }

    return (
        <>
           <h2 style={{fontSize: size}}>{titulo}</h2>
          <div style={{padding: "10px"}}><label htmlFor="Nombre">Nombre:</label> <input type="text" placeholder='Ingrese su nombre' name='Nombre' value={nombre} onChange={(e)=>{ setNombre(e.target.value)}}/></div>
          <div style={{padding: "10px"}}><label htmlFor="Telefono">Telefono:</label> <input type="tel" placeholder='Ingrese su teléfono' name='Telefono' value={telefono}  onChange={(e)=>{ setTelefono(e.target.value)}}/> </div>
          <div  style={{padding: "10px"}}><label htmlFor="comentario">Comentario</label><textarea name="comentario" id="comentario" value={comentario} onChange={(e)=>{ setComentario(e.target.value)}}></textarea> </div>
          <button onClick={mostrarTarjeta}>{click?"Ocultar Tarjeta": "Generar tarjeta"}</button>
          {click && <Tarjeta nombre= {nombre} telefono= {telefono} comentario= {comentario} />}
        </>
  
    )
}