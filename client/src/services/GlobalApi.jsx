import axios from "axios";

const key="5c04a3df070241e5a555a489c651b221"

const axiosCreate=axios.create({
    baseUrl: 'https://api.rawg.io/api'
})

const getAllGames=axiosCreate.get('/games?key='+key);

export default {getAllGames}