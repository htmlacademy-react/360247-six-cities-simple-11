import HeaderLogo from '../header-logo/header-logo';
import NavAuth from '../nav-auth/nav-auth';

type HeaderProps = {
  isHeaderAuthToBeRendered?: boolean;
}

function Header({isHeaderAuthToBeRendered}: HeaderProps): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <HeaderLogo />
          </div>
          {isHeaderAuthToBeRendered !== false && <NavAuth />}
        </div>
      </div>
    </header>
  );
}

export default Header;
