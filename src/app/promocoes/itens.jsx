"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { GamesData } from '@/data/gameData.js';
import SearchHeader from "@/components/navbar/SearchHeader";

export default function ItensPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const promotionalGames = GamesData.filter(game => game.discount !== "0");
    const displayedGames = promotionalGames.filter(game =>
        game.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="font-sans">
            <SearchHeader value={searchTerm} onChange={setSearchTerm} />

            <div className="min-h-screen">
                <div className="w-full max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-2">Jogos em Promoção</h1>
                        <p className="text-lg text-gray-500">Aproveite os melhores descontos em seus jogos favoritos.</p>
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
                            <h2 className="text-2xl font-semibold">Nenhuma promoção encontrada</h2>
                            <p className="mt-2 text-gray-500">Tente usar outros termos na busca.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}