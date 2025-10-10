export default function (){
    
    const usuarios = [
        {id: 1, nome: "João", email: "teste@gmail.com"},
        {id: 2, nome: "Pedro", email: "teste2@gmail.com"},
        {id: 3, nome: "Marcelo", email: "teste3@gmail.com"},
        {id: 4, nome: "José", email: "teste4@gmail.com"}

    ]
    
    const lista = usuarios.map(usuario => 
        <li id={usuario.id.toString()} key={usuario.id}>{usuario.nome}({usuario.email})</li>
    )

    return (
        <ul>
            {lista}
        </ul>
    )
}