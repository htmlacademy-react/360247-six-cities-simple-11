import { PropsWithChildren } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from '../../hooks/scroll-to-top/scroll-to-top';
import ScreenAuth from '../../pages/screen-auth/screen-auth';
import ScreenMain from '../../pages/screen-main/screen-main';
import ScreenNotFound from '../../pages/screen-not-found/screen-not-found';
import ScreenOffer from '../../pages/screen-offer/screen-offer';
import { AppRoute, offerDataType } from '../../types';

//#todo вынести из экранов хэдер и общие обертки - layout/outlet
//#подключить Helmet
//#оформить страницу 404?


type AppScreenProps = PropsWithChildren <{offersData: offerDataType[]}>

function App({offersData}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path={AppRoute.Root}>
          <Route index
            element={<ScreenMain offersData = {offersData} />}
          />
          <Route
            path={AppRoute.Login}
            element={<ScreenAuth />}
          />
          <Route
            path={`${AppRoute.Room}/:id`}
            element={<ScreenOffer />}
          />
          <Route
            path='*'
            element={<ScreenNotFound />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
