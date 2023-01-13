import { useState } from 'react';

export default function Form() {
    const [usuarios, setUsuarios] = useState([]);
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState(0);

    async function salvarUsuario() {
        await fetch('/api/form', {
            method: 'POST',
            body: JSON.stringify({ nome, idade }),
        });

        setNome('');
        setIdade(0);

        const resp = await fetch('/api/form');
        const usuarios = await resp.json();

        setUsuarios(usuarios);
    }

    function renderizarUsuarios() {
        return usuarios.map((usuario, index) => {
            return <li key={index}>{usuario.nome} - {usuario.idade}</li>
        });
    }

    return (
        <div>
            <h1>Integrando com API #02</h1>

            <input type='text' value={nome} onChange={(e) => setNome(e.target.value)} />

            <input type='number' value={idade} onChange={(e) => setIdade(+e.target.value)} />

            <button onClick={salvarUsuario}>Enviar</button>

            <ul>
                {renderizarUsuarios()}
            </ul>
        </div>
    );
}
