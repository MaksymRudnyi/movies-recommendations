function movies(parent, args) {
    return {
        page: 1,
        totalResults: 10,
        totalPage: 10,
        results: [{
            id: 1,
            title: 'Movie title',
            releaseDate: 'release date',
            posterPath: ''
        }]
    }
}

module.exports = {
    movies,
}