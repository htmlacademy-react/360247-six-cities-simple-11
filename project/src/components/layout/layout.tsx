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

  // function getKeyNameByStringValue(value: string) {
  //   return Object.entries(AppRoute).find(([key, val]) => val === value)?.[0];
  // }
  // const currentLocationName = getKeyNameByStringValue(currentLocationWithoutRouteParams);

  enum WrapperPageClassNamesEnum {
    Login = 'page--gray page--login',
    Room = '',
    Root = 'page--gray page--main'
  }
  //#todo refactor with generics
  const getWrapperPageClassNames = function(): string {

    switch (currentLocationWithoutRouteParams)
    {
      case '/login':
        return WrapperPageClassNamesEnum.Login;

      case '/offer':
        return WrapperPageClassNamesEnum.Room;

      default:
        return WrapperPageClassNamesEnum.Root;
    }
    // return WrapperPageClassNamesEnum[locationName];
  };

  console.log(WrapperPageClassNamesEnum['Login']);

  return (
    <WrapperPage elementClasses={getWrapperPageClassNames()}>
      <Header isHeaderAuthToBeRendered={currentLocationWithoutRouteParams !== AppRoute.Login} />
      <Outlet />
    </WrapperPage>
  );
}

export default Layout;
