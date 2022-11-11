const axios = require('axios');
const { Genre } = require('./entities/Genre');

const { API_KEY, API_BASE_URL } = require('../../config')

const getList = async (language) => {
    const result = await axios.get(`${API_BASE_URL}genre/movie/list?api_key=${API_KEY}&language=${language}`);

    return result.data.genres.map((genre) => new Genre(genre));   
}


module.exports = {
    getList
}