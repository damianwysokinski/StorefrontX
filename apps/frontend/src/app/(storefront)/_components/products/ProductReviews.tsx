import { Review } from '@/types/review'
import { Rate } from 'antd'

interface ProductReviewsProps {
  reviews?: Review[]
}

export default function ProductReviews({ reviews }: ProductReviewsProps) {
  if (!reviews || reviews.length <= 0) {
    return <p>Be the first to review this item.</p>
  }

  return (
    <ul>
      {reviews?.map(({ id, title, content, rating }) => {
        return (
          <li key={id}>
            <Rate allowHalf value={rating} />
            <div className="font-semibold">{title}</div>
            <div>{content}</div>
          </li>
        )
      })}
    </ul>
  )
}
