import HeaderLogo from '../header-logo/header-log';
import NavAuth from '../nav-auth/nav-auth';

type HeaderProps = {
  isHeaderAuth?: boolean;
}

function Header({isHeaderAuth}: HeaderProps): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <HeaderLogo />
          </div>
          {isHeaderAuth && <NavAuth />}
        </div>
      </div>
    </header>
  );
}

export default Header;
