import { Acomodacao, Cabecalho, Menu } from "@/components/interface"

export default function Pagina(){
    const nome = "João"
    return (
        <>
            {Cabecalho()}
            {Acomodacao()}
        </>
    )
}