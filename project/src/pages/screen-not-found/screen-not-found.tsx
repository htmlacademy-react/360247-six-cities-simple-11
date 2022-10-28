import { Link } from 'react-router-dom';
import { AppRoute } from '../../types';

function ScreenNotFound(): JSX.Element {

  return (
    <>
      <h1>404 Not found</h1>
      <Link to={AppRoute.Root}>Перейти на главную страницу</Link>
    </>
  );
}

export default ScreenNotFound;
