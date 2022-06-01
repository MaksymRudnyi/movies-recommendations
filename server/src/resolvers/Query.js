const { getPopular } = require('../modules/movies');

async function movies(parent, args) {

    console.log('args: ', args);
    const data = await getPopular(args.page);

    return data;
}

module.exports = {
    movies,
}