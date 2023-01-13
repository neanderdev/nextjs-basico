import router from 'next/router';
import Link from 'next/link';

export default function Rotas() {    
    function navegacaoSimples(url) {
        router.push(url);
    }

    function navegacaoComParams() {
        router.push({
            pathname: '/rotas/params',
            query: {                
                id: 10,
                nome: 'Neander',
            },            
        });
    }

    return (
        <div>
            <h1>Rotas Index</h1>

            <ul>
                <Link href='/rotas/params?id=10&nome=Neander'>
                    <li>Params</li>
                </Link>

                <Link href='/rotas/10/buscar'>
                    <li>Buscar</li>
                </Link>

                <Link href='/rotas/10/Neander'>
                    <li>Neander</li>
                </Link>
            </ul>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <button
                    onClick={() => router.push('/rotas/10/buscar')}
                >
                    Buscar
                </button>

                <button
                    onClick={() => navegacaoSimples('/rotas/10/Neander')}
                >
                    Neander
                </button>

                <button
                    onClick={navegacaoComParams}
                >
                    Params
                </button>
            </div>
        </div>
    );
}