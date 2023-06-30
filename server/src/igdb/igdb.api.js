import axiosClient from "../axios/axios.client.js"
import igdbEndpoints from "./igdb.endpoints.js"

const igdbApi = {
    mediaList: async ({ mediaType, mediaCategory, page}) => await axiosClient.get(
        igdbEndpoints.mediaList({ mediaType, mediaCategory, page})
    ),
    mediaDetail: async ({ mediaType, page}) => await axiosClient.get(
        igdbEndpoints.mediaDetail({ mediaType, page})
    ),
    mediaGenres: async ({ mediaType }) => await axiosClient.get(
        igdbEndpoints.mediaGenres({ mediaType })
    ),
    mediaCredits: async ({ mediaType, mediaId}) => await axiosClient.get(
        igdbEndpoints.mediaCredits({ mediaType, mediaId})
    ),
    mediaVideos: async ({ mediaType, mediaId}) => await axiosClient.get(
        igdbEndpoints.mediaVideos({ mediaType, mediaId})
    ),
    mediaImages: async ({ mediaType, mediaId }) => await axiosClient.get(
        igdbEndpoints.mediaImages({ mediaType, mediaId})
    ),
    mediaRecommend: async ({ mediaType, mediaId}) => await axiosClient.get(
        igdbEndpoints.mediaRecommend({ mediaType, mediaId})
    ),
    mediaSearch: async ({ mediaType, query, page}) => await axiosClient.get(
        igdbEndpoints.mediaSearch({ mediaType, query, page})
    )
};

export default igdbApi;