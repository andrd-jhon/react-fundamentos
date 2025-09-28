import { Acomodacao, Cabecalho, Menu } from "@/components/interface";

export default function Pagina(){
    return (
        <div>
        <Cabecalho 
            titulo="TITULO TESTE"
            preco="R$400000"
        />
        <Menu/>
        <hr />
        <Acomodacao/>

    </div>
    )
}