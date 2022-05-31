import { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { useQuery } from "@apollo/client";
import Pagination from '@mui/material/Pagination';

import { MovieCard, MovieCardSelected, SelectedMoviesForm } from '../../components'
import { MOVIES_QUERY } from './queries';
import { useMovies } from '../../hooks/useMovies';
import Stack from '@mui/material/Stack';

const SelectedMovies = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    height: 'calc(100vh - 140px)',
    position: 'sticky',
    top: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column'
  }));

const MoviesList = styled(Stack)(({theme}) => ({
    overflow: 'scroll',
    height: '100%'
}))

const Home = () => {
    const [page, setPage] = useState(1);
    const {loading, error, data } = useQuery(MOVIES_QUERY, { variables: { page }});
    const { selectedMovies, selectMovie, deleteMovie } = useMovies();

    const paginationHandler = (event, page) => {
        setPage(page)
    }
    if (error) {
        return 'Error';
    }

    const pagesCount = data?.movies?.totalPages <= 500 ? data?.movies?.totalPages : 500;

    return (
        <Box sx={{ flexGrow: 1, marginTop: 2 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Paper>
                        Filters section
                    </Paper>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Paper>
                        <Box sx={{ flexGrow: 1, padding: 1 }}>
                            {loading && 'Loading...'}
                            {data && (
                                <Grid container spacing={2}>
                                    {data.movies.results.map((movie) => (
                                        <Grid key={movie.id} item xs={12} sm={6} md={4} lg={3}>
                                            <MovieCard movie={movie} onCardSelect={selectMovie}/>
                                        </Grid>
                                    ))}
                                </Grid>
                            )}
                        </Box>
                        <Box mt={2} pb={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Pagination count={pagesCount}
                                page={page}
                                onChange={paginationHandler}/>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <SelectedMovies>
                        <MoviesList spacing={2}>
                            {selectedMovies.map((movie) => (
                                <MovieCardSelected key={movie.id}
                                    movie={movie}
                                    onCardDelete={deleteMovie}/>
                            ))}
                        </MoviesList>
                        <Box pt={2}>
                            <SelectedMoviesForm/>
                        </Box>
                    </SelectedMovies>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Home;