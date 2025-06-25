import { Header } from "@/components/navbar/header";
import SearchHeader from "@/components/navbar/SearchHeader";
import Footer from "@/components/footer/Footer";
import Link from "next/link";

import { GamesData } from "@/data/gameData.js";
import { genres } from "@/data/genres.js";

export default function GenreCatalogPage({ params }) {
  const genreSlug = params.genre;
  const currentGenre = genres.find((g) => g.slug === genreSlug);

  const filteredGames = currentGenre
    ? GamesData.filter((game) => game.genreIds.includes(currentGenre.id))
    : [];

  const genreName = currentGenre?.name || "Gênero não encontrado";

  return (
    <div>
      <Header />
      <SearchHeader />
      <div className="min-h-screen font-sans">
        <div className="w-full max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-2">
              Jogos de {genreName}
            </h1>
            <p className="text-lg text-gray-500">
              Explore nossa coleção de títulos do gênero {genreName.toLowerCase()}.
            </p>
          </div>

          {filteredGames.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-4 gap-y-8">
              {filteredGames.map((game) => {
                // A lógica de cálculo permanece a mesma
                const originalPrice = parseFloat(game.price.replace(",", "."));
                const discountPercent = parseInt(game.discount.replace(/[^0-9]/g, ""), 10) || 0;
                
                let finalPrice = originalPrice;
                if (discountPercent > 0) {
                  finalPrice = originalPrice * (1 - discountPercent / 100);
                }
                
                const displayPrice = finalPrice.toFixed(2).replace(".", ",");

                return (
                  <Link href={`/game/${game.id}`} key={game.id} legacyBehavior>
                    <a className="group cursor-pointer">
                      <div className="bg-transparent border-none overflow-hidden rounded-lg">
                        <div className="p-0 relative">
                          {/* ALTERAÇÃO: Div de preços simplificada */}
                          <div className="absolute bottom-2 right-2 z-10">
                            <div className="text-white bg-black/60 px-2 py-1 rounded text-sm flex items-center gap-2 backdrop-blur-sm">
                              <span className="text-base">
                                R$ {displayPrice}
                              </span>
                              {/* A tag de desconto continua aparecendo se houver desconto */}
                              {discountPercent > 0 && (
                                <span className="rounded bg-red-600 px-1.5 py-0.5 text-xs font-bold">
                                  {game.discount}
                                </span>
                              )}
                            </div>
                          </div>
                          <img
                            src={game.gamecover}
                            alt={`Capa do jogo ${game.name}`}
                            className="w-full h-auto object-cover rounded-lg aspect-[3/4] group-hover:brightness-110 transition-transform duration-300 group-hover:scale-105"
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
            <div className="text-center py-16">
              <h2 className="text-2xl font-semibold">Nenhum jogo encontrado</h2>
              <p className="mt-2 text-gray-500">
                Não encontramos jogos para o gênero "{genreName}".
              </p>
              <Link href="/" className="mt-6 inline-block rounded-md bg-primary px-6 py-2 text-primary-foreground">
                Voltar para a Home
              </Link>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}