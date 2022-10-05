import { gql } from '@apollo/client'

export const AUTHENTICATE = gql`
  mutation Mutation($credentials: AuthenticateInput) {
    authenticate(credentials: $credentials) {
      accessToken
      expiresAt
      user {
        id
        username
        reviewCount
      }
    }
  }
`

export const CREATE_REVIEW = gql`
  mutation CreateReview($review: CreateReviewInput) {
    createReview(review: $review) {
      id
      user {
        id
        username
      }
      repository {
        id
        ownerName
        fullName
        reviewCount
        ratingAverage
        stargazersCount
      }
      text
      createdAt
      rating
    }
  }
`
