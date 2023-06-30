const baseURL = process.env.RAWG_BASE_URL;
const key = process.env.RAWG_KEY;

const getUrl = (endpoint, params) => {
    const qs = new URLSearchParams(params);

    return `${baseURL}${endpoint}?key=${key}&${qs}`;
};

export default { getUrl };
