export const allGames = [
  // Ação
  {
    id: "1",
    title: "The Last of Us™ Parte II Remastered",
    type: "Jogo base",
    genre: "acao", // slug do gênero
    genreName: "Ação", // nome para exibição
    imageUrl: "https://cdn1.epicgames.com/offer/7713e3fa4b234e0d8f553044205d53b6/EGS_TheLastofUsPartIIRemastered_NaughtyDogLLCNixxesSoftwareIronGalaxy_S2_1200x1600-2e13755a6b3fec2ee9dbcc231a1cf39c?resize=1&w=360&h=480&quality=medium",
    price: "R$ 50,00",
    discount: "-60%",
  },
  {
    id: "5",
    title: "Battlefield 4™ Edição Premium",
    type: "Jogo base",
    genre: "acao",
    genreName: "Ação",
    imageUrl: "https://cdn1.epicgames.com/spt-assets/8141dd49fe39421989a02983a3bbdb00/battlefield-4-13z58.jpg?resize=1&w=360&h=480&quality=medium",
    price: "R$ 29,80",
    discount: "-85%",
  },
  // Aventura
  {
    id: "2",
    title: "Marvel's Spider-Man 2",
    type: "Jogo base",
    genre: "aventura",
    genreName: "Aventura",
    imageUrl: "https://cdn1.epicgames.com/offer/b2818b59c0bb420e9647983dfd254931/EGS_Octopus_InsomniacGamesNixxesSoftware_S2_1200x1600-5831c61378872a1fe233b295fbf3140f?resize=1&w=360&h=480&quality=medium",
    price: "R$ 171,30",
  },
  {
    id: "4",
    title: "Assassin's Creed Shadows",
    type: "Jogo base",
    genre: "aventura",
    genreName: "Aventura",
    imageUrl: "https://cdn1.epicgames.com/offer/14a28903e3d14bd5aa3e6dbf10868126/EN_EGST_StorePortrait_1200x1600_1200x1600-a010fb65414cbbc48e055d1f6eac41b8?resize=1&w=360&h=480&quality=medium",
    price: "R$ 189,50",
  },
  // RPG
  {
    id: "3",
    title: "Clair Obscur: Expedition 33",
    type: "Jogo base",
    genre: "rpg",
    genreName: "RPG",
    imageUrl: "https://cdn1.epicgames.com/spt-assets/330dace5ffc74156987f91d454ac544b/project-w-1vp1b.jpg?resize=1&w=360&h=480&quality=medium",
    price: "R$ 39,99",
  },
  // Estratégia
  {
    id: "7",
    title: "Sid Meier's Civilization® VII",
    type: "Jogo base",
    genre: "estrategia",
    genreName: "Estratégia",
    imageUrl: "https://cdn1.epicgames.com/offer/eb9cdf6dbe4b47fc8ba474017023476a/STANDART--METADATA-PRODUCT_OFFER_PORTRAIT_IMAGE-STATIC-ENUS-NO_RATING-EPIC-1200X1600-QA_1200x1600-7a2a0b7697c6355fed8da2a407ff17b2?resize=1&w=360&h=480&quality=medium",
    price: "R$ 99,90",
  },
  // Indie
  {
    id: "6",
    title: "TankHead",
    type: "Jogo base",
    genre: "indie",
    genreName: "Indie",
    imageUrl: "https://cdn1.epicgames.com/spt-assets/ce3cfe56d21147dcb398823206cf9073/tankhead-c7n4p.jpg?resize=1&w=360&h=480&quality=medium",
    price: "R$ 199,00",
  },
];

// Mapeamento para obter o nome de exibição a partir do slug da URL
export const genreMap = {
  acao: "Ação",
  aventura: "Aventura",
  rpg: "RPG",
  estrategia: "Estratégia",
  indie: "Indie",
  "esportes-corrida": "Esportes & Corrida",
};