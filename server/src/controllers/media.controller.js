const responseHandler = require("../handlers/response.handler.js");
const igdbApi = require("../igdb/igdb.api.js");
const userModel = require("../models/user.model.js");
const favoriteModel = require("../models/favorite.model.js");
const reviewModel = require("../models/review.model.js");
const tokenMiddleware = require("../middlewares/token.middleware.js");

const getList = async (rec, res) => {
    try {
        const { page } = req.query
        const { mediaType, mediaCategory } = req.params

        const response = await igdbApi.mediaList({ mediaType, mediaCategory, page })

        return responseHandler.ok(res, response);
    } catch {
        responseHandler.error(res)
    }
}

const getGenres = async (req, res) => {
    try {
        const { mediaType } = req.params

        const response = await igdbApi.mediaGenres({ mediaType });
        
        return responseHandler.ok(res, response);
    } catch {
        responseHandler.error(res)
    };

    const getGenres = async (req, res) => {
        try {
            const { mediaType } = req.params
    
            const response = await igdbApi.mediaGenres({ mediaType });
            
            return responseHandler.ok(res, response);
        } catch {
            responseHandler.error(res)
        }
    }
};

const search = async (req, res) => {
    try {
        const { mediaType } = req.params;
        const { query, page } = req.query;

        const response = await igdbApi.mediaSearch({
            query,
            page,
            mediaType: mediaType === "people" ? "person" : mediaType
        });

        responseHandler.ok(res, response);
    } catch {
        repsonse.error(res);
    }
};

const getDetail = async (req, res) => {
    try {
        const { mediaType, mediaId } = req.params

        const params = {mediaType, mediaId }

        const media = await igdbApi.mediaDetail({ params });

        media.credits = await igdbApi.mediaCredits({ params })

        const videos = await igdbApi.mediaVideos(params)

        media.videos = videos

        const recommend = await igdbApi.mediaRecommend(params)

        media.recommend = recommend.results

        media.images = await igdbApi.mediaImages(params)

        const tokenDecoded = tokenMiddleware.tokenDecode(req)

        if (tokenDecoded) {
            const user = await userModel.findById(tokenDecoded.data)

            if (user) {
                const isFavorite = await favoriteModel.findOne({ user: user.id, mediaId })
                media.isFavorite = isFavorite !== null
            }
        }

        media.reviews = await reviewModel.find({ mediaId }).populate("user").sort("-createdAt");

        responseHandler.ok(res, media);
    } catch {
        responseHandler.error(res)
    }
};

module.exports = {
    getList,
    getGenres,
    search,
    getDetail
  };  