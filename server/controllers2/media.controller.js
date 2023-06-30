import responseHandler from "../handlers/response.handler.js";
import rawgApi from "../rawg/rawg.api.js";
import userModel from "../models/user.model.js";
import favoriteModel from "../models/favorite.model.js";
import reviewModel from "../models/review.model.js";
import tokenMiddleware from "../middlewares/token.middleware.js";

const getGamesList = async (req, res) => {
    try {
        const { page } = req.query;

        const response = await rawgApi.gamesList({ page });

        return responseHandler.ok(res, response);
    } catch {
        responseHandler.error(res);
    }
};

const getGameDetail = async (req, res) => {
    try {
        const { gameId } = req.params;

        const response = await rawgApi.gameDetail({ gameId });

        const screenshots = await rawgApi.gameScreenshots({ gameId });

        response.screenshots = screenshots.results;

        const trailers = await rawgApi.gameTrailers({ gameId });

        response.trailers = trailers.results;

        const achievements = await rawgApi.gameAchievements({ gameId });

        response.achievements = achievements.results;

        const stores = await rawgApi.gameStores({ gameId });

        response.stores = stores.results;

        const series = await rawgApi.gameSeries({ gameId });

        response.series = series.results;

        const genres = await rawgApi.gameGenres({ gameId });

        response.genres = genres.results;

        const platforms = await rawgApi.gamePlatforms({ gameId });

        response.platforms = platforms.results;

        const publishers = await rawgApi.gamePublishers({ gameId });

        response.publishers = publishers.results;

        const developers = await rawgApi.gameDevelopers({ gameId });

        response.developers = developers.results;

        const suggestions = await rawgApi.gameSuggestions({ gameId });

        response.suggestions = suggestions.results;

        const tokenDecoded = tokenMiddleware.tokenDecode(req);

        if (tokenDecoded) {
            const user = await userModel.findById(tokenDecoded.data);

            if (user) {
                const isFavorite = await favoriteModel.findOne({ user: user.id, gameId });

                response.isFavorite = isFavorite !== null;
            }
        }

        const reviews = await reviewModel.find({ gameId }).populate("user").sort("-createdAt");

        response.reviews = reviews;

        responseHandler.ok(res, response);
    } catch {
        responseHandler.error(res);
    }
};

const searchGames = async (req, res) => {
    try {
        const { query, page } = req.query;

        const response = await rawgApi.gameSearch({ query, page });

        return responseHandler.ok(res, response);
    } catch {
        responseHandler.error(res);
    }
};

export default { getGamesList, getGameDetail, searchGames };
