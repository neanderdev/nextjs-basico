import { useEffect, useState } from 'react';

export default function Questao() {
    const [questao, setQuestao] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/api/questao/1')
        .then((res) => res.json())
        .then(setQuestao);
    }, []);

    function renderizarRespostas() {
        if (questao) {
            return questao.respostas.map((resp, index) => {
                return <li key={index}>{resp}</li>;
            });
        }

        return false;
    }

    return (
        <div>
            <h1>Questao</h1>

            <div>
                <span>{questao?.id} - {questao?.enunciado}</span>

                <ul>
                    {renderizarRespostas()}
                </ul>
            </div>
        </div>
    );
}