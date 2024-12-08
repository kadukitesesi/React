import { useState } from "react";

const guts = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmPxdco6prKEDTWaSht-tqYu-ZnHTvOf7y9g&s"
const tamanhoImagem = 150;
var valor = 2;




function Titulo({nome, paragrafo, cor}) {

    const[texto, setTexto] = useState("Um título do estado inicial") 
    const[inputText, setInputText] = useState("")

    function mudar() {
        setTexto(inputText)
    } 


    return (
   <div>
    <img width={tamanhoImagem} src= {guts} alt="Guts sorrindo"/>
     <h1 style={{backgroundColor: cor}}>{texto}</h1>
     <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value) }/>
     <button onClick={mudar}>Mudar</button>
    { paragrafo ? <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, mollitia. Atque veritatis 
        ipsa, iure enim voluptatibus minus velit sapiente, illo repellendus aut reiciendis sequi minima modi nostrum ratione necessitatibus beatae?</p> : <p>nada</p>}
   </div>
)
}

export default Titulo