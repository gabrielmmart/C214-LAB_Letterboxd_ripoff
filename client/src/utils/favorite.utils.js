const favoriteUtils = {
    check: ({ listFavorites, mediaid }) => listFavorites && listFavorites.find(e =>
    e.mediaId.toString() === mediaId.toString()) !== undefined
};

export default favoriteUtils;