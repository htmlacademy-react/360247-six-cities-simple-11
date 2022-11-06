import { PropsWithChildren } from 'react';
import { offerDataType } from '../../types';
import OffersFilters from '../offers-filters/offers-filters';
import OfferList from '../offers-list/offers-list';

type OfferPlacesProps = PropsWithChildren <{offersData: offerDataType[]}>

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
