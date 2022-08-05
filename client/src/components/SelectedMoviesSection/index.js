import { useState, useContext } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FormattedMessage } from "react-intl";
import { MovieCardSelected, SelectedMoviesForm, ConfirmModal } from '../../components'
import noMoviesImageSrc from '../../assets/no_movies.png';
import { AppContext } from '../../providers/appContext';

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

const NoMovies = styled(Box)(({theme}) => ({
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
}))

const SelectedMoviesSection = ({ selectedMovies, deleteMovie }) => {
    const [listName, setListName] = useState('');
    const [link, setLink] = useState('');
    const { state } = useContext(AppContext);

    const onSubmit = ({ listName }) => {
        const ids = selectedMovies.map(({id}) => id)
        const link = `${window.location.host}/recommend?title=${listName}&locale=${state.locale}&ids=${ids.join()}`;

        setLink(link);
        setListName(listName)
    }

    const onCloseConfirmModal = () => {
        setLink('')
    }

    if (!selectedMovies.length) {
        return (
            <SelectedMovies>
                <NoMovies>
                <Box
                    component="img"
                    sx={{
                        width: '50%',
                        opacity: '.6'
                    }}
                    alt="No images."
                    src={noMoviesImageSrc}
                />
                <Typography variant="h5" mt={2}>
                    <FormattedMessage id="no_selected_movies"/>
                </Typography>
                </NoMovies>
            </SelectedMovies>
        )
    }

    return (
        <SelectedMovies>
            <MoviesList spacing={2}>
                {selectedMovies.map((movie) => (
                    <MovieCardSelected key={movie.id}
                        movie={movie}
                        onCardDelete={deleteMovie}/>
                ))}
            </MoviesList>
            <Box pt={2}>
                <SelectedMoviesForm onSubmit={onSubmit}/>
            </Box>
            <ConfirmModal url={link}
                title={listName}
                open={!!link}
                onClose={onCloseConfirmModal}/>
        </SelectedMovies>
    )
};

export default SelectedMoviesSection;