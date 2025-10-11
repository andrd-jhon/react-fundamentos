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

interface CabecalhoProps {
    className?: string
    titulo: string
    subtitulo: string
}

export function Cabecalho (props: CabecalhoProps){
    const classe = props.className ?? "bg-blue-700"

    return (
        <div className={`p-3 ${classe}`}>
            <h1>LOGO</h1>
            {props.titulo}
            {props.subtitulo}
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

interface ConteudoProps {
    children: any
}

export function Conteudo (props: ConteudoProps){

    return (
        <div className="bg-gray-800">
            {props.children}
        </div>
    )
}

