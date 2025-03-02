import { Review } from '@/types/review'

export const calculateReviewsAverage = (reviews?: Review[]) => {
  if (!reviews || reviews.length === 0) return 0

  return reviews.reduce((acc, review) => {
    return acc + review.rating / reviews.length
  }, 0)
}
