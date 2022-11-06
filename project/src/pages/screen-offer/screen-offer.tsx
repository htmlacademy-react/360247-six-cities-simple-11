import { useParams } from 'react-router-dom';
import Gallery from '../../components/gallery/gallery';
import LabelPremium from '../../components/label-premium/label-premium';
import OfferClosestPlaces from '../../components/offer-closest-places/offer-closest-places';
import OfferDetails from '../../components/offer-details/offer-details';
import OfferFeatures from '../../components/offer-features/offer-features';
import OfferHostInfo from '../../components/offer-host-info/offer-host-info';
import OfferMap from '../../components/offer-map/offer-map';
import OfferPrice from '../../components/offer-price/offer-price';
import OfferRating from '../../components/offer-rating/offer-rating';
import OfferReviews from '../../components/offer-reviews/offer-reviews';
import OfferTitle from '../../components/offer-title/offer-title';
import { offerDataType } from '../../types';
import { getHousingType } from '../../utils/utils';

type ScreenOfferProps = {offersData: offerDataType[]};

function ScreenOffer({offersData}: ScreenOfferProps): JSX.Element {

  const {id} = useParams<string>();

  const offer = offersData.filter((card) => card.id === Number(id))[0];

  return (
    <main className="page__main page__main--property">
      <section className="property">
        <Gallery images={offer.images[0].split(',')}/>
        <div className="property__container container">
          <div className="property__wrapper">
            {offer.isPremium &&
            <div className="property__mark">
              <LabelPremium />
            </div>}
            <OfferTitle content={offer.title} />
            <OfferRating rating={offer.rating}/>
            <OfferFeatures
              offerType={getHousingType(offer.type)}
              bedroomsQuantity={offer.bedrooms}
              maxAdults={offer.maxAdults}
            />
            <OfferPrice price={offer.price}/>
            <OfferDetails details={offer.goods[0].split(',')}/>
            <OfferHostInfo
              avatarUrl={offer.host.avatarUrl}
              id={offer.host.id}
              isPro={offer.host.isPro}
              name={offer.host.name}
              offerDescription={offer.description}
            />
            <OfferReviews />
          </div>
        </div>
        <OfferMap />
      </section>
      <div className="container">
        <OfferClosestPlaces />
      </div>
    </main>
  );
}

export default ScreenOffer;
