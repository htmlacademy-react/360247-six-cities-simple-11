import { PropsWithChildren } from 'react';
import { offerDataType, AppRoute } from '../../types';
import LabelPremium from '../label-premium/label-premium';
import { Link } from 'react-router-dom';

type OfferCardProps = PropsWithChildren <{offerData: offerDataType}>

function OfferCard({offerData}: OfferCardProps): JSX.Element {

  return (
    <article className="cities__card place-card">
      {offerData.isPremium &&
        <div className="place-card__mark">
          <LabelPremium />
        </div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Room}/${offerData.id}`}>
          <img
            className="place-card__image"
            src={offerData.imageUrl}
            width={260}
            height={200}
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{offerData.price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${offerData.ratingInPercents}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Room}/:${offerData.id}`}>
            {offerData.title}
          </Link>
        </h2>
        <p className="place-card__type">{offerData.type}</p>
      </div>
    </article>
  );
}

export default OfferCard;
