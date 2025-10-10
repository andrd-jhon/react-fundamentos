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
            {props.titulo}
            {props.subtitulo}
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

export function Rodape (props: any){
    return (
        <div className="bg-blue-600">
            <p>Rodapé</p>
        </div>
    )
}

export function Conteudo (props: any){

    console.log(props)

    return (
        <div className="bg-gray-800">
            <p>{}</p>
        </div>
    )
}

