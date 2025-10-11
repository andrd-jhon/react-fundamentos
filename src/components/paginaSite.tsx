import { Cabecalho, Conteudo, Menu, Rodape } from "@/components/interface"

export default function PaginaSite(props: any){
    return (
        <>
            <Cabecalho
                className="bg-yellow-400"
                subtitulo="Meu subtitulo"
                titulo="Meu titulo"
            />
            <Menu/>
            <Conteudo>
                {props.children}
            </Conteudo>
            <Rodape></Rodape>
        </>
    )
}