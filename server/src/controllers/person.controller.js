import responseHandler from "../handlers/response.handler.js"
import igdbApi from "../igdb/igdb.api.js"

const personDetail = async (req, res) => {
    try {
        const { personId } = req.params

        const person = await igdbApi.personDetail({ personId })

        responseHandler.ok(res, person)
    } catch {
        responseHandler.error(res)
    }
}

const personMedias = async (req, res) => {
    try {
        const { personId } = req.params

        const medias = await igdbApi.personMedias({ personId });

        responseHandler.ok(res, medias);
    } catch {
        responseHandler.error(res)
    }
};

export default {personDetail, personMedias};