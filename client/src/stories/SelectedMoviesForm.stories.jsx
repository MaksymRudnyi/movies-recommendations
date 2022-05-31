import React from 'react';
import { SelectedMoviesForm } from '../components'

export default {
  title: 'Forms/SelectedMovies',
  component: SelectedMoviesForm
};

const Template = (args) => <SelectedMoviesForm {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
