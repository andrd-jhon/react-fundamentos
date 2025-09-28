import { Acomodacao, Cabecalho, Menu } from "@/components/interface"

export default function Pagina(){
    return (
        <>
            <Cabecalho
                titulo="Mais um titulo de teste"
            />
            {Acomodacao()}
        </>
    )
}