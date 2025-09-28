
export default function Pagina(){
    const regra = <h1>Maior de idade</h1>
    const nome = "João"
    
    let lista = ["Bruno", "Amanda", "Julia"]

    const salario = 1000
    let desc = 200

    const usuario = {
        nome: "Jamilton",
        idade: 30,
        altura: 1.70
    }


    function BotaoTeste (){
        return (
            <input type="button" value={"Clique aqui!"}/>
        )
    }

    return (
      <div className={nome}>
        Fala aí {nome}

        <div>Boa noite {lista[1]}</div> {/*é possivel passar indices de uma lista dentro do codigo*/}

        <div>{10 + 10}</div> {/*é possivel realizar calculos diretos*/}

        <div>{salario - desc}</div> {/*é possivel realizar calculos com variaveis e constantes*/}

        <div>
            <ul>
                <li>O nome do usuário é {usuario.nome}</li>
                <li>A idade do usuário é {usuario.idade}</li>
                <li>A altura do usuário é {usuario.altura}</li>
            </ul>    
        </div> {/*é possível acessar valores de objetos*/}
        
        {BotaoTeste()} {/*é possível passar um componente*/}

      </div>
    );
}