import { Outlet, useLocation, useParams} from 'react-router-dom';
import { AppRoute } from '../../types';
import Header from '../header/header';
import WrapperPage from '../wrapper-page/wrapper-page';

function Layout(): JSX.Element {

  type RouteParamsType = {
    id: string;
  }

  const {id} = useParams<RouteParamsType>();
  const currentLocation: string = useLocation().pathname;
  const currentLocationWithoutRouteParams: string = id ? currentLocation.replace(`/${id}`, '') : currentLocation;

  enum WrapperPageClassNamesEnum {
    Login = 'page--gray page--login',
    Room = '',
    Root = 'page--gray page--main',
    NotFound = 'page--gray page--404'
  }
  //#todo refactor with generics
  const getWrapperPageClassNames = function(): string {

    switch (currentLocationWithoutRouteParams)
    {
      case '/login':
        return WrapperPageClassNamesEnum.Login;

      case '/offer':
        return WrapperPageClassNamesEnum.Room;

      case '/':
        return WrapperPageClassNamesEnum.Root;

      default:
        return WrapperPageClassNamesEnum.NotFound;
    }
    // return WrapperPageClassNamesEnum[currentLocationKey];
  };

  const wrapperPageClassNames = getWrapperPageClassNames();

  return (
    <WrapperPage elementClasses={wrapperPageClassNames}>
      {wrapperPageClassNames !== WrapperPageClassNamesEnum.NotFound &&
      <Header isHeaderAuthToBeRendered={currentLocationWithoutRouteParams !== AppRoute.Login} />}
      <Outlet />
    </WrapperPage>
  );
}

export default Layout;
