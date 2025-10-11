'use client'

import { useEffect, useState } from 'react'

export default function Home() {
  const [mensagem, setMensagem] = useState('')

  useEffect(() => {
    fetch('https://localhost:7284/Categorias/Teste') // troque pela URL da sua API
      .then(res => res.json())
      .then(data => setMensagem(data.mensagem))
      .catch(err => console.error('Erro:', err))
  }, [])

  const enviarDados = async () => {
    const resposta = await fetch('https://localhost:7284/Categorias/Teste', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome: 'João'})
    })

    const resultado = await resposta.json()
    console.log(resultado)
  }

  return (
    <div>
      <h1>{mensagem}</h1>
      <button onClick={enviarDados}>Enviar dados</button>
    </div>
  )
}
