export function Acomodacao (){
    return (
        <>
            <span>IMAGEM ACOMODACAO</span>
            <h1>São Roque, Brasil</h1>
            <p>Desc. Perto da vinícola Góes</p>
        </>
    )
}

export function Cabecalho (props: any){
    return (
        <div className="bg-blue-700">
            <h1>logo</h1>
            {props.titulo}
            {props.preco}
            {Menu ()}
        </div>
    )
}

export function Menu (){
    return (
        <div className="bg-yellow-700">
            Acomodacoes | Experiencia
        </div>
    )
}

