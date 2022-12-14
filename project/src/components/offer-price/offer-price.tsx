type offerPriceProps = {price: number};

function OfferPrice({price}: offerPriceProps): JSX.Element {

  return (
    <div className="property__price">
      <b className="property__price-value">€{price}</b>
      <span className="property__price-text">&nbsp;night</span>
    </div>
  );
}

export default OfferPrice;
