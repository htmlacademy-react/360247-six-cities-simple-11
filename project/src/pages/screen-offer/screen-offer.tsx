import Gallery from '../../components/gallery/gallery';
import Header from '../../components/header/header';
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

function ScreenOffer(): JSX.Element {

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <Gallery />
          <div className="property__container container">
            <div className="property__wrapper">
              <div className="property__mark">
                <LabelPremium />
              </div>
              <OfferTitle />
              <OfferRating />
              <OfferFeatures />
              <OfferPrice />
              <OfferDetails />
              <OfferHostInfo />
              <OfferReviews />
            </div>
          </div>
          <OfferMap />
        </section>
        <div className="container">
          <OfferClosestPlaces />
        </div>
      </main>
    </div>
  );
}

export default ScreenOffer;
