import React, { PropsWithChildren } from 'react';
import { offerDataType } from '../../types';
import OfferCard from '../offer-card/offer-card';

type OfferListProps = PropsWithChildren <{offersData: offerDataType[]}>

function OfferList({offersData}: OfferListProps): JSX.Element {

  return (
    <React.Fragment>
      {offersData.map((offer) => <OfferCard offerData={offer} key={offer.id} />)}
    </React.Fragment>
  );
}

export default OfferList;


