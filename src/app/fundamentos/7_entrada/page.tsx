'use client'
import { useState } from "react"

export default function Entrada(){

    const [valor, setValor] = useState('')

    function atualizaValor(e: any){
        console.log(e)
        setValor(e.target.value)
    }

    return (
        <div className="p-2">
            <h1>Entrada de Dados</h1>
            <input 
                className="campo-texto"
                type="text" 
                placeholder="texto" 
                value={valor}
                onChange={atualizaValor}
            />
        </div>
    )
}