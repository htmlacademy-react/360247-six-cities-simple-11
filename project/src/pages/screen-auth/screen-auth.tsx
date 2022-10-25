import FormLogin from '../../components/form-login/form-login';
import Header from '../../components/header/header';
import ShortcutToOffers from '../../components/shortcut-to-offers/shortcut-to-offers';

function ScreenAuth(): JSX.Element {

  return (
    <div className="page page--gray page--login">
      <Header isHeaderAuthToBeRendered={false} />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <FormLogin />
          <ShortcutToOffers />
        </div>
      </main>
    </div>
  );
}

export default ScreenAuth;
