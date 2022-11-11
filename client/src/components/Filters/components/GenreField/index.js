import { Field } from 'react-final-form'
import { FormattedMessage } from "react-intl";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const GenreField = ({ data }) => {
    return (
        <Field
            name="genre"
            render={({ input }) => (
                <FormattedMessage id="filters.genre">
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
                                {data.genres.map(({ name, id }) => (
                                    <MenuItem key={id} value={id}>
                                        {name}
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