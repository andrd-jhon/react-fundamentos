import { Cabecalho, Conteudo, Menu, Rodape } from "@/components/interface"

export default function PaginaSite(props: any){
    return (
        <>
            <Cabecalho
                titulo="AirBnb"
                subtitulo="Início"
                className="bg-red-700"
            />
            <Menu/>
            <Conteudo titulo="teste">
                {props.children}
            </Conteudo>
            <Rodape></Rodape>
        </>
    )
}