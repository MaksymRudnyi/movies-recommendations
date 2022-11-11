import { Field } from 'react-final-form'
import { FormattedMessage } from "react-intl";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormLabel from '@mui/material/FormLabel';

import { SORT_DIRECTION } from '../../../../const';

export const SortDirectionField = () => {
    return (
        <Field
            name="sortDirection"
            render={({ input }) => (
                <FormattedMessage id="filters.sort_direction">
                    {placeholder =>
                        <FormControl>
                        <FormLabel id="sort_direction">{placeholder}</FormLabel>
                        <RadioGroup
                          row
                          name="sort_directionp"
                          {...input}
                        >
                          <FormControlLabel value={SORT_DIRECTION.ASC} control={<Radio />} label={<FormattedMessage id="filters.sort_direction_options.asc"></FormattedMessage>} />
                          <FormControlLabel value={SORT_DIRECTION.DESC} control={<Radio />} label={<FormattedMessage id="filters.sort_direction_options.desc"></FormattedMessage>} />
                        
                        </RadioGroup>
                      </FormControl>
                    }
                </FormattedMessage>
            )}
        />
    )
}