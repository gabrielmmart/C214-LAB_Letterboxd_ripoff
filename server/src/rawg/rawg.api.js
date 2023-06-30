import axiosClient from "../axios/axios.client.js";
import rawgEndpoints from "./rawg.endpoints.js";

const rawgApi = {
    gamesList: async ({ page }) => await axiosClient.get(
        rawgEndpoints.gamesList({ page })
    ),
    gameDetail: async ({ gameId }) => await axiosClient.get(
        rawgEndpoints.gameDetail({ gameId })
    ),
    gameScreenshots: async ({ gameId }) => await axiosClient.get(
        rawgEndpoints.gameScreenshots({ gameId })
    ),
    gameTrailers: async ({ gameId }) => await axiosClient.get(
        rawgEndpoints.gameTrailers({ gameId })
    ),
    gameAchievements: async ({ gameId }) => await axiosClient.get(
        rawgEndpoints.gameAchievements({ gameId })
    ),
    gameStores: async ({ gameId }) => await axiosClient.get(
        rawgEndpoints.gameStores({ gameId })
    ),
    gameSeries: async ({ gameId }) => await axiosClient.get(
        rawgEndpoints.gameSeries({ gameId })
    ),
    gameGenres: async ({ gameId }) => await axiosClient.get(
        rawgEndpoints.gameGenres({ gameId })
    ),
    gamePlatforms: async ({ gameId }) => await axiosClient.get(
        rawgEndpoints.gamePlatforms({ gameId })
    ),
    gamePublishers: async ({ gameId }) => await axiosClient.get(
        rawgEndpoints.gamePublishers({ gameId })
    ),
    gameDevelopers: async ({ gameId }) => await axiosClient.get(
        rawgEndpoints.gameDevelopers({ gameId })
    ),
    gameSuggestions: async ({ gameId }) => await axiosClient.get(
        rawgEndpoints.gameSuggestions({ gameId })
    ),
    gameSearch: async ({ query, page }) => await axiosClient.get(
        rawgEndpoints.gameSearch({ query, page })
    ),
    platformsList: async () => await axiosClient.get(
        rawgEndpoints.platformsList()
    ),
    genresList: async () => await axiosClient.get(
        rawgEndpoints.genresList()
    ),
    creatorsList: async () => await axiosClient.get(
        rawgEndpoints.creatorsList()
    ),
    storesList: async () => await axiosClient.get(
        rawgEndpoints.storesList()
    ),
    developersList: async () => await axiosClient.get(
        rawgEndpoints.developersList()
    ),
    publishersList: async () => await axiosClient.get(
        rawgEndpoints.publishersList()
    )
};

export default rawgApi;
