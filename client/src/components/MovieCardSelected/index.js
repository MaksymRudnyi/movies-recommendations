import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import CardMenu from '../CardMenu';


const MovieCardSelected = ({ movie, onCardDelete }) => {
    return (
        <Card sx={{ display: 'flex' }}>
            <CardMedia
                component="img"
                sx={{ width: 100 }}
                image={movie.image}
                alt={movie.title}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', position: 'relative' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        {movie.title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {movie.releaseDate}
                    </Typography>
                </CardContent>
                <Box sx={{ p: 2, pt: 0 }}>
                    {movie.genres?.length ? (
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            {movie.genres[0].name}
                        </Typography>
                    ) : null}
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        Length: {movie.runtime}
                    </Typography>
                </Box>
                <CardMenu>
                    <MenuItem onClick={onCardDelete}>
                        Delete
                    </MenuItem>
                </CardMenu>
            </Box>
            
        </Card>
    )
}

MovieCardSelected.propTypes = {
    movie: PropTypes.shape({
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        releaseDate: PropTypes.string,
        genres: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string
        })),
        runtime: PropTypes.number
    }).isRequired,
    onCardDelete: PropTypes.func
}

export default MovieCardSelected;