const mediaType = {
    game: "game"
}

const mediaCategory = {
    popular: "popular",
    top_rated: "top_rated"
}

const backdropPath = (gameId) => `https://api.rawg.io/api/games/${gameId}/screenshots`

const posterPath = (gameId) => `https://api.rawg.io/api/games/${gameId}/screenshots`

const youtubePath = (id) => `https://api.rawg.io/api/games/${id}/youtube`;

const igdbConfigs = {
    mediaType,
    mediaCategory,
    backdropPath,
    posterPath,
    youtubePath
};

export default igdbConfigs;