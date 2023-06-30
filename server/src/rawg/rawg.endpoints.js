const rawgEndpoints = {
    gamesList: ({ page }) => `https://api.rawg.io/api/games?page=${page}`,
    gameDetail: ({ gameId }) => `https://api.rawg.io/api/games/${gameId}`,
    gameScreenshots: ({ gameId }) => `https://api.rawg.io/api/games/${gameId}/screenshots`,
    gameTrailers: ({ gameId }) => `https://api.rawg.io/api/games/${gameId}/movies`,
    gameAchievements: ({ gameId }) => `https://api.rawg.io/api/games/${gameId}/achievements`,
    gameStores: ({ gameId }) => `https://api.rawg.io/api/games/${gameId}/stores`,
    gameSeries: ({ gameId }) => `https://api.rawg.io/api/games/${gameId}/game-series`,
    gameGenres: ({ gameId }) => `https://api.rawg.io/api/games/${gameId}/genres`,
    gamePlatforms: ({ gameId }) => `https://api.rawg.io/api/games/${gameId}/platforms`,
    gamePublishers: ({ gameId }) => `https://api.rawg.io/api/games/${gameId}/publishers`,
    gameDevelopers: ({ gameId }) => `https://api.rawg.io/api/games/${gameId}/developers`,
    gameSuggestions: ({ gameId }) => `https://api.rawg.io/api/games/${gameId}/suggested`,
    gameSearch: ({ query, page }) => `https://api.rawg.io/api/games?search=${query}&page=${page}`,
    platformsList: () => 'https://api.rawg.io/api/platforms',
    genresList: () => 'https://api.rawg.io/api/genres',
    creatorsList: () => 'https://api.rawg.io/api/creators',
    storesList: () => 'https://api.rawg.io/api/stores',
    developersList: () => 'https://api.rawg.io/api/developers',
    publishersList: () => 'https://api.rawg.io/api/publishers'
};

export default rawgEndpoints;
