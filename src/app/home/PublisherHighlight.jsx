"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// ALTERAÇÃO: Importando os dados reais
import { GamesData } from "@/data/gameData.js";

// ALTERAÇÃO: O componente agora aceita a prop `publisherName`
export default function PublisherHighlight({ publisherName }) {

  // ALTERAÇÃO: Filtra os jogos com base no nome da publicadora recebido via prop
  const publisherGames = GamesData.filter(
    (game) => game.publisher === publisherName
  );

  // ALTERAÇÃO: Se não encontrar jogos para essa publicadora, o componente não renderiza nada
  if (publisherGames.length === 0) {
    return null;
  }

  return (
    <div className="w-full max-w-7xl mx-auto py-8 px-4">
      <Carousel
        opts={{
          align: "start",
          loop: publisherGames.length > 6, // Ativa o loop apenas se houver mais jogos que o visível
        }}
        className="w-full"
      >
        <div className="relative mb-4 h-9">
            {/* ALTERAÇÃO: O título agora é dinâmico */}
            <h2 className="text-2xl font-bold hover:text-gray-800 cursor-pointer">
                {publisherName}
            </h2>
            <div className="absolute top-1/2 right-6 -translate-y-1/2 hidden md:flex items-center gap-x-2">
                <CarouselPrevious className="right-0" />
                <CarouselNext className=" right-2 translate-x-full" />
            </div>
        </div>

        {/* ALTERAÇÃO: O conteúdo do carrossel agora mapeia os jogos filtrados */}
        <CarouselContent className="-ml-4">
          {publisherGames.map((game) => {
            // Lógica de cálculo de preço e desconto
            const originalPrice = parseFloat(game.price.replace(",", "."));
            const discountPercent = parseInt(game.discount.replace(/[^0-9]/g, ""), 10) || 0;
            
            let finalPrice = originalPrice;
            if (discountPercent > 0) {
              finalPrice = originalPrice * (1 - discountPercent / 100);
            }
            
            const displayPrice = finalPrice.toFixed(2).replace(".", ",");

            return (
              <CarouselItem
                key={game.id}
                className="pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6"
              >
                <Link href={`/games/${game.id}`} legacyBehavior>
                  <a className="group cursor-pointer">
                    <Card className="bg-transparent border-none overflow-hidden rounded-lg py-0">
                      <CardContent className="p-0 relative">
                        <div className="absolute bottom-2 right-2 z-10">
                            <div className="flex items-center gap-2 rounded-lg bg-black/70 px-2 py-1 text-sm text-white backdrop-blur-sm">
                                <span className="font-bold text-base">
                                    R$ {displayPrice}
                                </span>
                                {discountPercent > 0 && (
                                    <span className="rounded bg-red-600 px-1.5 py-0.5 text-xs font-bold">
                                    {game.discount}
                                    </span>
                                )}
                            </div>
                        </div>
                        <Image
                          src={game.gamecover}
                          alt={`Capa do jogo ${game.name}`}
                          width={300}
                          height={400}
                          className="w-full h-auto object-cover rounded-lg aspect-[3/4] group-hover:brightness-110 transition-all duration-300"
                        />
                      </CardContent>
                    </Card>
                    <div className="mt-3">
                        <p className="text-sm text-gray-400">{game.type}</p>
                        <h3 className="font-semibold truncate">{game.name}</h3>
                    </div>
                  </a>
                </Link>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
}