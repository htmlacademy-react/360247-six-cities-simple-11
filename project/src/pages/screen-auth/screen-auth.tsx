import FormLogin from '../../components/form-login/form-login';
import ShortcutToOffers from '../../components/shortcut-to-offers/shortcut-to-offers';

function ScreenAuth(): JSX.Element {

  return (
    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <FormLogin />
        <ShortcutToOffers />
      </div>
    </main>
  );
}

export default ScreenAuth;
