"use client";

import { useState } from "react";
import { Header } from "@/components/navbar/header";
import SearchHeader from "@/components/navbar/SearchHeader";
import Footer from "@/components/footer/Footer";
import Link from "next/link";
import { GamesData } from "@/data/gameData.js";
import SearchBar from "@/components/navbar/SearchBar";

const platformFamilyIds = {
    playstation: [2, 3, 4], xbox: [5, 6, 7], pc: [1], nintendo: [8],
};
const platformDisplayInfo = {
    playstation: { name: 'PlayStation', subtitle: 'Ofertas para PS4 e PS5. Jogos, DLCs e assinaturas.' },
    xbox: { name: 'Xbox', subtitle: 'Explore o catálogo do Xbox One e Series S | X.' },
    pc: { name: 'PC', subtitle: 'Encontre jogos para Steam, Epic Games, GOG e mais.' },
    nintendo: { name: 'Nintendo', subtitle: 'Os melhores jogos para o console híbrido da Nintendo.' }
};

export default function PlatformCatalogPage({ params }) {
    const [searchTerm, setSearchTerm] = useState('');

    const platformSlug = params.platform;
    const targetPlatformIds = platformFamilyIds[platformSlug] || [];
    const displayInfo = platformDisplayInfo[platformSlug] || { name: "Plataforma Desconhecida", subtitle: "..." };

    const platformFilteredGames = GamesData.filter(game => 
        game.platformIds.some(id => targetPlatformIds.includes(id))
    );

    const displayedGames = platformFilteredGames.filter(game =>
        game.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <Header />
            <SearchHeader value={searchTerm} onChange={setSearchTerm} />

            <div className="min-h-screen font-sans">
                <div className="w-full max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-2">Jogos de {displayInfo.name}</h1>
                        <p className="text-lg text-gray-500">{displayInfo.subtitle}</p>
                    </div>
                    {displayedGames.length > 0 ? (
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-4 gap-y-8">
                            {displayedGames.map((game) => {
                                const originalPrice = parseFloat(game.price.replace(",", "."));
                                const discountPercent = parseInt(game.discount.replace(/[^0-9]/g, ""), 10) || 0;
                                let finalPrice = originalPrice * (1 - (discountPercent > 0 ? discountPercent / 100 : 0));
                                const displayPrice = finalPrice.toFixed(2).replace(".", ",");
                                return (
                                    <Link href={`/games/${game.id}`} key={game.id} legacyBehavior>
                                        <a className="group cursor-pointer">
                                            <div className="bg-transparent border-none overflow-hidden rounded-lg"><div className="p-0 relative"><div className="absolute bottom-2 right-2 z-10"><div className="flex items-center gap-2 rounded-lg bg-black/70 px-2 py-1 text-sm text-white backdrop-blur-sm"><span className="font-bold text-base">R$ {displayPrice}</span>{discountPercent > 0 && (<span className="rounded bg-red-600 px-1.5 py-0.5 text-xs font-bold">{game.discount}</span>)}</div></div><img src={game.gamecover} alt={`Capa do jogo ${game.name}`} className="w-full h-auto object-cover rounded-lg aspect-[3/4] group-hover:brightness-110 transition-transform duration-300"/></div></div>
                                            <div className="mt-3 px-1"><p className="text-sm text-gray-500">{game.type}</p><h3 className="font-semibold truncate transition-colors">{game.name}</h3></div>
                                        </a>
                                    </Link>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <h2 className="text-2xl font-semibold">Nenhum jogo encontrado</h2>
                            <p className="mt-2 text-gray-500">
                                Tente ajustar sua busca ou explore outros jogos para {displayInfo.name}.
                            </p>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}