function Acomodacao (){
    return (
        <>
            <span>IMAGEM ACOMODACAO</span>
            <h1>São Roque, Brasil</h1>
            <p>Desc. Perto da vinícola Góes</p>
        </>
    )
}

export default function Page(){
    const nome = "João"
    return (
        <>
            {Acomodacao()}
            <hr />
            {Acomodacao()}
            <hr />
            {nome}
        </>
    )
}