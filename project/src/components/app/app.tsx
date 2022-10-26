import { PropsWithChildren } from 'react';
import ScreenAuth from '../../pages/screen-auth/screen-auth';
import ScreenMain from '../../pages/screen-main/screen-main';
import ScreenOffer from '../../pages/screen-offer/screen-offer';
import { offerDataType } from '../../types';


type AppScreenProps = PropsWithChildren <{offersData: offerDataType[]}>

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
