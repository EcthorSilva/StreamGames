"use client";

import Image from "next/image";
import Link from "next/link";

import { GamesData } from "@/data/gameData.js";

export default function FeaturedGames({ featuredGameIds = [] }) {
  const gamesToDisplay = featuredGameIds
    .map(id => GamesData.find(game => game.id === id))
    .filter(Boolean);

  return (
    <section className="w-full max-w-7xl mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold mb-6">Destaques da semana</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {gamesToDisplay.map((game) => {
          const originalPrice = parseFloat(game.price.replace(",", "."));
          const discountPercent = parseInt(game.discount.replace(/[^0-9]/g, ""), 10) || 0;
          
          let finalPrice = originalPrice;
          if (discountPercent > 0) {
            finalPrice = originalPrice * (1 - discountPercent / 100);
          }
          
          const displayPrice = finalPrice.toFixed(2).replace(".", ",");

          return (
            <div key={game.id} className="flex flex-col">
              <Link
                href={`/games/${game.id}`}
                className="block w-full h-60 relative rounded-lg overflow-hidden group"
              >
                <Image
                  src={game.background_image}
                  alt={game.name}
                  fill
                  className="object-cover rounded-lg group-hover:brightness-110 transition-transform duration-400 group-hover:scale-105"
                />

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
              </Link>

              <h3 className="mt-3 text-lg font-semibold">{game.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mt-1">
                {game.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}