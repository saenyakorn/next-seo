import type { Review } from '../../types';
import { setAuthor } from './setAuthor';
import { setPublisher } from './setPublisher';
import { setReviewRating } from './setReviewRating';

export function setReviews(reviews?: Review | Review[]) {
  function mapReview({ reviewRating, author, publisher, ...rest }: Review) {
    return {
      ...rest,
      '@type': 'Review',
      ...(author && { author: setAuthor(author) }),
      ...(reviewRating && { reviewRating: setReviewRating(reviewRating) }),
      ...(publisher && { publisher: setPublisher(publisher.name) }),
    };
  }

  if (Array.isArray(reviews)) {
    return reviews.map(mapReview);
  } else if (reviews) {
    return mapReview(reviews);
  }

  return undefined;
}
