import ScreenAuth from '../../pages/screen-auth/screen-auth';
import ScreenMain from '../../pages/screen-main/screen-main';
import ScreenOffer from '../../pages/screen-offer/screen-offer';

type AppScreenProps = {
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

function App({offersData}: AppScreenProps): JSX.Element {
  return (
    <>
      <ScreenMain
        offersData = {offersData}
      />

      <ScreenAuth />

      <ScreenOffer />
    </>
  );
}

export default App;
