import React from 'react';
import OfferCard from '../offer-card/offer-card';

type OfferListProps = {
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

function OfferList({offersData}: OfferListProps): JSX.Element {
  return (
    <React.Fragment>
      {offersData.map((offer: typeof offersData[0]) => <OfferCard offerData={offer} key={offer.id} />)}
    </React.Fragment>
  );
}

export default OfferList;


