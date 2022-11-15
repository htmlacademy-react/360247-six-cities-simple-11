import cn from 'classnames';

type offerHostInfoProps = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
  offerDescription: string;
}

function OfferHostInfo({avatarUrl, id, isPro, name , offerDescription}: offerHostInfoProps): JSX.Element {

  return (
    <div className="property__host">
      <h2 className="property__host-title">Meet the host</h2>
      <div className="property__host-user user">
        <div
          className={cn(
            'property__avatar-wrapper',
            'user__avatar-wrapper',
            {'property__avatar-wrapper--pro': isPro},
          )}
        >
          <img
            className="property__avatar user__avatar"
            src={avatarUrl}
            width={74}
            height={74}
            alt="Host avatar"
          />
        </div>
        <span className="property__user-name">{name}</span>
        {isPro && <span className="property__user-status">Pro</span>}
      </div>
      <div className="property__description">
        <p className="property__text">
          {offerDescription}
        </p>
        {/* <p className="property__text">
                An independent House, strategically located between Rembrand
                Square and National Opera, but where the bustle of the city
                comes to rest in this alley flowery and colorful.
        </p> */}
      </div>
    </div>
  );
}

export default OfferHostInfo;
