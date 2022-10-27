import NavCities from '../../components/nav-cities/nav-cities';
import Map from '../../components/map/map';
import OffersPlaces from '../../components/offers-places/offers-places';
import { PropsWithChildren } from 'react';
import { offerDataType } from '../../types';

type ScreenMainProps = PropsWithChildren <{offersData: offerDataType[]}>

function ScreenMain({offersData}: ScreenMainProps): JSX.Element {

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <NavCities />
      <div className="cities">
        <div className="cities__places-container container">
          <OffersPlaces offersData={offersData} />
          <Map />
        </div>
      </div>
    </main>
  );
}

export default ScreenMain;
