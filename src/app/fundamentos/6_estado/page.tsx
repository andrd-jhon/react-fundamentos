'use client'
import "@/app/style.css"

export default function Page(){
    
    let numero = 0

    function incrementar(){
        numero += 1
        console.log(numero)
    }
    
    return (
        <div>
            <h1>Estados</h1>
            <button
                onClick={incrementar}
                className="bg-blue-600"
            >
                Clique Aqui!
            </button>

            <p>número: {numero}</p>
        </div>
    )
}