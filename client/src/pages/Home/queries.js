import { gql } from "@apollo/client";

export const MOVIES_QUERY = gql`
query Movies($filter: MoviesFilterInput) {
    movies(filter: $filter) {
        page
        totalResults
        totalPages
        results {
            id
            title
            image: posterPath
            releaseDate(format: "dd.MM.yyyy")
        }
    }
}
`