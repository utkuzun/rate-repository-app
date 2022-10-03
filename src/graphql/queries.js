import { gql } from '@apollo/client'

export const GET_REPOSITORIES = gql`
  query Repositories {
    repositories {
      edges {
        cursor
        node {
          id
          fullName
          ratingAverage
          reviewCount
          stargazersCount
          forksCount
          ownerAvatarUrl
          language
          description
        }
      }
      totalCount
      pageInfo {
        hasPreviousPage
        hasNextPage
        startCursor
        endCursor
      }
    }
  }
`

export const CURRENT_USER = gql`
  {
    me {
      id
      username
    }
  }
`
