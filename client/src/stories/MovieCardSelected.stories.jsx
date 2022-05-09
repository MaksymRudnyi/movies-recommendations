
import React from 'react';
import { MovieCardSelected } from '../components'

import { movies } from './stub';

export default {
  title: 'Card/Movie card selected',
  component: MovieCardSelected
};

const Template = (args) => <MovieCardSelected {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  movie: movies[0]
};
