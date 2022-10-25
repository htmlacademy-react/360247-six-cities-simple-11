import Header from '../../components/header/header';
import NavCities from '../../components/nav-cities/nav-cities';
import Map from '../../components/map/map';
import OffersPlaces from '../../components/offers-places/offers-places';
import { PropsWithChildren } from 'react';

type ScreenMainProps = PropsWithChildren <{
  offersData: {
    title: string;
    imageUrl: string;
    type: string;
    price: number;
    ratingInPercents: number;
    isPremium: boolean;
    id: number;
  }[];
}>

function ScreenMain({offersData}: ScreenMainProps): JSX.Element {
  return (
    <>
      <Header />
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
    </>
  );
}

export default ScreenMain;
