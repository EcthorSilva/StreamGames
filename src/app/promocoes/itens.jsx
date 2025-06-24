import React from 'react';

const originalGames = [
    {
        id: "1",
        title: "The Last of Us™ Parte II Remastered",
        type: "Jogo base",
        imageUrl: "https://cdn1.epicgames.com/offer/7713e3fa4b234e0d8f553044205d53b6/EGS_TheLastofUsPartIIRemastered_NaughtyDogLLCNixxesSoftwareIronGalaxy_S2_1200x1600-2e13755a6b3fec2ee9dbcc231a1cf39c?resize=1&w=360&h=480&quality=medium",
        price: "R$ 50,00",
        originalPrice: "R$ 125,00",
        discount: "-60%",
    },
    {
        id: "2",
        title: "Marvel's Spider-Man 2",
        type: "Jogo base",
        imageUrl: "https://cdn1.epicgames.com/offer/b2818b59c0bb420e9647983dfd254931/EGS_Octopus_InsomniacGamesNixxesSoftware_S2_1200x1600-5831c61378872a1fe233b295fbf3140f?resize=1&w=360&h=480&quality=medium",
        price: "R$ 171,30",
    },
    {
        id: "3",
        title: "Clair Obscur: Expedition 33",
        type: "Jogo base",
        imageUrl: "https://cdn1.epicgames.com/spt-assets/330dace5ffc74156987f91d454ac544b/project-w-1vp1b.jpg?resize=1&w=360&h=480&quality=medium",
        price: "R$ 39,99",
    },
    {
        id: "4",
        title: "Assassin's Creed Shadows",
        type: "Jogo base",
        imageUrl: "https://cdn1.epicgames.com/offer/14a28903e3d14bd5aa3e6dbf10868126/EN_EGST_StorePortrait_1200x1600_1200x1600-a010fb65414cbbc48e055d1f6eac41b8?resize=1&w=360&h=480&quality=medium",
        price: "R$ 189,50",
    },
    {
        id: "5",
        title: "Battlefield 4™ Edição Premium",
        type: "Jogo base",
        imageUrl: "https://cdn1.epicgames.com/spt-assets/8141dd49fe39421989a02983a3bbdb00/battlefield-4-13z58.jpg?resize=1&w=360&h=480&quality=medium",
        price: "R$ 29,80",
        originalPrice: "R$ 199,00",
        discount: "-85%",
    },
    {
        id: "6",
        title: "TankHead",
        type: "Jogo base",
        imageUrl: "https://cdn1.epicgames.com/spt-assets/ce3cfe56d21147dcb398823206cf9073/tankhead-c7n4p.jpg?resize=1&w=360&h=480&quality=medium",
        price: "R$ 199,00",
    },
    {
        id: "7",
        title: "Sid Meier's Civilization® VII",
        type: "Jogo base",
        imageUrl: "https://cdn1.epicgames.com/offer/eb9cdf6dbe4b47fc8ba474017023476a/STANDART--METADATA-PRODUCT_OFFER_PORTRAIT_IMAGE-STATIC-ENUS-NO_RATING-EPIC-1200X1600-QA_1200x1600-7a2a0b7697c6355fed8da2a407ff17b2?resize=1&w=360&h=480&quality=medium",
        price: "R$ 99,90",
    },
];

const catalogGames = Array.from({ length: 6 }).flatMap(() => originalGames).map((game, index) => ({ ...game, id: `${game.id}-${index}` }));

export default function ItensPage() {
    return (
        <div className="min-h-screen font-sans">
            <div className="w-full max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                {/* Cabeçalho da página do catálogo */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-2">Catálogo de Jogos</h1>
                    <p className="text-lg text-gray-500">Explore nossa coleção completa de títulos</p>
                </div>
                {/* Grid responsivo para os cards dos jogos */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-4 gap-y-8">
                    {catalogGames.map((game) => (
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
            </div>
        </div>
    );
}