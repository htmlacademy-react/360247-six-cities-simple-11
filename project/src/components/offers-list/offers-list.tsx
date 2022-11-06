import React, { PropsWithChildren, useState } from 'react';
import { offerDataType } from '../../types';
import OfferCard from '../offer-card/offer-card';

type OfferListProps = PropsWithChildren <{offersData: offerDataType[]}>

function OfferList({offersData}: OfferListProps): JSX.Element {

  const [, setActiveOfferCardId] = useState<number>(0);

  function handleCardMouseEnter(id:number) {
    setActiveOfferCardId(id);
  }

  function handleCardMouseLeave() {
    setActiveOfferCardId(0);
  }

  return (
    <>
      {offersData.map((offer) => (
        <OfferCard
          handleMouseEnter={handleCardMouseEnter}
          handleMouseLeave={handleCardMouseLeave}
          offerData={offer}
          key={offer.id}
        />)
      )}
    </>
  );
}

export default OfferList;
