const mediaType = {
    game: "game"
}

const mediaCategory = {
    popular: "popular",
    top_rated: "top_rated"
}

const backdropPath = (imgEndpoint) => `https://image.igdb.org/t/p/original${imgEndpoint}`

const posterPath = (imgEndpoint) => `https://image.igdb.org/t/p/w500${imgEndpoint}`

const youtubePath = (videoId) => `https://www.youtube.com/embed/${videoId}?controls=0`;

const igdbConfigs = {
    mediaType,
    mediaCategory,
    backdropPath,
    posterPath,
    youtubePath
};

export default igdbConfigs;