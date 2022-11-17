import NavCities from '../../components/nav-cities/nav-cities';
import Map from '../../components/map/map';
import OffersPlaces from '../../components/offers-places/offers-places';
import { offerDataType } from '../../types';
import { useState } from 'react';

type ScreenMainProps = {offersData: offerDataType[]}

function ScreenMain({offersData}: ScreenMainProps): JSX.Element {

  const [activeOfferCardId, setActiveOfferCardId] = useState<number>(0);

  const points = offersData.map(({location, id}) => (
    {location, id}
  ));

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <NavCities />
      <div className="cities">
        <div className="cities__places-container container">
          <OffersPlaces setActiveOfferCardId={setActiveOfferCardId} offersData={offersData} />
          <Map city={offersData[0].city} points={points} selectedPointId={activeOfferCardId} />
        </div>
      </div>
    </main>
  );
}

export default ScreenMain;
