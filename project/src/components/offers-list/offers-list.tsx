import { offerDataType } from '../../types';
import OfferCard from '../offer-card/offer-card';

type OfferListProps = {
  offersData: offerDataType[];
  setActiveOfferCardId: React.Dispatch<React.SetStateAction<number>>;
}

function OfferList({offersData, setActiveOfferCardId}: OfferListProps): JSX.Element {

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
