import { gql } from "@apollo/client";

export const DATA_MAP = gql`
    query DataMap {
        technologies {
            id
            title
            sub_technologies {
                id
                title
                translations {
                    id
                    title
                    lang {
                        id
                        title
                        lang
                    }
                    content {
                        document
                    }
                }
                translationsCount
            }
            sub_technologiesCount
        }
    }
`