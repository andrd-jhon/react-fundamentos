'use client'
import "@/app/style.css"
import { useState } from "react"

export default function Page(){
    
    // let numero = 0

    let [numero, setNumero] = useState(0)

    function incrementar(){
        // numero += 1
        setNumero(numero + 1)
        console.log(numero)
    }

    function decrementar(){
        setNumero(numero - 1)
    }
    
    return (
        <div>
            <h1>Estados</h1>
            <button
                onClick={incrementar}
                className="bg-blue-600"
            >
                Clique aqui para incrementar
            </button>
             <button
                onClick={decrementar}
                className="bg-red-600"
            >
                Clique aqui para decrementar
            </button>

            <p>número: {numero}</p>
        </div>
    )
}