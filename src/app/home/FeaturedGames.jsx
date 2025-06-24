"use client";

import Image from "next/image";
import Link from "next/link";


export default function FeaturedGames() {
  return (
    <section className="w-full max-w-7xl mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold mb-6">Destaques da semana</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {featuredGames.map((game) => (
          <div key={game.id} className="flex flex-col">
            {/* Imagem do jogo */}
            <Link
              href={game.link}
              className="block w-full h-60 relative rounded-lg overflow-hidden"
            >
              <Image
                src={game.imageUrl}
                alt={game.title}
                fill
                className="object-cover rounded-lg hover:brightness-110 transition-transform duration-400 hover:scale-105"
                />

              {/* Preço/Desconto flutuante */}
              {game.discount && game.newPrice && (
                <div className="absolute bottom-2 right-2 z-10">
                  <h6 className="text-white bg-black/50 px-2 py-1 rounded text-sm flex items-center gap-2 backdrop-blur-sm">
                    {game.newPrice}
                    <span className="bg-red-600 text-white text-xs font-bold px-1.5 py-0.5 rounded">
                      {game.discount}
                    </span>
                  </h6>
                </div>
              )}
            </Link>

            {/* Título e descrição */}
            <h3 className="mt-3 text-base font-semibold">{game.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mt-1">
              {game.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

const featuredGames = [
  {
    id: 1,
    title: "Days Gone",
    description:
      "Um jogo de ação e aventura em mundo aberto ambientado em um mundo pós-apocalíptico, onde você joga como Deacon St. John, um ex-motociclista e caçador de recompensas tentando sobreviver.",
    imageUrl:
      "https://media.rawg.io/media/games/a79/a79d2fc90c4dbf07a8580b19600fd61d.jpg",
    link: "/jogos/ready-or-not",
    discount: "-10%",
    oldPrice: "R$ 49,99",
    newPrice: "R$ 44,99",
  },
  {
    id: 2,
    title: "DOOM: The Dark Ages",
    description:
      "Vista a armadura do DOOM Slayer mais uma vez em uma nova e sombria prequela medieval.",
    imageUrl:
      "https://media.rawg.io/media/screenshots/5b4/5b47eb35a77ed3dbdc0f7854268666a7.jpg",
    link: "/jogos/netherworld-covenant",
    discount: "-10%",
    oldPrice: "R$ 49,99",
    newPrice: "R$ 44,99",
  },
];