import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import CheckIcon from '@mui/icons-material/Check';
import { Form, Field } from 'react-final-form'
import { FormattedMessage } from "react-intl";

const SelectedMoviesForm = ({ onSubmit }) => (
  <Form
    onSubmit={onSubmit}
    validate={values => {
      const errors = {}

      if (!values.listName) {
        errors.listName = 'Required'
      }

      return errors
    }}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <Paper
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}
        >
          <Field
            name="listName"
            render={({ input, meta }) => (
              <FormattedMessage id="put_the_list_name">
                    {placeholder =>
                        <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder={placeholder}
                        inputProps={{ 'aria-label': 'put list name' }}
                        {...input}
                      />
                    }
              </FormattedMessage>
            )}
          />
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton type="submit" color="primary" sx={{ p: '10px' }} aria-label="directions">
            <CheckIcon />
          </IconButton>
        </Paper>
      </form>
    )}/>
)

export default SelectedMoviesForm;