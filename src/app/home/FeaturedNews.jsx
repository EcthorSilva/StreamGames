"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";


export default function FeaturedNews() {
  return (
    <section className="w-full max-w-7xl mx-auto py-8 px-4">
        <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">
                Notícias em destaque
            </h2>

            <Link
                href="/noticias"
                className="text-sm text-neutral-600 hover:underline hover:text-neutral-500 transition"
                >
                Ver todas
            </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {news.map((item) => (
                <div key={item.id} className="flex flex-col">
                    <div className="w-full h-60 relative rounded-lg overflow-hidden">
                        <Image
                            src={item.imageUrl}
                            alt={item.title}
                            fill
                            className="object-cover rounded-lg"
                            />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold line-clamp-2">{item.title}</h3>
                    <p className="mt-2 text-gray-400 text-sm line-clamp-4">{item.description}</p>
                    <Link
                        href={item.link}
                        className="mt-4 inline-block bg-neutral-700 text-white px-4 py-2 rounded-md hover:bg-neutral-600 transition"
                        >
                        Leia mais
                    </Link>
                </div>
            ))}
        </div>
    </section>
  );
}

const news = [
  {
    id: 1,
    title: "Bruno Mars é o mais novo ícone da temporada 9 do Fortnite Festival",
    description: "Bruno Mars, o icônico cantor e compositor, agora faz parte do universo do Fortnite Festival! Com sua presença marcante, ele traz uma nova dimensão ao jogo, permitindo que os jogadores experimentem sua música e estilo de uma maneira única. Prepare-se para dançar e se divertir com Bruno Mars no Fortnite!",
    imageUrl: "https://media.rawg.io/media/games/dcb/dcbb67f371a9a28ea38ffd73ee0f53f3.jpg",
    link: "/noticias/out-of-words",
  },
  {
    id: 2,
    title: "Mudou tudo? Overwatch 2 anuncia Aprimoramentos, retorno das loot boxes, votação de mapa, banimento de heróis e mais",
    description: "Overwatch 2 está passando por uma grande transformação! A Blizzard anunciou uma série de aprimoramentos significativos, incluindo o retorno das loot boxes, a introdução de um sistema de votação de mapa e a possibilidade de banimento de heróis. Essas mudanças visam melhorar a experiência do jogador e trazer de volta elementos clássicos que os fãs amavam.",
    imageUrl: "https://media.rawg.io/media/games/6fc/6fcf4cd3b17c288821388e6085bb0fc9.jpg",
    link: "/noticias/end-of-abyss",
  },
  {
    id: 3,
    title: "Por que algumas skins no Counter-Strike 2 são tão valiosas?",
    description: "No mundo dos jogos, especialmente em títulos como Counter-Strike 2, as skins se tornaram um fenômeno cultural e econômico. Mas o que faz algumas dessas skins valerem tanto dinheiro? Vamos explorar os fatores que influenciam o valor das skins no CS2.",
    imageUrl: "https://media.rawg.io/media/games/ec4/ec4b02bdb3eb5c6212992c19bc05697e.jpg",
    link: "/noticias/monte-de-historias",
  },
];