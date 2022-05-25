import { gql } from "@apollo/client";

export const MOVIES_QUERY = gql`
query {
    movies {
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