const axios = require('axios');
const { Movies } = require('./entities/Movies');

const { API_KEY, API_BASE_URL } = require('../../config')

const getPopular = async (page, language) => {
    const result = await axios.get(`${API_BASE_URL}movie/popular?api_key=${API_KEY}&language=${language}&page=${page}`);

    return new Movies(result.data);   
}

const getDetails = (id, language) => {
    return axios.get(`${API_BASE_URL}movie/${id}?api_key=${API_KEY}&language=${language}`);
}

const discoverMovie = async(filter, language) => {
    const result = await axios.get(`${API_BASE_URL}discover/movie?api_key=${API_KEY}&language=${language}&page=${filter.page}&year=${filter.year}&sort_by=${filter.sortBy}.${filter.sortDirection}&include_adult=${filter.includeAdult}&primary_release_year=${filter.primaryReleaseYear}&with_genres=${filter.genre}`);

    return new Movies(result.data);
}

module.exports = {
    getPopular,
    getDetails,
    discoverMovie
}