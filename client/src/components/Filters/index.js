import { Form } from 'react-final-form'
import Box from '@mui/material/Box';
import { SortField, SortDirectionField, AdultField, YearField, SubmitField, ReleaseYearField, GenreField } from './components';
import { GENRES_QUERY } from './queries';
import { useQuery } from "@apollo/client";

export const Filters = ({ onSubmit, initialValues}) => {
    const {loading, error, data } = useQuery(GENRES_QUERY);

    if (loading) {
        return 'Loading ...'
    }

    return (
        <div>
            <Form
                onSubmit={onSubmit}
                initialValues={initialValues}
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form onSubmit={handleSubmit}>
                        <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Box sx={{display: 'flex', alignItems: 'center'}}>
                                <Box mr={3}>
                                    <YearField/>
                                </Box>

                                <Box mr={3}>
                                    <ReleaseYearField/>
                                </Box>

                                <Box mr={3}>
                                    <GenreField data={data}/>
                                </Box>
                                
                                <AdultField/>
                            </Box>
                            <Box sx={{display: 'flex', alignItems: 'center'}}>
                                <Box mr={3}>
                                    <SortField/>
                                </Box>
                                
                                <SortDirectionField/>
                            </Box>
                        </Box>
                        <Box >
                            <SubmitField/>
                        </Box>
                    </form>
                )}/>
      </div>
    )
}