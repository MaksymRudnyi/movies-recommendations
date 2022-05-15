const { IMAGE_BASE_PATH } = require('../../../config');

class Movie {
    constructor(movie) {
        this.id = movie.id;
        this.title = movie.title;
        this.releaseDate = movie.release_date;
        this.posterPath = `${IMAGE_BASE_PATH}${movie.poster_path}`;
    }
}

module.exports = {
    Movie
}