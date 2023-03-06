import { gql } from '@apollo/client';

// Technologies
export const GET_TECHNOLOGIES = gql`
  query Technologies {
    technologies {
      id
      title
		  value
		  route
      sub_technologies {
        id
        title
        value
		    route
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

export const GET_ONLY_TECHNOLOGIES = gql`
  query OnlyTechnologies {
    technologies {
      id
      title
      value
      route
      sub_technologiesCount
    }
  }
`

// Technology

export const GET_TECHNOLOGY = gql`
  query Technology (
    $name: String = ""
  ) {
    technologies(where: {route: {equals: $name}}, take: 1) {
      id
      title
      value
      route
		  sub_technologies {
        id
        title
        value
        route
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
		  }
		  sub_technologiesCount
    }
  }
`

export const GET_ONLY_TECHNOLOGY = gql`
  query OnlyTechnology(
    $name: String = ""
  ) {
    technologies(where: {title: {equals: $name}}) {
      id
      title
      value
      route
      sub_technologiesCount
    }
  }
`

// Sub Technologies

export const GET_SUB_TECHNOLOGIES = gql`
  query SubTechnologies {
    subTechnologies {
      id
      title
      value
      route
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
  }
`

export const GET_ONLY_SUB_TECHNOLOGIES = gql`
  query OnlySubTechnologies {
    subTechnologies {
      id
      title
      route
      translationsCount
    }
  }
`

// Sub Technology

export const GET_SUB_TECHNOLOGY = gql`
  query SubTechnology (
		$name: String = ""
  ) {
    subTechnologies(where: {title: {equals: $name}}) {
      id
      title
      value
      route
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
  }
`

export const GET_ONLY_SUB_TECHNOLOGY = gql`
  query OnlySubTechnology (
    $name: String = ""
  ) {
    subTechnologies(where: {title: {equals: $name}}) {
      id
      title
      route
      translationsCount
    }
  }
`

// Translations

export const GET_TRANSLATIONS = gql`
  query Translations {
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
  }
`

export const GET_ONLY_TRANSLATIONS = gql`
	query OnlyTranslations {
		translations {
			id
			title
			content {
				document
			}
		}
	}
`

// Translation

export const GET_TRANSLATION = gql`
  query Translation( $name: String = "" ) {
    translations(where: {title: {equals: $name}}) {
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
  }
`

export const GET_ONLY_TRANSLATION = gql`
  query OnlyTranslation( $name: String = "" ) {
    translations(where: {title: {equals: $name}}) {
      id
      title
      content {
        document
      }
    }
  }
`

// Languages

export const GET_LANGUAGES = gql`
  query Languages {
    languages {
      id
      title
      lang
    }
  }
`

export const GET_LANGUAGE = gql`
  query Language( $name: String = "" ) {
    languages(where: {title: {equals: $name}}) {
      id
      title
      lang
    }
  }
`