const { getPopular, getDetails, discoverMovie } = require('../modules/movies');
const { getList } = require('../modules/genres')
const { Movie } = require('../modules/movies/entities/Movie')

async function movies(parent, args, { locale }) {
    const data = await discoverMovie(args.filter, locale);
    return data;
}

async function moviesByIds(parent, { ids }, { locale }) {
    const requests = ids.map((id) => getDetails(id, locale));
    const data = await Promise.all(requests);
    const movies = data.map(({ data }) => new Movie(data))

    return movies
}

async function genres(_, {}, {locale}) {
    return await getList(locale)
}

module.exports = {
    movies,
    moviesByIds,
    genres
}