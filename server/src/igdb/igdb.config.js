const baseURL = process.env.IGDB_BASE_URL
const key = process.env.IGDB_KEY

const getUrl = (endpoint, params) => {
    const qs = new URLSearchParams(params)

    return `${baseUrl}${endpoint}?key=${key}&${qs}`;
};

export default { getUrl };