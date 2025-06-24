import { Header } from "@/components/navbar/header";
import Footer from "@/components/footer/Footer";
import { allGames, genreMap } from "@/data/games";
import Link from "next/link";

export default function GenreCatalogPage({ params }) {
  
  const genreSlug = params.genre; // Pega o slug do gênero da URL. Ex: "acao"
  const filteredGames = allGames.filter((game) => game.genre === genreSlug); // Filtra a lista de jogos com base no slug do gênero
  const genreName = genreMap[genreSlug] || "Gênero não encontrado"; // Pega o nome do gênero para usar no título da página. Ex: "Ação"

  return (
    <div>
      <Header />
      <div className="min-h-screen font-sans">
        <div className="w-full max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          {/* Cabeçalho da página com título dinâmico */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-2">
              Jogos de {genreName}
            </h1>
            <p className="text-lg text-gray-500">
              Explore nossa coleção de títulos do gênero {genreName.toLowerCase()}.
            </p>
          </div>

          {/* Grid responsivo para os cards dos jogos*/}
          {filteredGames.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-4 gap-y-8">
              {filteredGames.map((game) => (
                <div key={game.id} className="group cursor-pointer">
                  <div className="bg-transparent border-none overflow-hidden rounded-lg">
                    <div className="p-0 relative">
                      <div className="absolute bottom-2 right-2 z-10">
                        <div className="text-white bg-black/60 px-2 py-1 rounded text-sm flex items-center gap-2 backdrop-blur-sm">
                          {game.price}
                          {game.discount && (
                            <span className="bg-red-600 text-white text-xs font-bold px-1.5 py-0.5 rounded">
                              {game.discount}
                            </span>
                          )}
                        </div>
                      </div>
                      <img
                        src={game.imageUrl}
                        alt={`Capa do jogo ${game.title}`}
                        className="w-full h-auto object-cover rounded-lg aspect-[3/4] group-hover:brightness-110 transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className="mt-3 px-1">
                    <p className="text-sm text-gray-500">{game.type}</p>
                    <h3 className="font-semibold truncate transition-colors">
                      {game.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Mensagem caso nenhum jogo seja encontrado para aquele gênero
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