import { Field } from 'react-final-form'
import { FormattedMessage } from "react-intl";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { SORT_OPTIONS } from '../../../../const';

export const SortField = () => {
    return (
        <Field
            name="sortBy"
            render={({ input }) => (
                <FormattedMessage id="filters.sort_by">
                    {placeholder =>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-label">{placeholder}</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                autoWidth
                                label={placeholder}
                                {...input}
                            >
                                {SORT_OPTIONS.map(({ label, value }) => (
                                    <MenuItem key={value} value={value}>
                                        <FormattedMessage id={`filters.sort.${label}`}></FormattedMessage>
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                    }
                </FormattedMessage>
            )}
        />
    )
}