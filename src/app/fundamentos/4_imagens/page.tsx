import Image from "next/image"

export default function Page(){
    const usuario = {
        nome: "Ana Maria",
        urlPerfil: "https://avatars.githubusercontent.com/u/91923614?v=4"
    }

    return (
        <div>
            <h1>Imagem</h1>
            <img src={usuario.urlPerfil} alt={`Nome: ${usuario.nome}`} style={
                {width: 1000, height: 1000}
            }/>
            <img src="/img/download.jpg" alt="" />
            <Image
                src="/img/download.jpg"
                alt={`Nome: ${usuario.nome}`}
                width={200}
                height={200}
            />
        </div>
    )
}

