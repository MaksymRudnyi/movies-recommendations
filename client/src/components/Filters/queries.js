import { gql } from "@apollo/client";

export const GENRES_QUERY = gql`
query Genres {
    genres {
        id
        name
    }
}
`