'use client';

import Image from 'next/image';

const populares = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    titulo: `Jogo ${i + 1}`,
    descricao: 'Este é um card com texto de exemplo para simular o conteúdo do jogo.',
    preco: 'R$47,99',
    desconto: '-60%',
    atualizado: 'Última atualização há 3 minutos',
    imagem: 'https://assets.nuuvem.com/image/upload/t_boxshot_big/v1/products/5fa2e4a6a3f8b1112f494fde/boxshots/y4ohgmp7esvgizxbhvah.jpg',
}));

export default function Bestsellers() {
    const metade = Math.ceil(populares.length / 2);
    const col1 = populares.slice(0, metade);
    const col2 = populares.slice(metade);

    const renderCard = ({ id, titulo, descricao, preco, desconto, atualizado, imagem }) => (
        <div className="card mb-4" key={id}>
            <div className="row g-2 position-relative">
                <div className="position-absolute ps-1">
                    <h4 className="text-reset p-1 rounded">
                        <span className="badge text-bg-danger">{id}</span>
                    </h4>
                </div>
                <div className="col-4 col-md-3">
                    <Image
                    src={imagem}
                    alt={`Capa do ${titulo}`}
                    width={120}
                    height={160}
                    className="img-fluid rounded-start"
                    />
                </div>
                <div className="col-8 col-md-8">
                    <div className="position-absolute bottom-0 end-0 p-2">
                        <h6 className="text-reset bg-dark bg-opacity-75 p-1 rounded" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                            {preco} <span className="badge text-bg-danger">{desconto}</span>
                        </h6>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{titulo}</h5>
                        <p className="card-text">{descricao}</p>
                        <p className="card-text d-none d-sm-block"><small className="text-body-secondary">{atualizado}</small></p>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="container my-4">
            <h2 className="mb-4">Mais Vendidos</h2>
            <div className="row">
                <div className="col-md-6">
                    {col1.map(renderCard)}
                </div>
                <div className="col-md-6">
                    {col2.map(renderCard)}
                </div>
            </div>
        </div>
    );
}