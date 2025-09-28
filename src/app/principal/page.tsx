import { Acomodacao, Cabecalho, Menu } from "@/components/interface"

export default function Pagina(){
    return (
        <>
            {Cabecalho()}
            {Acomodacao()}
        </>
    )
}