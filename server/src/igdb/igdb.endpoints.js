const igdbEndpoints = {
    mediaList: ({ mediaType, mediaCategory, page}) => igdbConfig.getUrl(
        `${mediaType}/${mediaCategory}`, page
    ),
    mediaDetail: ({ mediaType, mediaId }) => igdbConfig.getUrl(
        `${mediaType}/${mediaId}`
    ),
    mediaGenres: ({ mediaType }) => igdbConfig.getUrl(
        `genre/${mediaType}/list`
    ),
    mediaCredits: ({ mediaType, mediaId }) => igdbConfig.getUrl(
        `${mediaType}/${mediaId}/credits`
    ),
    mediaVideos: ({ mediaType, mediaId }) => igdbConfig.getUrl(
        `${mediaType}/${mediaId}/videos`
    ),
    mediaRecommend: ({ mediaType, mediaId }) => igdbConfig.getUrl(
        `${mediaType}/${mediaId}/recommendations`
    ),
    mediaImages: ({ mediaType, mediaId }) => igdbConfig.getUrl(
        `${mediaType}/${mediaId}/images`
    ),
    mediaSearch: ({ mediaType, query, page }) => igdbConfig.getUrl(
        `search/${mediaType}`, { query, page }
    ),
    personDetail: ({ personId }) => igdbConfig.getUrl(
        `person/${personId}`
    ),
    personDetail: ({ personId }) => igdbConfig.getUrl(
        `person/${personId}/combined_credits`
    )
};

export default igdbEndpoints;