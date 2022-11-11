const { format } = require('date-fns');
const { IMAGE_BASE_PATH } = require('../../../config');

class Genre {
    constructor(genre) {
        this.id = genre.id;
        this.name = genre.name;
    }
}

module.exports = {
    Genre
}