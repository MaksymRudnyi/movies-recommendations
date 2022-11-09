import { Form, Field } from 'react-final-form'
import { FormattedMessage } from "react-intl";
import Box from '@mui/material/Box';
import Autocomplete from '@mui/material/Autocomplete';
import { SortField, SortDirectionField, AdultField, YearField, SubmitField } from './components';
import { SORT_DIRECTION } from '../../const';
export const Filters = ({ onSubmit, initialValues}) => {
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