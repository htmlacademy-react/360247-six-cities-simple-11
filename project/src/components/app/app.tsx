import { PropsWithChildren } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from '../../hooks/scroll-to-top/scroll-to-top';
import ScreenAuth from '../../pages/screen-auth/screen-auth';
import ScreenMain from '../../pages/screen-main/screen-main';
import ScreenNotFound from '../../pages/screen-not-found/screen-not-found';
import ScreenOffer from '../../pages/screen-offer/screen-offer';
import { AppRoute, offerDataType } from '../../types';
import Layout from '../layout/layout';

type AppScreenProps = PropsWithChildren <{offersData: offerDataType[]}>

function App({offersData}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path={AppRoute.Root} element={<Layout />}>
          <Route index
            element={<ScreenMain offersData = {offersData} />}
          />
          <Route
            path={AppRoute.Login}
            element={<ScreenAuth />}
          />
          <Route
            path={`${AppRoute.Room}/:id`}
            element={<ScreenOffer offersData = {offersData} />}
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
