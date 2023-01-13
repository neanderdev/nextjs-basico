import Link from 'next/link';

export default function Rotas() {
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
        </div>
    );
}