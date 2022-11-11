import { LOCALES } from '../const';

export default {
  [LOCALES.ENGLISH]: {
    'navigation': {
      'home': 'Movies recommendation',
      'settings': 'Settings'
    },
    'no_selected_movies': 'No selected movies',
    'put_the_list_name': 'Put the list name',
    'share_with_friends': 'Share with friends',
    'copied': 'Copied!',
    select: 'Select',
    delete: 'Delete',
    filters: {
      sort_by: 'Sort by',
      sort_direction: 'Sort direction',
      include_adult: 'Include adult',
      year: 'Year',
      release_year: 'Release year',
      genre: 'Genre',
      submit: 'Submit',
      sort: {
        'popularity': 'Popularity',
        'release_date': 'Release date',
        'revenue': 'Revenue',
        'primary_release_date': 'Primary release date',
        'original_title': 'Original title',
        'vote_average': 'Vote average',
        'vote_count': 'Vote count'
      },
      sort_direction_options: {
        asc: 'ASC',
        desc: 'DESC'
      }
    }
  }
};