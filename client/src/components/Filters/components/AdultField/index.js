import { Field } from 'react-final-form'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { FormattedMessage } from "react-intl";

export const AdultField = () => (
    <Field
        name="includeAdult"
        type="checkbox"
        render={({ input }) => (
            <FormControlLabel control={<Checkbox {...input} />} label={<FormattedMessage id="filters.include_adult"/>} />
        )}
    />
)
