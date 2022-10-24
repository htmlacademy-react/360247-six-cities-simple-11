import OffersFilters from '../offers-filters/offers-filters';
import OfferList from '../offers-list/offers-list';

type OfferPlacesProps = {
  offersData: {
    title: string;
    imageUrl: string;
    type: string;
    price: number;
    ratingInPercents: number;
    isPremium: boolean;
    id: number;
  }[];
}

function OfferPlaces({offersData}: OfferPlacesProps): JSX.Element {

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">312 places to stay in Amsterdam</b>
      <OffersFilters />
      <div className="cities__places-list places__list tabs__content">
        <OfferList offersData={offersData} />
      </div>
    </section>
  );
}

export default OfferPlaces;
