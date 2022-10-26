import { Link } from 'react-router-dom';
import { AppRoute } from '../../types';

function NavAuth (): JSX.Element {

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {/* <li className="header__nav-item user">
          <div className="header__nav-profile">
            <div className="header__avatar-wrapper user__avatar-wrapper" />
            <span className="header__user-name user__name">
                  Oliver.conner@gmail.com
            </span>
          </div>
        </li> */}
        <li className="header__nav-item">
          <Link className="header__nav-link" to={AppRoute.Login}>
            <span className="header__signout">Log in</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavAuth;
