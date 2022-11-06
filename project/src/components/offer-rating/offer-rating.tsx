import { getPersantageFromRatingValue } from '../../utils/utils';
import RatingStars from '../rating-stars/rating-stars';

type offerRatingProps = {rating: number}

function OfferRating({rating}: offerRatingProps): JSX.Element {

  return (
    <div className="property__rating rating">
      <div className="property__stars rating__stars">
        <RatingStars ratingInPercents={getPersantageFromRatingValue(rating)} />
        <span className="visually-hidden">Rating</span>
      </div>
      <span className="property__rating-value rating__value">{rating}</span>
    </div>
  );
}

export default OfferRating;
