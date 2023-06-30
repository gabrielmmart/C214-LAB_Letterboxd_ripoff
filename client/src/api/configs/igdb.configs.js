const mediaType = {
    game: "game"
}

const mediaCategory = {
    popular: "popular",
    top_rated: "top_rated"
}

const backdropPath = (imgEndpoint) => `https://media.rawg.io/media/screenshots/${imgEndpoint}.jpg`

const posterPath = (imgEndpoint) => `https://images.igdb.com/igdb/image/upload/t_screenshot_huge/${imgEndpoint}.jpg`

const youtubePath = (videoId) => `https://www.youtube.com/embed/${videoId}?controls=0`;

const igdbConfigs = {
    mediaType,
    mediaCategory,
    backdropPath,
    posterPath,
    youtubePath
};

export default igdbConfigs;