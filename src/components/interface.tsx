import Link from "next/link"

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
            <h1>LOGO</h1>
            {props.titulo}
            {props.subtitulo}
            {<Menu/>}
        </div>
    )
}

export function Menu (){
    return (
        <div className="bg-yellow-700">
            <MenuItem texto="HOME" url="/inicio"/>
            <MenuItem texto="Acomodações" url="/acomodacoes"/>
            <MenuItem texto="Ajuda" url="/fundamentos/3_estilo"/>
        </div>
    )
}

export function MenuItem (props: any){
    return (
        <Link href={props.url} className="p-2">
            {props.texto}
        </Link>
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
            <p>{props.children}</p>
        </div>
    )
}

