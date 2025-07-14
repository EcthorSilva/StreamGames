import Image from "next/image";
import { GamesData } from "@/data/gameData.js";

export function GridBackground() {
  const gamesWithCovers = GamesData.filter(game => game.gamecover && game.gamecover.trim() !== "");

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div className="[animation:scroll-up_120s_linear_infinite] flex flex-col">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            aria-hidden="true"
            className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4 p-4"
          >
            {gamesWithCovers.map((game, index) => (
              <div key={`${i}-${index}`} className="aspect-[3/4] relative rounded-md overflow-hidden">
                <Image
                  src={game.gamecover}
                  alt={`Capa do jogo ${game.name}`}
                  fill
                  className="object-cover opacity-30 group-hover:opacity-50 transition-opacity"
                  sizes="(max-width: 640px) 25vw, (max-width: 768px) 16vw, 12.5vw"
                  loading="lazy"
                  quality={30}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}