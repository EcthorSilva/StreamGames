import React from 'react';
import Link from 'next/link';

import { GamesData } from '@/data/gameData.js';

export default function ItensPage() {
    const promotionalGames = GamesData.filter(game => game.discount !== "0");

    return (
        <div className="min-h-screen font-sans">
            <div className="w-full max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                {/* Cabeçalho da página do catálogo */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-2">Jogos em Promoção</h1>
                    <p className="text-lg text-gray-500">Aproveite os melhores descontos em seus jogos favoritos.</p>
                </div>
                {promotionalGames.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-4 gap-y-8">
                        {promotionalGames.map((game) => {
                            const originalPrice = parseFloat(game.price.replace(",", "."));
                            const discountPercent = parseInt(game.discount.replace(/[^0-9]/g, ""), 10) || 0;
                            
                            let finalPrice = originalPrice;
                            if (discountPercent > 0) {
                                finalPrice = originalPrice * (1 - discountPercent / 100);
                            }
                            
                            const displayPrice = finalPrice.toFixed(2).replace(".", ",");

                            return (
                                // Adicionado Link para navegação
                                <Link href={`/game/${game.id}`} key={game.id} legacyBehavior>
                                    <a className="group cursor-pointer">
                                        <div className="bg-transparent border-none overflow-hidden rounded-lg">
                                            <div className="p-0 relative">
                                                <div className="absolute bottom-2 right-2 z-10">
                                                    <div className="flex items-center gap-2 rounded-lg bg-black/70 px-2 py-1 text-sm text-white backdrop-blur-sm">
                                                        <span className="font-bold text-base">
                                                            R$ {displayPrice}
                                                        </span>
                                                        <span className="rounded bg-red-600 px-1.5 py-0.5 text-xs font-bold">
                                                            {game.discount}
                                                        </span>
                                                    </div>
                                                </div>
                                                <img
                                                    src={game.gamecover}
                                                    alt={`Capa do jogo ${game.name}`}
                                                    className="w-full h-auto object-cover rounded-lg aspect-[3/4] group-hover:brightness-110 transition-transform duration-300"
                                                />
                                            </div>
                                        </div>
                                        <div className="mt-3 px-1">
                                            <p className="text-sm text-gray-500">{game.type}</p>
                                            <h3 className="font-semibold truncate transition-colors">
                                                {game.name}
                                            </h3>
                                        </div>
                                    </a>
                                </Link>
                            );
                        })}
                    </div>
                ) : (
                    // Mensagem exibida quando não há jogos em promoção
                    <div className="text-center py-16">
                        <h2 className="text-2xl font-semibold">Nenhuma promoção no momento</h2>
                        <p className="mt-2 text-gray-500">
                            Volte em breve para conferir novas ofertas!
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}