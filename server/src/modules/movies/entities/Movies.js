const { Movie } = require('./Movie');

class Movies {
    constructor(movies) {
        this.page = movies.page;
        this.totalResults = movies.total_results;
        this.totalPages = movies.total_pages;
        this.results = movies.results.map((movie) => new Movie(movie));
    }
}

module.exports = {
    Movies
}