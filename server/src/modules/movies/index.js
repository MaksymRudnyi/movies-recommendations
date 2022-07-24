const axios = require('axios');
const { Movies } = require('./entities/Movies');

const { API_KEY, API_BASE_URL } = require('../../config')

const getPopular = async (page) => {
    const result = await axios.get(`${API_BASE_URL}movie/popular?api_key=${API_KEY}&language=uk&page=${page}`);

    return new Movies(result.data);   
}

const getDetails = (id) => {
    return axios.get(`${API_BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US`);
}

module.exports = {
    getPopular,
    getDetails
}